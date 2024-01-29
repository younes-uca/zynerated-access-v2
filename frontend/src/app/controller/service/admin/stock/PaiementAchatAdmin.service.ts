import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

import {PaiementAchatDto} from 'src/app/controller/model/stock/PaiementAchat.model';
import {PaiementAchatCriteria} from 'src/app/controller/criteria/stock/PaiementAchatCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {RoleAdminService} from './RoleAdmin.service';


@Injectable({
  providedIn: 'root'
})
export class PaiementAchatAdminService extends AbstractService<PaiementAchatDto, PaiementAchatCriteria> {
     constructor(private http: HttpClient, private roleService: RoleAdminService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/paiementAchat/');
    }
    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }

    public constrcutDto(): PaiementAchatDto {
        return new PaiementAchatDto();
    }

    public constrcutCriteria(): PaiementAchatCriteria {
        return new PaiementAchatCriteria();
    }
}
