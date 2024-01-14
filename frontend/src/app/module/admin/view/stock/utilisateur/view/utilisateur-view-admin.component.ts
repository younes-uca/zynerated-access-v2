import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-utilisateur-view-admin',
  templateUrl: './utilisateur-view-admin.component.html'
})
export class UtilisateurViewAdminComponent extends AbstractViewController<UtilisateurDto, UtilisateurCriteria, UtilisateurAdminService> implements OnInit {

    modelPermissions = new ModelPermissionDto();
    modelPermissionss: Array<ModelPermissionDto> = [];
    droitUtilisateurs = new DroitUtilisateurDto();
    droitUtilisateurss: Array<DroitUtilisateurDto> = [];

    constructor(private utilisateurService: UtilisateurAdminService, private droitUtilisateurService: DroitUtilisateurAdminService, private droitService: DroitAdminService, private modelPermissionService: ModelPermissionAdminService){
        super(utilisateurService);
    }

    ngOnInit(): void {
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


}
