import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

import {CategorieProduitDto} from 'src/app/controller/model/stock/CategorieProduit.model';
import {CategorieProduitCriteria} from 'src/app/controller/criteria/stock/CategorieProduitCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {RoleAdminService} from './RoleAdmin.service';


@Injectable({
  providedIn: 'root'
})
export class CategorieProduitAdminService extends AbstractService<CategorieProduitDto, CategorieProduitCriteria> {
     constructor(private http: HttpClient, private roleService: RoleAdminService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/categorieProduit/');
    }
    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }
    public constrcutDto(): CategorieProduitDto {
        return new CategorieProduitDto();
    }

    public constrcutCriteria(): CategorieProduitCriteria {
        return new CategorieProduitCriteria();
    }
}
