package ma.zs.easystock.zynerator.security.service.facade;

import java.util.List;
import ma.zs.easystock.zynerator.security.bean.ModelPermissionUser;
import ma.zs.easystock.zynerator.security.dao.criteria.core.ModelPermissionUserCriteria;
import ma.zs.easystock.zynerator.service.IService;



public interface ModelPermissionUserService extends  IService<ModelPermissionUser,ModelPermissionUserCriteria>  {

    List<ModelPermissionUser> findByActionPermissionId(Long id);
    int deleteByActionPermissionId(Long id);
    long countByActionPermissionReference(String reference);
    List<ModelPermissionUser> findByModelPermissionId(Long id);
    int deleteByModelPermissionId(Long id);
    long countByModelPermissionReference(String reference);
    List<ModelPermissionUser> findByUserId(Long id);
    Boolean findByUserUsernameAndModelPermissionReferenceAndActionPermissionReference( String username ,  String modelReference,  String actionReference);
    int deleteByUserId(Long id);
    long countByUserEmail(String email);
     List<ModelPermissionUser> initModelPermissionUser();


}
