package  ma.zs.easystock.dao.specification.core.stock;

import ma.zs.easystock.dao.criteria.core.stock.DroitUtilisateurCriteria;
import ma.zs.easystock.bean.core.stock.DroitUtilisateur;
import ma.zs.easystock.zynerator.specification.AbstractSpecification;


public class DroitUtilisateurSpecification extends  AbstractSpecification<DroitUtilisateurCriteria, DroitUtilisateur>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateFk("droit","id", criteria.getDroit()==null?null:criteria.getDroit().getId());
        addPredicateFk("droit","id", criteria.getDroits());
        addPredicateFk("droit","authority", criteria.getDroit()==null?null:criteria.getDroit().getAuthority());
        addPredicateFk("utilisateur","id", criteria.getUtilisateur()==null?null:criteria.getUtilisateur().getId());
        addPredicateFk("utilisateur","id", criteria.getUtilisateurs());
        addPredicateFk("utilisateur","email", criteria.getUtilisateur()==null?null:criteria.getUtilisateur().getEmail());
    }

    public DroitUtilisateurSpecification(DroitUtilisateurCriteria criteria) {
        super(criteria);
    }

    public DroitUtilisateurSpecification(DroitUtilisateurCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
