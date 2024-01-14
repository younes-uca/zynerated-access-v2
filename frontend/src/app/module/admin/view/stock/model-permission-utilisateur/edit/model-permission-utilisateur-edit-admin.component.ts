import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ModelPermissionUtilisateurAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionUtilisateurAdmin.service';
import {ModelPermissionUtilisateurDto} from 'src/app/controller/model/stock/ModelPermissionUtilisateur.model';
import {ModelPermissionUtilisateurCriteria} from 'src/app/controller/criteria/stock/ModelPermissionUtilisateurCriteria.model';


import {ModelPermissionDto} from 'src/app/controller/model/stock/ModelPermission.model';
import {ModelPermissionAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionAdmin.service';
import {UtilisateurDto} from 'src/app/controller/model/stock/Utilisateur.model';
import {UtilisateurAdminService} from 'src/app/controller/service/admin/stock/UtilisateurAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/stock/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/stock/ActionPermissionAdmin.service';

@Component({
  selector: 'app-model-permission-utilisateur-edit-admin',
  templateUrl: './model-permission-utilisateur-edit-admin.component.html'
})
export class ModelPermissionUtilisateurEditAdminComponent extends AbstractEditController<ModelPermissionUtilisateurDto, ModelPermissionUtilisateurCriteria, ModelPermissionUtilisateurAdminService>   implements OnInit {



    private _validActionPermissionReference = true;
    private _validModelPermissionReference = true;



    constructor( private modelPermissionUtilisateurService: ModelPermissionUtilisateurAdminService , private modelPermissionService: ModelPermissionAdminService, private utilisateurService: UtilisateurAdminService, private actionPermissionService: ActionPermissionAdminService) {
        super(modelPermissionUtilisateurService);
    }

    ngOnInit(): void {
        this.actionPermission = new ActionPermissionDto();
        this.actionPermissionService.findAll().subscribe((data) => this.actionPermissions = data);
        this.modelPermission = new ModelPermissionDto();
        this.modelPermissionService.findAll().subscribe((data) => this.modelPermissions = data);
        this.utilisateur = new UtilisateurDto();
        this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
    }


    public setValidation(value: boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateUtilisateur(utilisateur: string) {
        const isPermistted = await this.roleService.isPermitted('Utilisateur', 'edit');
        if (isPermistted) {
             this.utilisateur = new UtilisateurDto();
             this.createUtilisateurDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateModelPermission(modelPermission: string) {
        const isPermistted = await this.roleService.isPermitted('ModelPermission', 'edit');
        if (isPermistted) {
             this.modelPermission = new ModelPermissionDto();
             this.createModelPermissionDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateActionPermission(actionPermission: string) {
        const isPermistted = await this.roleService.isPermitted('ActionPermission', 'edit');
        if (isPermistted) {
             this.actionPermission = new ActionPermissionDto();
             this.createActionPermissionDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get utilisateur(): UtilisateurDto {
       return this.utilisateurService.item;
   }
  set utilisateur(value: UtilisateurDto) {
        this.utilisateurService.item = value;
   }
   get utilisateurs(): Array<UtilisateurDto> {
        return this.utilisateurService.items;
   }
   set utilisateurs(value: Array<UtilisateurDto>) {
        this.utilisateurService.items = value;
   }
   get createUtilisateurDialog(): boolean {
       return this.utilisateurService.createDialog;
   }
  set createUtilisateurDialog(value: boolean) {
       this.utilisateurService.createDialog= value;
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



    get validActionPermissionReference(): boolean {
        return this._validActionPermissionReference;
    }
    set validActionPermissionReference(value: boolean) {
        this._validActionPermissionReference = value;
    }
    get validModelPermissionReference(): boolean {
        return this._validModelPermissionReference;
    }
    set validModelPermissionReference(value: boolean) {
        this._validModelPermissionReference = value;
    }
}
