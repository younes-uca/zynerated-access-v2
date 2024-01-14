import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {DroitAdminService} from 'src/app/controller/service/admin/stock/DroitAdmin.service';
import {DroitDto} from 'src/app/controller/model/stock/Droit.model';
import {DroitCriteria} from 'src/app/controller/criteria/stock/DroitCriteria.model';
@Component({
  selector: 'app-droit-create-admin',
  templateUrl: './droit-create-admin.component.html'
})
export class DroitCreateAdminComponent extends AbstractCreateController<DroitDto, DroitCriteria, DroitAdminService>  implements OnInit {



   private _validDroitAuthority = true;

    constructor( private droitService: DroitAdminService ) {
        super(droitService);
    }

    ngOnInit(): void {
    }





    public setValidation(value: boolean){
        this.validDroitAuthority = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDroitAuthority();
    }

    public validateDroitAuthority(){
        if (this.stringUtilService.isEmpty(this.item.authority)) {
        this.errorMessages.push('Authority non valide');
        this.validDroitAuthority = false;
        } else {
            this.validDroitAuthority = true;
        }
    }






    get validDroitAuthority(): boolean {
        return this._validDroitAuthority;
    }

    set validDroitAuthority(value: boolean) {
         this._validDroitAuthority = value;
    }



}
