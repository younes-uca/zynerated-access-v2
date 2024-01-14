import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {ModelPermissionUtilisateurDto} from 'src/app/controller/model/stock/ModelPermissionUtilisateur.model';
import {ModelPermissionUtilisateurCriteria} from 'src/app/controller/criteria/stock/ModelPermissionUtilisateurCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ModelPermissionUtilisateurAdminService extends AbstractService<ModelPermissionUtilisateurDto, ModelPermissionUtilisateurCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/modelPermissionUtilisateur/');
    }

    public constrcutDto(): ModelPermissionUtilisateurDto {
        return new ModelPermissionUtilisateurDto();
    }

    public constrcutCriteria(): ModelPermissionUtilisateurCriteria {
        return new ModelPermissionUtilisateurCriteria();
    }
}
