import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {UtilisateurDto} from './Utilisateur.model';
import {DroitDto} from './Droit.model';

export class DroitUtilisateurDto extends BaseDto{

    public droit: DroitDto ;
    public utilisateur: UtilisateurDto ;
    

    constructor() {
        super();

        this.droit = new DroitDto() ;
        this.utilisateur = new UtilisateurDto() ;

        }

}
