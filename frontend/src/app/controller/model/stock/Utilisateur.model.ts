import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DroitUtilisateurDto} from './DroitUtilisateur.model';
import {ModelPermissionUtilisateurDto} from './ModelPermissionUtilisateur.model';

export class UtilisateurDto extends BaseDto{

   public credentialsNonExpired: null | boolean;

   public enabled: null | boolean;

    public email: string;

   public accountNonExpired: null | boolean;

   public accountNonLocked: null | boolean;

    public username: string;

    public password: string;

   public passwordChanged: null | boolean;

     public modelPermissionUtilisateurs: Array<ModelPermissionUtilisateurDto>;
     public droitUtilisateurs: Array<DroitUtilisateurDto>;
    

    constructor() {
        super();

        this.credentialsNonExpired = null;
        this.enabled = null;
        this.email = '';
        this.accountNonExpired = null;
        this.accountNonLocked = null;
        this.username = '';
        this.password = '';
        this.passwordChanged = null;
        this.modelPermissionUtilisateurs = new Array<ModelPermissionUtilisateurDto>();
        this.droitUtilisateurs = new Array<DroitUtilisateurDto>();

        }

}
