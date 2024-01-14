package  ma.zs.easystock.dao.specification.core.stock;

import ma.zs.easystock.dao.criteria.core.stock.DroitCriteria;
import ma.zs.easystock.bean.core.stock.Droit;
import ma.zs.easystock.zynerator.specification.AbstractSpecification;


public class DroitSpecification extends  AbstractSpecification<DroitCriteria, Droit>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("authority", criteria.getAuthority(),criteria.getAuthorityLike());
    }

    public DroitSpecification(DroitCriteria criteria) {
        super(criteria);
    }

    public DroitSpecification(DroitCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
