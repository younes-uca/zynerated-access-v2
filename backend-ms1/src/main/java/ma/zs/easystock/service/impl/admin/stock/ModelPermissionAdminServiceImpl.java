package ma.zs.easystock.service.impl.admin.stock;


import ma.zs.easystock.bean.core.stock.ModelPermission;
import ma.zs.easystock.dao.criteria.core.stock.ModelPermissionCriteria;
import ma.zs.easystock.dao.facade.core.stock.ModelPermissionDao;
import ma.zs.easystock.dao.specification.core.stock.ModelPermissionSpecification;
import ma.zs.easystock.service.facade.admin.stock.ModelPermissionAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import ma.zs.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.zs.easystock.service.facade.admin.stock.PermissionAdminService ;
import ma.zs.easystock.bean.core.stock.Permission ;

import java.util.List;
@Service
public class ModelPermissionAdminServiceImpl extends AbstractServiceImpl<ModelPermission, ModelPermissionCriteria, ModelPermissionDao> implements ModelPermissionAdminService {


    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public ModelPermission create(ModelPermission t) {
    
        if (t.getPermissions() != null) {
                t.getPermissions().forEach(element-> {
                    element.setModelPermission(t);
                    permissionService.create(element);
            });
        }
        return t;

    }

    public ModelPermission findWithAssociatedLists(Long id){
        ModelPermission result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setPermissions(permissionService.findByModelPermissionId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        permissionService.deleteByModelPermissionId(id);
    }


    public void updateWithAssociatedLists(ModelPermission modelPermission){
    if(modelPermission !=null && modelPermission.getId() != null){
            List<List<Permission>> resultPermissions= permissionService.getToBeSavedAndToBeDeleted(permissionService.findByModelPermissionId(modelPermission.getId()),modelPermission.getPermissions());
            permissionService.delete(resultPermissions.get(1));
            ListUtil.emptyIfNull(resultPermissions.get(0)).forEach(e -> e.setModelPermission(modelPermission));
            permissionService.update(resultPermissions.get(0),true);
    }
    }



    public ModelPermission findByReferenceEntity(ModelPermission t){
        return  dao.findByReference(t.getReference());
    }


    public List<ModelPermission> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(ModelPermission.class, ModelPermissionSpecification.class);
    }


    @Autowired
    private PermissionAdminService permissionService ;

    public ModelPermissionAdminServiceImpl(ModelPermissionDao dao) {
        super(dao);
    }

}
