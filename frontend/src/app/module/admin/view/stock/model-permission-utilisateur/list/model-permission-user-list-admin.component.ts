import {Component, OnInit} from '@angular/core';
import {ModelPermissionUserAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionUserAdmin.service';
import {ModelPermissionUserDto} from 'src/app/controller/model/stock/ModelPermissionUser.model';
import {ModelPermissionUserCriteria} from 'src/app/controller/criteria/stock/ModelPermissionUserCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ModelPermissionDto} from 'src/app/controller/model/stock/ModelPermission.model';
import {ModelPermissionAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionAdmin.service';
import {UserDto} from 'src/app/controller/model/stock/User.model';
import {UserAdminService} from 'src/app/controller/service/admin/stock/UserAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/stock/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/stock/ActionPermissionAdmin.service';


@Component({
  selector: 'app-model-permission-user-list-admin',
  templateUrl: './model-permission-user-list-admin.component.html'
})
export class ModelPermissionUserListAdminComponent extends AbstractListController<ModelPermissionUserDto, ModelPermissionUserCriteria, ModelPermissionUserAdminService>  implements OnInit {

    fileName = 'ModelPermissionUser';

     yesOrNoValue: any[] = [];
    actionPermissions: Array<ActionPermissionDto>;
    modelPermissions: Array<ModelPermissionDto>;
    users: Array<UserDto>;


    constructor( private modelPermissionUserService: ModelPermissionUserAdminService  , private modelPermissionService: ModelPermissionAdminService, private userService: UserAdminService, private actionPermissionService: ActionPermissionAdminService) {
        super(modelPermissionUserService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadActionPermission();
        this.loadModelPermission();
        this.loadUser();
        this.yesOrNoValue =  [{label: 'Value', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }


    public initCol() {
        this.cols = [
            {field: 'actionPermission?.reference', header: 'Action permission'},
            {field: 'modelPermission?.reference', header: 'Model permission'},
            {field: 'value', header: 'Value'},
            {field: 'user?.email', header: 'User'},
            {field: 'subAttribute', header: 'Sub attribute'},
        ];
    }


    public async loadActionPermission(){
       this.actionPermissionService.findAllOptimized().subscribe(actionPermissions => this.actionPermissions = actionPermissions, error => console.log(error))
    }
    public async loadModelPermission(){
       this.modelPermissionService.findAllOptimized().subscribe(modelPermissions => this.modelPermissions = modelPermissions, error => console.log(error))
    }
    public async loadUser(){
       this.userService.findAllOptimized().subscribe(users => this.users = users, error => console.log(error))
    }



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Action permission': e.actionPermission?.reference ,
                'Model permission': e.modelPermission?.reference ,
                'Value': e.value? 'Vrai' : 'Faux' ,
                'User': e.user?.email ,
                 'Sub attribute': e.subAttribute ,
            }
        });

        this.criteriaData = [{
        //'Action permission': this.criteria.actionPermission?.reference ? this.criteria.actionPermission?.reference : environment.emptyForExport ,
        //'Model permission': this.criteria.modelPermission?.reference ? this.criteria.modelPermission?.reference : environment.emptyForExport ,
            'Value': this.criteria.value ? (this.criteria.value ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        //'User': this.criteria.user?.email ? this.criteria.user?.email : environment.emptyForExport ,
            'Sub attribute': this.criteria.subAttribute ? this.criteria.subAttribute : environment.emptyForExport ,
        }];
      }
}
