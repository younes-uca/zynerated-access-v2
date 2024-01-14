import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ModelPermissionDto} from './ModelPermission.model';
import {UtilisateurDto} from './Utilisateur.model';
import {ActionPermissionDto} from './ActionPermission.model';

export class ModelPermissionUtilisateurDto extends BaseDto{

   public value: null | boolean;

    public subAttribute: string;

    public actionPermission: ActionPermissionDto ;
    public modelPermission: ModelPermissionDto ;
    public utilisateur: UtilisateurDto ;
    

    constructor() {
        super();

        this.value = null;
        this.subAttribute = '';
        this.actionPermission = new ActionPermissionDto() ;
        this.modelPermission = new ModelPermissionDto() ;
        this.utilisateur = new UtilisateurDto() ;

        }

}
