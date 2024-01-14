import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {DroitAdminService} from 'src/app/controller/service/admin/stock/DroitAdmin.service';
import {DroitDto} from 'src/app/controller/model/stock/Droit.model';
import {DroitCriteria} from 'src/app/controller/criteria/stock/DroitCriteria.model';

@Component({
  selector: 'app-droit-view-admin',
  templateUrl: './droit-view-admin.component.html'
})
export class DroitViewAdminComponent extends AbstractViewController<DroitDto, DroitCriteria, DroitAdminService> implements OnInit {


    constructor(private droitService: DroitAdminService){
        super(droitService);
    }

    ngOnInit(): void {
    }




}
