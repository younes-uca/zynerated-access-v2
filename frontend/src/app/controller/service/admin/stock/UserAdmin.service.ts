import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {UserDto} from 'src/app/controller/model/stock/User.model';
import {UserCriteria} from 'src/app/controller/criteria/stock/UserCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {RoleAdminService} from './RoleAdmin.service';


@Injectable({
  providedIn: 'root'
})
export class UserAdminService extends AbstractService<UserDto, UserCriteria> {
     constructor(private http: HttpClient, private roleService: RoleAdminService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/user/');
    }
    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }

    public constrcutDto(): UserDto {
        return new UserDto();
    }

    public constrcutCriteria(): UserCriteria {
        return new UserCriteria();
    }
}
