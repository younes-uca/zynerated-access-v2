import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

import {ActionPermissionDto} from 'src/app/controller/model/stock/ActionPermission.model';
import {ActionPermissionCriteria} from 'src/app/controller/criteria/stock/ActionPermissionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {RoleAdminService} from './RoleAdmin.service';


@Injectable({
  providedIn: 'root'
})
export class ActionPermissionAdminService extends AbstractService<ActionPermissionDto, ActionPermissionCriteria> {
     constructor(private http: HttpClient, private roleService: RoleAdminService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/actionPermission/');
    }
    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }
    public constrcutDto(): ActionPermissionDto {
        return new ActionPermissionDto();
    }

    public constrcutCriteria(): ActionPermissionCriteria {
        return new ActionPermissionCriteria();
    }
}
