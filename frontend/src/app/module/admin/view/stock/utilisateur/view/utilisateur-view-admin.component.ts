import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-utilisateur-view-admin',
  templateUrl: './utilisateur-view-admin.component.html'
})
export class UtilisateurViewAdminComponent extends AbstractViewController<UtilisateurDto, UtilisateurCriteria, UtilisateurAdminService> implements OnInit {

    modelPermissionUtilisateurs = new ModelPermissionUtilisateurDto();
    modelPermissionUtilisateurss: Array<ModelPermissionUtilisateurDto> = [];
    droitUtilisateurs = new DroitUtilisateurDto();
    droitUtilisateurss: Array<DroitUtilisateurDto> = [];

    constructor(private utilisateurService: UtilisateurAdminService, private droitUtilisateurService: DroitUtilisateurAdminService, private modelPermissionService: ModelPermissionAdminService, private droitService: DroitAdminService, private modelPermissionUtilisateurService: ModelPermissionUtilisateurAdminService, private actionPermissionService: ActionPermissionAdminService){
        super(utilisateurService);
    }

    ngOnInit(): void {
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
