import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ModelPermissionUserAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionUserAdmin.service';
import {ModelPermissionUserDto} from 'src/app/controller/model/stock/ModelPermissionUser.model';
import {ModelPermissionUserCriteria} from 'src/app/controller/criteria/stock/ModelPermissionUserCriteria.model';

import {ModelPermissionDto} from 'src/app/controller/model/stock/ModelPermission.model';
import {ModelPermissionAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionAdmin.service';
import {UserDto} from 'src/app/controller/model/stock/User.model';
import {UserAdminService} from 'src/app/controller/service/admin/stock/UserAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/stock/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/stock/ActionPermissionAdmin.service';
@Component({
  selector: 'app-model-permission-user-view-admin',
  templateUrl: './model-permission-user-view-admin.component.html'
})
export class ModelPermissionUserViewAdminComponent extends AbstractViewController<ModelPermissionUserDto, ModelPermissionUserCriteria, ModelPermissionUserAdminService> implements OnInit {


    constructor(private modelPermissionUserService: ModelPermissionUserAdminService, private modelPermissionService: ModelPermissionAdminService, private userService: UserAdminService, private actionPermissionService: ActionPermissionAdminService){
        super(modelPermissionUserService);
    }

    ngOnInit(): void {
    }


    get user(): UserDto {
       return this.userService.item;
    }
    set user(value: UserDto) {
        this.userService.item = value;
    }
    get users(): Array<UserDto> {
       return this.userService.items;
    }
    set users(value: Array<UserDto>) {
        this.userService.items = value;
    }
    get modelPermission(): ModelPermissionDto {
       return this.modelPermissionService.item;
    }
    set modelPermission(value: ModelPermissionDto) {
        this.modelPermissionService.item = value;
    }
    get modelPermissions(): Array<ModelPermissionDto> {
       return this.modelPermissionService.items;
    }
    set modelPermissions(value: Array<ModelPermissionDto>) {
        this.modelPermissionService.items = value;
    }
    get actionPermission(): ActionPermissionDto {
       return this.actionPermissionService.item;
    }
    set actionPermission(value: ActionPermissionDto) {
        this.actionPermissionService.item = value;
    }
    get actionPermissions(): Array<ActionPermissionDto> {
       return this.actionPermissionService.items;
    }
    set actionPermissions(value: Array<ActionPermissionDto>) {
        this.actionPermissionService.items = value;
    }


}
