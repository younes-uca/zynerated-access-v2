import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {RoleAdminService} from 'src/app/controller/service/admin/stock/RoleAdmin.service';
import {RoleDto} from 'src/app/controller/model/stock/Role.model';
import {RoleCriteria} from 'src/app/controller/criteria/stock/RoleCriteria.model';

@Component({
  selector: 'app-role-view-admin',
  templateUrl: './role-view-admin.component.html'
})
export class RoleViewAdminComponent extends AbstractViewController<RoleDto, RoleCriteria, RoleAdminService> implements OnInit {


    constructor(private roleAdminService: RoleAdminService){
        super(roleAdminService);
    }

    ngOnInit(): void {
    }




}
