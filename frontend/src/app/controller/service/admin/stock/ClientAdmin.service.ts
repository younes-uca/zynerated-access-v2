import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

import {ClientDto} from 'src/app/controller/model/stock/Client.model';
import {ClientCriteria} from 'src/app/controller/criteria/stock/ClientCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {RoleAdminService} from './RoleAdmin.service';


@Injectable({
  providedIn: 'root'
})
export class ClientAdminService extends AbstractService<ClientDto, ClientCriteria> {
     constructor(private http: HttpClient, private roleService: RoleAdminService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/client/');
    }
    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }

    public constrcutDto(): ClientDto {
        return new ClientDto();
    }

    public constrcutCriteria(): ClientCriteria {
        return new ClientCriteria();
    }
}
