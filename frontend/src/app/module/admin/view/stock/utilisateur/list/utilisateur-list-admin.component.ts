import {Component, OnInit} from '@angular/core';
import {UtilisateurAdminService} from 'src/app/controller/service/admin/stock/UtilisateurAdmin.service';
import {UtilisateurDto} from 'src/app/controller/model/stock/Utilisateur.model';
import {UtilisateurCriteria} from 'src/app/controller/criteria/stock/UtilisateurCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-utilisateur-list-admin',
  templateUrl: './utilisateur-list-admin.component.html'
})
export class UtilisateurListAdminComponent extends AbstractListController<UtilisateurDto, UtilisateurCriteria, UtilisateurAdminService>  implements OnInit {

    fileName = 'Utilisateur';

     yesOrNoCredentialsNonExpired: any[] = [];
     yesOrNoEnabled: any[] = [];
     yesOrNoAccountNonExpired: any[] = [];
     yesOrNoAccountNonLocked: any[] = [];
     yesOrNoPasswordChanged: any[] = [];


    constructor( private utilisateurService: UtilisateurAdminService  , private droitUtilisateurService: DroitUtilisateurAdminService, private modelPermissionService: ModelPermissionAdminService, private droitService: DroitAdminService, private modelPermissionUtilisateurService: ModelPermissionUtilisateurAdminService, private actionPermissionService: ActionPermissionAdminService) {
        super(utilisateurService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
        this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
        this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
        this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
        this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }


    public initCol() {
        this.cols = [
            {field: 'credentialsNonExpired', header: 'Credentials non expired'},
            {field: 'enabled', header: 'Enabled'},
            {field: 'email', header: 'Email'},
            {field: 'accountNonExpired', header: 'Account non expired'},
            {field: 'accountNonLocked', header: 'Account non locked'},
            {field: 'username', header: 'Username'},
            {field: 'password', header: 'Password'},
            {field: 'passwordChanged', header: 'Password changed'},
        ];
    }



	public initDuplicate(res: UtilisateurDto) {
        if (res.modelPermissionUtilisateurs != null) {
             res.modelPermissionUtilisateurs.forEach(d => { d.utilisateur = null; d.id = null; });
        }
        if (res.droitUtilisateurs != null) {
             res.droitUtilisateurs.forEach(d => { d.utilisateur = null; d.id = null; });
        }
	}


   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Credentials non expired': e.credentialsNonExpired? 'Vrai' : 'Faux' ,
                'Enabled': e.enabled? 'Vrai' : 'Faux' ,
                 'Email': e.email ,
                'Account non expired': e.accountNonExpired? 'Vrai' : 'Faux' ,
                'Account non locked': e.accountNonLocked? 'Vrai' : 'Faux' ,
                 'Username': e.username ,
                 'Password': e.password ,
                'Password changed': e.passwordChanged? 'Vrai' : 'Faux' ,
            }
        });

        this.criteriaData = [{
            'Credentials non expired': this.criteria.credentialsNonExpired ? (this.criteria.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.criteria.enabled ? (this.criteria.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Account non expired': this.criteria.accountNonExpired ? (this.criteria.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.criteria.accountNonLocked ? (this.criteria.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Username': this.criteria.username ? this.criteria.username : environment.emptyForExport ,
            'Password': this.criteria.password ? this.criteria.password : environment.emptyForExport ,
            'Password changed': this.criteria.passwordChanged ? (this.criteria.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        }];
      }
}
