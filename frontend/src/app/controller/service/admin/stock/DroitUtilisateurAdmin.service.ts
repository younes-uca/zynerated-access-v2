import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {DroitUtilisateurDto} from 'src/app/controller/model/stock/DroitUtilisateur.model';
import {DroitUtilisateurCriteria} from 'src/app/controller/criteria/stock/DroitUtilisateurCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class DroitUtilisateurAdminService extends AbstractService<DroitUtilisateurDto, DroitUtilisateurCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/droitUtilisateur/');
    }

    public constrcutDto(): DroitUtilisateurDto {
        return new DroitUtilisateurDto();
    }

    public constrcutCriteria(): DroitUtilisateurCriteria {
        return new DroitUtilisateurCriteria();
    }
}
