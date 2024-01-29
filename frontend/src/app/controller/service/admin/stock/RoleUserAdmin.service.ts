import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {RoleUserDto} from 'src/app/controller/model/stock/RoleUser.model';
import {RoleUserCriteria} from 'src/app/controller/criteria/stock/RoleUserCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {RoleAdminService} from './RoleAdmin.service';


@Injectable({
  providedIn: 'root'
})
export class RoleUserAdminService extends AbstractService<RoleUserDto, RoleUserCriteria> {
     constructor(private http: HttpClient, private roleService: RoleAdminService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/roleUser/');
    }
    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }
    public constrcutDto(): RoleUserDto {
        return new RoleUserDto();
    }

    public constrcutCriteria(): RoleUserCriteria {
        return new RoleUserCriteria();
    }
}
