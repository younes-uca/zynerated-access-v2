import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {DroitAdminService} from 'src/app/controller/service/admin/stock/DroitAdmin.service';
import {DroitDto} from 'src/app/controller/model/stock/Droit.model';
import {DroitCriteria} from 'src/app/controller/criteria/stock/DroitCriteria.model';



@Component({
  selector: 'app-droit-edit-admin',
  templateUrl: './droit-edit-admin.component.html'
})
export class DroitEditAdminComponent extends AbstractEditController<DroitDto, DroitCriteria, DroitAdminService>   implements OnInit {


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
