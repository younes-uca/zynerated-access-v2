package ma.zs.easystock.service.facade.admin.stock;

import java.util.List;
import ma.zs.easystock.bean.core.stock.ModelPermissionUtilisateur;
import ma.zs.easystock.dao.criteria.core.stock.ModelPermissionUtilisateurCriteria;
import ma.zs.easystock.zynerator.service.IService;



public interface ModelPermissionUtilisateurAdminService extends  IService<ModelPermissionUtilisateur,ModelPermissionUtilisateurCriteria>  {

    List<ModelPermissionUtilisateur> findByActionPermissionId(Long id);
    int deleteByActionPermissionId(Long id);
    long countByActionPermissionReference(String reference);
    List<ModelPermissionUtilisateur> findByModelPermissionId(Long id);
    int deleteByModelPermissionId(Long id);
    long countByModelPermissionReference(String reference);
    List<ModelPermissionUtilisateur> findByUtilisateurId(Long id);
    int deleteByUtilisateurId(Long id);
    long countByUtilisateurEmail(String email);



}
