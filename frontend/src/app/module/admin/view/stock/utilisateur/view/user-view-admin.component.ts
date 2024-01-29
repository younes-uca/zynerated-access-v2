import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {UserAdminService} from 'src/app/controller/service/admin/stock/UserAdmin.service';
import {UserDto} from 'src/app/controller/model/stock/User.model';
import {UserCriteria} from 'src/app/controller/criteria/stock/UserCriteria.model';

import {RoleUserDto} from 'src/app/controller/model/stock/RoleUser.model';
import {RoleUserAdminService} from 'src/app/controller/service/admin/stock/RoleUserAdmin.service';
import {ModelPermissionDto} from 'src/app/controller/model/stock/ModelPermission.model';
import {ModelPermissionAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionAdmin.service';
import {RoleDto} from 'src/app/controller/model/stock/Role.model';
import {RoleAdminService} from 'src/app/controller/service/admin/stock/RoleAdmin.service';
import {ModelPermissionUserDto} from 'src/app/controller/model/stock/ModelPermissionUser.model';
import {ModelPermissionUserAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionUserAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/stock/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/stock/ActionPermissionAdmin.service';
@Component({
  selector: 'app-user-view-admin',
  templateUrl: './user-view-admin.component.html'
})
export class UserViewAdminComponent extends AbstractViewController<UserDto, UserCriteria, UserAdminService> implements OnInit {

    modelPermissionUsers = new ModelPermissionUserDto();
    modelPermissionUserss: Array<ModelPermissionUserDto> = [];
    roleUsers = new RoleUserDto();
    roleUserss: Array<RoleUserDto> = [];

    constructor(private userService: UserAdminService, private roleUserService: RoleUserAdminService, private modelPermissionService: ModelPermissionAdminService, private roleAdminService: RoleAdminService, private modelPermissionUserService: ModelPermissionUserAdminService, private actionPermissionService: ActionPermissionAdminService){
        super(userService);
    }

    ngOnInit(): void {
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
    get role(): RoleDto {
       return this.roleService.item;
    }
    set role(value: RoleDto) {
        this.roleService.item = value;
    }
    get roles(): Array<RoleDto> {
       return this.roleAdminService.items;
    }
    set roles(value: Array<RoleDto>) {
        this.roleAdminService.items = value;
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
