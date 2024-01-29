package ma.zs.easystock.zynerator.security.service.impl;


import ma.zs.easystock.zynerator.security.bean.ModelPermissionUser;
import ma.zs.easystock.zynerator.security.dao.criteria.core.ModelPermissionUserCriteria;
import ma.zs.easystock.zynerator.security.dao.facade.core.ModelPermissionUserDao;
import ma.zs.easystock.zynerator.security.dao.specification.core.ModelPermissionUserSpecification;
import ma.zs.easystock.zynerator.security.service.facade.ModelPermissionUserAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import ma.zs.easystock.zynerator.security.service.facade.ModelPermissionAdminService;
import ma.zs.easystock.zynerator.security.service.facade.UserAdminService;
import ma.zs.easystock.zynerator.security.service.facade.ActionPermissionAdminService;

@Service
public class ModelPermissionUserAdminServiceImpl extends AbstractServiceImpl<ModelPermissionUser, ModelPermissionUserCriteria, ModelPermissionUserDao> implements ModelPermissionUserAdminService {






    public List<ModelPermissionUser> findByActionPermissionId(Long id){
        return dao.findByActionPermissionId(id);
    }
    public int deleteByActionPermissionId(Long id){
        return dao.deleteByActionPermissionId(id);
    }
    public long countByActionPermissionReference(String reference){
        return dao.countByActionPermissionReference(reference);
    }
    public List<ModelPermissionUser> findByModelPermissionId(Long id){
        return dao.findByModelPermissionId(id);
    }
    public int deleteByModelPermissionId(Long id){
        return dao.deleteByModelPermissionId(id);
    }
    public long countByModelPermissionReference(String reference){
        return dao.countByModelPermissionReference(reference);
    }
    public List<ModelPermissionUser> findByUserId(Long id){
        return dao.findByUserId(id);
    }
    public int deleteByUserId(Long id){
        return dao.deleteByUserId(id);
    }
    public long countByUserEmail(String email){
        return dao.countByUserEmail(email);
    }

    public Boolean findByUserUsernameAndModelPermissionReferenceAndActionPermissionReference( String username ,  String modelReference,  String actionReference){
        ModelPermissionUser modelPermissionUser = dao.findByUserUsernameAndModelPermissionReferenceAndActionPermissionReference(username, modelReference, actionReference);
        if (modelPermissionUser!=null) return modelPermissionUser.getValue();
        return false;
    }




    public void configure() {
        super.configure(ModelPermissionUser.class, ModelPermissionUserSpecification.class);
    }


    @Autowired
    private ModelPermissionAdminService modelPermissionService ;
    @Autowired
    private UserAdminService utilisateurService ;
    @Autowired
    private ActionPermissionAdminService actionPermissionService ;

    public ModelPermissionUserAdminServiceImpl(ModelPermissionUserDao dao) {
        super(dao);
    }

}
