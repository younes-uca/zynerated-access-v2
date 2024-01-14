import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {UtilisateurAdminService} from 'src/app/controller/service/admin/stock/UtilisateurAdmin.service';
import {UtilisateurDto} from 'src/app/controller/model/stock/Utilisateur.model';
import {UtilisateurCriteria} from 'src/app/controller/criteria/stock/UtilisateurCriteria.model';


import {DroitUtilisateurDto} from 'src/app/controller/model/stock/DroitUtilisateur.model';
import {DroitUtilisateurAdminService} from 'src/app/controller/service/admin/stock/DroitUtilisateurAdmin.service';
import {DroitDto} from 'src/app/controller/model/stock/Droit.model';
import {DroitAdminService} from 'src/app/controller/service/admin/stock/DroitAdmin.service';
import {ModelPermissionDto} from 'src/app/controller/model/stock/ModelPermission.model';
import {ModelPermissionAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionAdmin.service';
import {PermissionDto} from 'src/app/controller/model/stock/Permission.model';
import {PermissionAdminService} from 'src/app/controller/service/admin/stock/PermissionAdmin.service';

@Component({
  selector: 'app-utilisateur-edit-admin',
  templateUrl: './utilisateur-edit-admin.component.html'
})
export class UtilisateurEditAdminComponent extends AbstractEditController<UtilisateurDto, UtilisateurCriteria, UtilisateurAdminService>   implements OnInit {

    private _modelPermissionsElement = new ModelPermissionDto();
    private _droitUtilisateursElement = new DroitUtilisateurDto();


    private _validModelPermissionsReference = true;


    private _droitUtilisateurs: Array<DroitUtilisateurDto> = [];

    constructor( private utilisateurService: UtilisateurAdminService , private droitUtilisateurService: DroitUtilisateurAdminService, private droitService: DroitAdminService, private modelPermissionService: ModelPermissionAdminService) {
        super(utilisateurService);
    }

    ngOnInit(): void {

        this.droitService.findAll().subscribe(data => this.prepareDroitUtilisateurs(data));
        this.droitUtilisateursElement.droit = new DroitDto();
        this.droitService.findAll().subscribe((data) => this.droits = data);

    }


    prepareDroitUtilisateurs(droits: Array<DroitDto>): void{
        if( droits != null){
            droits.forEach(e => {
                const droitUtilisateur = new DroitUtilisateurDto();
                droitUtilisateur.droit = e;
                this.droitUtilisateurs.push(droitUtilisateur);
            });
        }
    }
    public validateModelPermissions(){
        this.errorMessages = new Array();
        this.validateModelPermissionsReference();
    }
    public setValidation(value: boolean){
        this.validModelPermissionsReference = value;
        }
   public addModelPermissions() {
        if( this.item.modelPermissions == null )
            this.item.modelPermissions = new Array<ModelPermissionDto>();
       this.validateModelPermissions();
       if (this.errorMessages.length === 0) {
            if(this.modelPermissionsElement.id == null){
                this.item.modelPermissions.push(this.modelPermissionsElement);
            }else{
                const index = this.item.modelPermissions.findIndex(e => e.id == this.modelPermissionsElement.id);
                this.item.modelPermissions[index] = this.modelPermissionsElement;
            }
          this.modelPermissionsElement = new ModelPermissionDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteModelPermissions(p: ModelPermissionDto) {
        this.item.modelPermissions.forEach((element, index) => {
            if (element === p) { this.item.modelPermissions.splice(index, 1); }
        });
    }

    public editModelPermissions(p: ModelPermissionDto) {
        this.modelPermissionsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }


    private validateModelPermissionsReference(){
        if (this.modelPermissionsElement.reference == null) {
        this.errorMessages.push('Reference de la modelPermission est  invalide');
            this.validModelPermissionsReference = false;
        } else {
            this.validModelPermissionsReference = true;
        }
    }

   public async openCreateDroit(droit: string) {
        const isPermistted = await this.roleService.isPermitted('Droit', 'edit');
        if (isPermistted) {
             this.droit = new DroitDto();
             this.createDroitDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get droit(): DroitDto {
       return this.droitService.item;
   }
  set droit(value: DroitDto) {
        this.droitService.item = value;
   }
   get droits(): Array<DroitDto> {
        return this.droitService.items;
   }
   set droits(value: Array<DroitDto>) {
        this.droitService.items = value;
   }
   get createDroitDialog(): boolean {
       return this.droitService.createDialog;
   }
  set createDroitDialog(value: boolean) {
       this.droitService.createDialog= value;
   }

    get droitUtilisateurs(): Array<DroitUtilisateurDto> {
        if( this._droitUtilisateurs == null )
            this._droitUtilisateurs = new Array();
         return this._droitUtilisateurs;
    }

    set droitUtilisateurs(value: Array<DroitUtilisateurDto>) {
        this._droitUtilisateurs = value;
    }
    get modelPermissionsElement(): ModelPermissionDto {
        if( this._modelPermissionsElement == null )
            this._modelPermissionsElement = new ModelPermissionDto();
         return this._modelPermissionsElement;
    }

    set modelPermissionsElement(value: ModelPermissionDto) {
        this._modelPermissionsElement = value;
    }
    get droitUtilisateursElement(): DroitUtilisateurDto {
        if( this._droitUtilisateursElement == null )
            this._droitUtilisateursElement = new DroitUtilisateurDto();
         return this._droitUtilisateursElement;
    }

    set droitUtilisateursElement(value: DroitUtilisateurDto) {
        this._droitUtilisateursElement = value;
    }


    get validModelPermissionsReference(): boolean {
        return this._validModelPermissionsReference;
    }
    set validModelPermissionsReference(value: boolean) {
        this._validModelPermissionsReference = value;
    }
}
