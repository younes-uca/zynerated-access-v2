import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {DroitCriteria} from './DroitCriteria.model';
import {UtilisateurCriteria} from './UtilisateurCriteria.model';

export class DroitUtilisateurCriteria  extends BaseCriteria  {

    public id: number;
  public droit: DroitCriteria ;
  public droits: Array<DroitCriteria> ;
  public utilisateur: UtilisateurCriteria ;
  public utilisateurs: Array<UtilisateurCriteria> ;

}
