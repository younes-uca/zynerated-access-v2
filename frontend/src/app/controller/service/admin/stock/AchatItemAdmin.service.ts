import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

import {AchatItemDto} from 'src/app/controller/model/stock/AchatItem.model';
import {AchatItemCriteria} from 'src/app/controller/criteria/stock/AchatItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {RoleService} from '../../../../zynerator/security/controller/service/Role.service';


@Injectable({
  providedIn: 'root'
})
export class AchatItemAdminService extends AbstractService<AchatItemDto, AchatItemCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/achatItem/');
    }
    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }

    public constrcutDto(): AchatItemDto {
        return new AchatItemDto();
    }

    public constrcutCriteria(): AchatItemCriteria {
        return new AchatItemCriteria();
    }
}
