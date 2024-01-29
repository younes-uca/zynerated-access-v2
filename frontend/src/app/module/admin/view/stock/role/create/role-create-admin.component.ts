import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {RoleAdminService} from 'src/app/controller/service/admin/stock/RoleAdmin.service';
import {RoleDto} from 'src/app/controller/model/stock/Role.model';
import {RoleCriteria} from 'src/app/controller/criteria/stock/RoleCriteria.model';
@Component({
  selector: 'app-role-create-admin',
  templateUrl: './role-create-admin.component.html'
})
export class RoleCreateAdminComponent extends AbstractCreateController<RoleDto, RoleCriteria, RoleAdminService>  implements OnInit {



   private _validRoleAuthority = true;

    constructor( private roleAdminService: RoleAdminService ) {
        super(roleAdminService);
    }

    ngOnInit(): void {
    }





    public setValidation(value: boolean){
        this.validRoleAuthority = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateRoleAuthority();
    }

    public validateRoleAuthority(){
        if (this.stringUtilService.isEmpty(this.item.authority)) {
        this.errorMessages.push('Authority non valide');
        this.validRoleAuthority = false;
        } else {
            this.validRoleAuthority = true;
        }
    }






    get validRoleAuthority(): boolean {
        return this._validRoleAuthority;
    }

    set validRoleAuthority(value: boolean) {
         this._validRoleAuthority = value;
    }



}
