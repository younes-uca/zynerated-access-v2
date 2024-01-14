import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-model-permission-utilisateur-view-admin',
  templateUrl: './model-permission-utilisateur-view-admin.component.html'
})
export class ModelPermissionUtilisateurViewAdminComponent extends AbstractViewController<ModelPermissionUtilisateurDto, ModelPermissionUtilisateurCriteria, ModelPermissionUtilisateurAdminService> implements OnInit {


    constructor(private modelPermissionUtilisateurService: ModelPermissionUtilisateurAdminService, private modelPermissionService: ModelPermissionAdminService, private utilisateurService: UtilisateurAdminService, private actionPermissionService: ActionPermissionAdminService){
        super(modelPermissionUtilisateurService);
    }

    ngOnInit(): void {
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


}
