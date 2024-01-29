import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


import { AppComponent } from 'src/app/app.component';
import { AppMainComponent } from 'src/app/template/app.main.component';


import { AuthService } from 'src/app/zynerator/security/Auth.service';
import {UserDto} from '../controller/model/stock/User.model';
import {UserEditAdminComponent} from '../module/admin/view/stock/utilisateur/edit/user-edit-admin.component';
import {UserAdminService} from '../controller/service/admin/stock/UserAdmin.service';
import {Footer, MessageService} from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent{

    constructor(public app: AppComponent, public appMain: AppMainComponent, private authService: AuthService, private translateService: TranslateService, private userService: UserAdminService) {
    }



    get authenticatedUser(): UserDto{
        return this.authService.authenticatedUser;
    }

    roleAdmin = false;
   item = new UserDto();
   editDialog = false ;

    public async edit(dto: UserDto) {
        this.userService.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }
    useLanguage(language: string): void {
        this.translateService.use(language);
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit(): void {
        this.authService.loadInfos();
        if ( this.authService.authenticatedUser.roleUsers[0].role.authority === 'ROLE_ADMIN'){
            this.roleAdmin = true;
        }
    }

    logout(){
        this.authService.logout();
    }


}
