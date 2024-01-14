import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {DroitUtilisateurCriteria} from './DroitUtilisateurCriteria.model';
import {ModelPermissionCriteria} from './ModelPermissionCriteria.model';

export class UtilisateurCriteria  extends BaseCriteria  {

    public id: number;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public email: string;
    public emailLike: string;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public username: string;
    public usernameLike: string;
    public password: string;
    public passwordLike: string;
    public passwordChanged: null | boolean;
      public modelPermissions: Array<ModelPermissionCriteria>;
      public droitUtilisateurs: Array<DroitUtilisateurCriteria>;

}
