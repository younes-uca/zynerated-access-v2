import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

import {ModelPermissionUserDto} from 'src/app/controller/model/stock/ModelPermissionUser.model';
import {ModelPermissionUserCriteria} from 'src/app/controller/criteria/stock/ModelPermissionUserCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {RoleAdminService} from './RoleAdmin.service';


@Injectable({
  providedIn: 'root'
})
export class ModelPermissionUserAdminService extends AbstractService<ModelPermissionUserDto, ModelPermissionUserCriteria> {
     constructor(private http: HttpClient, private roleService: RoleAdminService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/modelPermissionUser/');
    }
    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }

    public constrcutDto(): ModelPermissionUserDto {
        return new ModelPermissionUserDto();
    }

    public constrcutCriteria(): ModelPermissionUserCriteria {
        return new ModelPermissionUserCriteria();
    }
}
