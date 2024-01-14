import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DroitDto} from './Droit.model';
import {UtilisateurDto} from './Utilisateur.model';

export class DroitUtilisateurDto extends BaseDto{

    public droit: DroitDto ;
    public utilisateur: UtilisateurDto ;
    

    constructor() {
        super();

        this.droit = new DroitDto() ;
        this.utilisateur = new UtilisateurDto() ;

        }

}
