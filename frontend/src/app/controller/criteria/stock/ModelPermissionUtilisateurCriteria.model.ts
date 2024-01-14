import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {ModelPermissionCriteria} from './ModelPermissionCriteria.model';
import {UtilisateurCriteria} from './UtilisateurCriteria.model';
import {ActionPermissionCriteria} from './ActionPermissionCriteria.model';

export class ModelPermissionUtilisateurCriteria  extends BaseCriteria  {

    public id: number;
    public value: null | boolean;
    public subAttribute: string;
    public subAttributeLike: string;
  public actionPermission: ActionPermissionCriteria ;
  public actionPermissions: Array<ActionPermissionCriteria> ;
  public modelPermission: ModelPermissionCriteria ;
  public modelPermissions: Array<ModelPermissionCriteria> ;
  public utilisateur: UtilisateurCriteria ;
  public utilisateurs: Array<UtilisateurCriteria> ;

}
