import {Component, OnInit} from '@angular/core';
import {DroitAdminService} from 'src/app/controller/service/admin/stock/DroitAdmin.service';
import {DroitDto} from 'src/app/controller/model/stock/Droit.model';
import {DroitCriteria} from 'src/app/controller/criteria/stock/DroitCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-droit-list-admin',
  templateUrl: './droit-list-admin.component.html'
})
export class DroitListAdminComponent extends AbstractListController<DroitDto, DroitCriteria, DroitAdminService>  implements OnInit {

    fileName = 'Droit';



    constructor( private droitService: DroitAdminService  ) {
        super(droitService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
    }


    public initCol() {
        this.cols = [
            {field: 'authority', header: 'Authority'},
        ];
    }





   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Authority': e.authority ,
            }
        });

        this.criteriaData = [{
            'Authority': this.criteria.authority ? this.criteria.authority : environment.emptyForExport ,
        }];
      }
}
