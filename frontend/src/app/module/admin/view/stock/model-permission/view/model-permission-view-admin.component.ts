import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ModelPermissionAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionAdmin.service';
import {ModelPermissionDto} from 'src/app/controller/model/stock/ModelPermission.model';
import {ModelPermissionCriteria} from 'src/app/controller/criteria/stock/ModelPermissionCriteria.model';

import {ActionPermissionDto} from 'src/app/controller/model/stock/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/stock/ActionPermissionAdmin.service';
import {PermissionDto} from 'src/app/controller/model/stock/Permission.model';
import {PermissionAdminService} from 'src/app/controller/service/admin/stock/PermissionAdmin.service';
@Component({
  selector: 'app-model-permission-view-admin',
  templateUrl: './model-permission-view-admin.component.html'
})
export class ModelPermissionViewAdminComponent extends AbstractViewController<ModelPermissionDto, ModelPermissionCriteria, ModelPermissionAdminService> implements OnInit {

    permissions = new PermissionDto();
    permissionss: Array<PermissionDto> = [];

    constructor(private modelPermissionService: ModelPermissionAdminService, private actionPermissionService: ActionPermissionAdminService, private permissionService: PermissionAdminService){
        super(modelPermissionService);
    }

    ngOnInit(): void {
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
