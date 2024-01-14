import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {DroitDto} from 'src/app/controller/model/stock/Droit.model';
import {DroitCriteria} from 'src/app/controller/criteria/stock/DroitCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class DroitAdminService extends AbstractService<DroitDto, DroitCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/droit/');
    }

    public constrcutDto(): DroitDto {
        return new DroitDto();
    }

    public constrcutCriteria(): DroitCriteria {
        return new DroitCriteria();
    }
}
