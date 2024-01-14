import {Component, OnInit} from '@angular/core';
import {ModelPermissionUtilisateurAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionUtilisateurAdmin.service';
import {ModelPermissionUtilisateurDto} from 'src/app/controller/model/stock/ModelPermissionUtilisateur.model';
import {ModelPermissionUtilisateurCriteria} from 'src/app/controller/criteria/stock/ModelPermissionUtilisateurCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ModelPermissionDto} from 'src/app/controller/model/stock/ModelPermission.model';
import {ModelPermissionAdminService} from 'src/app/controller/service/admin/stock/ModelPermissionAdmin.service';
import {UtilisateurDto} from 'src/app/controller/model/stock/Utilisateur.model';
import {UtilisateurAdminService} from 'src/app/controller/service/admin/stock/UtilisateurAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/stock/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/stock/ActionPermissionAdmin.service';


@Component({
  selector: 'app-model-permission-utilisateur-list-admin',
  templateUrl: './model-permission-utilisateur-list-admin.component.html'
})
export class ModelPermissionUtilisateurListAdminComponent extends AbstractListController<ModelPermissionUtilisateurDto, ModelPermissionUtilisateurCriteria, ModelPermissionUtilisateurAdminService>  implements OnInit {

    fileName = 'ModelPermissionUtilisateur';

     yesOrNoValue: any[] = [];
    actionPermissions: Array<ActionPermissionDto>;
    modelPermissions: Array<ModelPermissionDto>;
    utilisateurs: Array<UtilisateurDto>;


    constructor( private modelPermissionUtilisateurService: ModelPermissionUtilisateurAdminService  , private modelPermissionService: ModelPermissionAdminService, private utilisateurService: UtilisateurAdminService, private actionPermissionService: ActionPermissionAdminService) {
        super(modelPermissionUtilisateurService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadActionPermission();
        this.loadModelPermission();
        this.loadUtilisateur();
        this.yesOrNoValue =  [{label: 'Value', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }


    public initCol() {
        this.cols = [
            {field: 'actionPermission?.reference', header: 'Action permission'},
            {field: 'modelPermission?.reference', header: 'Model permission'},
            {field: 'value', header: 'Value'},
            {field: 'utilisateur?.email', header: 'Utilisateur'},
            {field: 'subAttribute', header: 'Sub attribute'},
        ];
    }


    public async loadActionPermission(){
       this.actionPermissionService.findAllOptimized().subscribe(actionPermissions => this.actionPermissions = actionPermissions, error => console.log(error))
    }
    public async loadModelPermission(){
       this.modelPermissionService.findAllOptimized().subscribe(modelPermissions => this.modelPermissions = modelPermissions, error => console.log(error))
    }
    public async loadUtilisateur(){
       this.utilisateurService.findAllOptimized().subscribe(utilisateurs => this.utilisateurs = utilisateurs, error => console.log(error))
    }



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Action permission': e.actionPermission?.reference ,
                'Model permission': e.modelPermission?.reference ,
                'Value': e.value? 'Vrai' : 'Faux' ,
                'Utilisateur': e.utilisateur?.email ,
                 'Sub attribute': e.subAttribute ,
            }
        });

        this.criteriaData = [{
        //'Action permission': this.criteria.actionPermission?.reference ? this.criteria.actionPermission?.reference : environment.emptyForExport ,
        //'Model permission': this.criteria.modelPermission?.reference ? this.criteria.modelPermission?.reference : environment.emptyForExport ,
            'Value': this.criteria.value ? (this.criteria.value ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        //'Utilisateur': this.criteria.utilisateur?.email ? this.criteria.utilisateur?.email : environment.emptyForExport ,
            'Sub attribute': this.criteria.subAttribute ? this.criteria.subAttribute : environment.emptyForExport ,
        }];
      }
}
