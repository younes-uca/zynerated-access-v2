package  ma.zs.easystock.dao.specification.core.stock;

import ma.zs.easystock.dao.criteria.core.stock.ModelPermissionUtilisateurCriteria;
import ma.zs.easystock.bean.core.stock.ModelPermissionUtilisateur;
import ma.zs.easystock.zynerator.specification.AbstractSpecification;


public class ModelPermissionUtilisateurSpecification extends  AbstractSpecification<ModelPermissionUtilisateurCriteria, ModelPermissionUtilisateur>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateBool("value", criteria.getValue());
        addPredicate("subAttribute", criteria.getSubAttribute(),criteria.getSubAttributeLike());
        addPredicateFk("actionPermission","id", criteria.getActionPermission()==null?null:criteria.getActionPermission().getId());
        addPredicateFk("actionPermission","id", criteria.getActionPermissions());
        addPredicateFk("actionPermission","reference", criteria.getActionPermission()==null?null:criteria.getActionPermission().getReference());
        addPredicateFk("modelPermission","id", criteria.getModelPermission()==null?null:criteria.getModelPermission().getId());
        addPredicateFk("modelPermission","id", criteria.getModelPermissions());
        addPredicateFk("modelPermission","reference", criteria.getModelPermission()==null?null:criteria.getModelPermission().getReference());
        addPredicateFk("utilisateur","id", criteria.getUtilisateur()==null?null:criteria.getUtilisateur().getId());
        addPredicateFk("utilisateur","id", criteria.getUtilisateurs());
        addPredicateFk("utilisateur","email", criteria.getUtilisateur()==null?null:criteria.getUtilisateur().getEmail());
    }

    public ModelPermissionUtilisateurSpecification(ModelPermissionUtilisateurCriteria criteria) {
        super(criteria);
    }

    public ModelPermissionUtilisateurSpecification(ModelPermissionUtilisateurCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
