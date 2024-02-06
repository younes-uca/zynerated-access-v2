import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


import { AppComponent } from 'src/app/app.component';
import { AppMainComponent } from 'src/app/template/app.main.component';


import { AuthService } from 'src/app/zynerator/security/controller/service/Auth.service';
import {UserDto} from '../zynerator/security/controller/model/User.model';
import {UserService} from '../zynerator/security/controller/service/User.service';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent{

    constructor(public app: AppComponent, public appMain: AppMainComponent, private authService: AuthService, private translateService: TranslateService, private userService: UserService) {
    }





    roleAdmin = false;

   editDialog = false ;

    public async edit(dto: UserDto) {
        this.userService.findByUsername(dto.username).subscribe(res => {
            this.item = res;
            this.editDialog = true;
        });

    }
    public editUser(){
        this.userService.edit().subscribe(data => this.authenticatedUser = data);
        this.authService.loadInfos();
        this.editDialog = false;
    }

    public hideEditDialog() {
        this.editDialog = false;
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


    get item(): UserDto {
        return this.userService.item;
    }

    set item(value: UserDto) {
        this.userService.item = value;
    }
    get authenticatedUser(): UserDto{
        return this.authService.authenticatedUser;
    }
    set authenticatedUser(userDto: UserDto){
        this.authService.authenticatedUser = userDto;
    }
}
