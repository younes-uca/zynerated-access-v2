import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

import {AchatDto} from 'src/app/controller/model/stock/Achat.model';
import {AchatCriteria} from 'src/app/controller/criteria/stock/AchatCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {RoleService} from '../../../../zynerator/security/controller/service/Role.service';


@Injectable({
  providedIn: 'root'
})
export class AchatAdminService extends AbstractService<AchatDto, AchatCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/achat/');
    }
    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }

    public constrcutDto(): AchatDto {
        return new AchatDto();
    }

    public constrcutCriteria(): AchatCriteria {
        return new AchatCriteria();
    }
}
