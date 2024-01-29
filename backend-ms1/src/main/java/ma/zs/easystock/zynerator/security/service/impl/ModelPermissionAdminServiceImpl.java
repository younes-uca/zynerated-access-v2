package ma.zs.easystock.zynerator.security.service.impl;


import ma.zs.easystock.zynerator.security.bean.ModelPermission;
import ma.zs.easystock.zynerator.security.dao.criteria.core.ModelPermissionCriteria;
import ma.zs.easystock.zynerator.security.dao.facade.core.ModelPermissionDao;
import ma.zs.easystock.zynerator.security.dao.specification.core.ModelPermissionSpecification;
import ma.zs.easystock.zynerator.security.service.facade.ModelPermissionAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ModelPermissionAdminServiceImpl extends AbstractServiceImpl<ModelPermission, ModelPermissionCriteria, ModelPermissionDao> implements ModelPermissionAdminService {





    public ModelPermission findByReferenceEntity(ModelPermission t){
        return  dao.findByReference(t.getReference());
    }


    public List<ModelPermission> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(ModelPermission.class, ModelPermissionSpecification.class);
    }



    public ModelPermissionAdminServiceImpl(ModelPermissionDao dao) {
        super(dao);
    }

}
