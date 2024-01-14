import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {UtilisateurAdminService} from 'src/app/controller/service/admin/stock/UtilisateurAdmin.service';
import {UtilisateurDto} from 'src/app/controller/model/stock/Utilisateur.model';
import {UtilisateurCriteria} from 'src/app/controller/criteria/stock/UtilisateurCriteria.model';
import {DroitUtilisateurDto} from 'src/app/controller/model/stock/DroitUtilisateur.model';
import {DroitUtilisateurAdminService} from 'src/app/controller/service/admin/stock/DroitUtilisateurAdmin.service';
import {ModelPermissionDto} from 'src/app/controller/model/stock/ModelPermission.model';
import {ModelPermissionAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionAdmin.service';
import {DroitDto} from 'src/app/controller/model/stock/Droit.model';
import {DroitAdminService} from 'src/app/controller/service/admin/stock/DroitAdmin.service';
import {ModelPermissionUtilisateurDto} from 'src/app/controller/model/stock/ModelPermissionUtilisateur.model';
import {ModelPermissionUtilisateurAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionUtilisateurAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/stock/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/stock/ActionPermissionAdmin.service';
@Component({
  selector: 'app-utilisateur-create-admin',
  templateUrl: './utilisateur-create-admin.component.html'
})
export class UtilisateurCreateAdminComponent extends AbstractCreateController<UtilisateurDto, UtilisateurCriteria, UtilisateurAdminService>  implements OnInit {

    private _modelPermissionUtilisateursElement = new ModelPermissionUtilisateurDto();
    private _droitUtilisateursElement = new DroitUtilisateurDto();


    private _droitUtilisateurs: Array<DroitUtilisateurDto> = [];

    constructor( private utilisateurService: UtilisateurAdminService , private droitUtilisateurService: DroitUtilisateurAdminService, private modelPermissionService: ModelPermissionAdminService, private droitService: DroitAdminService, private modelPermissionUtilisateurService: ModelPermissionUtilisateurAdminService, private actionPermissionService: ActionPermissionAdminService) {
        super(utilisateurService);
    }

    ngOnInit(): void {
        this.modelPermissionUtilisateursElement.actionPermission = new ActionPermissionDto();
        this.actionPermissionService.findAll().subscribe((data) => this.actionPermissions = data);
        this.modelPermissionUtilisateursElement.modelPermission = new ModelPermissionDto();
        this.modelPermissionService.findAll().subscribe((data) => this.modelPermissions = data);
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

    validateModelPermissionUtilisateurs(){
        this.errorMessages = new Array();
    }


    public setValidation(value: boolean){
    }

    public addModelPermissionUtilisateurs() {
        if( this.item.modelPermissionUtilisateurs == null )
            this.item.modelPermissionUtilisateurs = new Array<ModelPermissionUtilisateurDto>();
       this.validateModelPermissionUtilisateurs();
       if (this.errorMessages.length === 0) {
              this.item.modelPermissionUtilisateurs.push({... this.modelPermissionUtilisateursElement});
              this.modelPermissionUtilisateursElement = new ModelPermissionUtilisateurDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletemodelPermissionUtilisateurs(p: ModelPermissionUtilisateurDto) {
        this.item.modelPermissionUtilisateurs.forEach((element, index) => {
            if (element === p) { this.item.modelPermissionUtilisateurs.splice(index, 1); }
        });
    }

    public editmodelPermissionUtilisateurs(p: ModelPermissionUtilisateurDto) {
        this.modelPermissionUtilisateursElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateModelPermission(modelPermission: string) {
    const isPermistted = await this.roleService.isPermitted('ModelPermission', 'add');
    if(isPermistted) {
         this.modelPermission = new ModelPermissionDto();
         this.createModelPermissionDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateDroit(droit: string) {
    const isPermistted = await this.roleService.isPermitted('Droit', 'add');
    if(isPermistted) {
         this.droit = new DroitDto();
         this.createDroitDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
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

    get modelPermission(): ModelPermissionDto {
        return this.modelPermissionService.item;
    }
    set modelPermission(value: ModelPermissionDto) {
        this.modelPermissionService.item = value;
    }
    get modelPermissions(): Array<ModelPermissionDto> {
        return this.modelPermissionService.items;
    }
    set modelPermissions(value: Array<ModelPermissionDto>) {
        this.modelPermissionService.items = value;
    }
    get createModelPermissionDialog(): boolean {
       return this.modelPermissionService.createDialog;
    }
    set createModelPermissionDialog(value: boolean) {
        this.modelPermissionService.createDialog= value;
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

    get droitUtilisateurs(): Array<DroitUtilisateurDto> {
        if( this._droitUtilisateurs == null )
            this._droitUtilisateurs = new Array();
        return this._droitUtilisateurs;
    }

    set droitUtilisateurs(value: Array<DroitUtilisateurDto>) {
        this._droitUtilisateurs = value;
    }




    get modelPermissionUtilisateursElement(): ModelPermissionUtilisateurDto {
        if( this._modelPermissionUtilisateursElement == null )
            this._modelPermissionUtilisateursElement = new ModelPermissionUtilisateurDto();
        return this._modelPermissionUtilisateursElement;
    }

    set modelPermissionUtilisateursElement(value: ModelPermissionUtilisateurDto) {
        this._modelPermissionUtilisateursElement = value;
    }
    get droitUtilisateursElement(): DroitUtilisateurDto {
        if( this._droitUtilisateursElement == null )
            this._droitUtilisateursElement = new DroitUtilisateurDto();
        return this._droitUtilisateursElement;
    }

    set droitUtilisateursElement(value: DroitUtilisateurDto) {
        this._droitUtilisateursElement = value;
    }

}
