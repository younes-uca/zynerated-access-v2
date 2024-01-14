import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ModelPermissionAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionAdmin.service';
import {ModelPermissionDto} from 'src/app/controller/model/stock/ModelPermission.model';
import {ModelPermissionCriteria} from 'src/app/controller/criteria/stock/ModelPermissionCriteria.model';
import {ActionPermissionDto} from 'src/app/controller/model/stock/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/stock/ActionPermissionAdmin.service';
import {PermissionDto} from 'src/app/controller/model/stock/Permission.model';
import {PermissionAdminService} from 'src/app/controller/service/admin/stock/PermissionAdmin.service';
@Component({
  selector: 'app-model-permission-create-admin',
  templateUrl: './model-permission-create-admin.component.html'
})
export class ModelPermissionCreateAdminComponent extends AbstractCreateController<ModelPermissionDto, ModelPermissionCriteria, ModelPermissionAdminService>  implements OnInit {

    private _permissionsElement = new PermissionDto();


   private _validModelPermissionReference = true;

    constructor( private modelPermissionService: ModelPermissionAdminService , private actionPermissionService: ActionPermissionAdminService, private permissionService: PermissionAdminService) {
        super(modelPermissionService);
    }

    ngOnInit(): void {
        this.permissionsElement.actionPermission = new ActionPermissionDto();
        this.actionPermissionService.findAll().subscribe((data) => this.actionPermissions = data);
    }



    validatePermissions(){
        this.errorMessages = new Array();
    }


    public setValidation(value: boolean){
        this.validModelPermissionReference = value;
    }

    public addPermissions() {
        if( this.item.permissions == null )
            this.item.permissions = new Array<PermissionDto>();
       this.validatePermissions();
       if (this.errorMessages.length === 0) {
              this.item.permissions.push({... this.permissionsElement});
              this.permissionsElement = new PermissionDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletepermissions(p: PermissionDto) {
        this.item.permissions.forEach((element, index) => {
            if (element === p) { this.item.permissions.splice(index, 1); }
        });
    }

    public editpermissions(p: PermissionDto) {
        this.permissionsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateModelPermissionReference();
    }

    public validateModelPermissionReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validModelPermissionReference = false;
        } else {
            this.validModelPermissionReference = true;
        }
    }


    public async openCreateActionPermission(actionPermission: string) {
    const isPermistted = await this.roleService.isPermitted('ActionPermission', 'add');
    if(isPermistted) {
         this.actionPermission = new ActionPermissionDto();
         this.createActionPermissionDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get actionPermission(): ActionPermissionDto {
        return this.actionPermissionService.item;
    }
    set actionPermission(value: ActionPermissionDto) {
        this.actionPermissionService.item = value;
    }
    get actionPermissions(): Array<ActionPermissionDto> {
        return this.actionPermissionService.items;
    }
    set actionPermissions(value: Array<ActionPermissionDto>) {
        this.actionPermissionService.items = value;
    }
    get createActionPermissionDialog(): boolean {
       return this.actionPermissionService.createDialog;
    }
    set createActionPermissionDialog(value: boolean) {
        this.actionPermissionService.createDialog= value;
    }



    get validModelPermissionReference(): boolean {
        return this._validModelPermissionReference;
    }

    set validModelPermissionReference(value: boolean) {
         this._validModelPermissionReference = value;
    }


    get permissionsElement(): PermissionDto {
        if( this._permissionsElement == null )
            this._permissionsElement = new PermissionDto();
        return this._permissionsElement;
    }

    set permissionsElement(value: PermissionDto) {
        this._permissionsElement = value;
    }

}
