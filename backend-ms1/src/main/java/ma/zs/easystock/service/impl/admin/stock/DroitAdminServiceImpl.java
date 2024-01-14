package ma.zs.easystock.service.impl.admin.stock;


import ma.zs.easystock.bean.core.stock.Droit;
import ma.zs.easystock.dao.criteria.core.stock.DroitCriteria;
import ma.zs.easystock.dao.facade.core.stock.DroitDao;
import ma.zs.easystock.dao.specification.core.stock.DroitSpecification;
import ma.zs.easystock.service.facade.admin.stock.DroitAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import ma.zs.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class DroitAdminServiceImpl extends AbstractServiceImpl<Droit, DroitCriteria, DroitDao> implements DroitAdminService {





    public Droit findByReferenceEntity(Droit t){
        return  dao.findByAuthority(t.getAuthority());
    }


    public List<Droit> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(Droit.class, DroitSpecification.class);
    }



    public DroitAdminServiceImpl(DroitDao dao) {
        super(dao);
    }

}
