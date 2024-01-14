package ma.zs.easystock.service.impl.admin.stock;


import ma.zs.easystock.bean.core.stock.ModelPermissionUtilisateur;
import ma.zs.easystock.dao.criteria.core.stock.ModelPermissionUtilisateurCriteria;
import ma.zs.easystock.dao.facade.core.stock.ModelPermissionUtilisateurDao;
import ma.zs.easystock.dao.specification.core.stock.ModelPermissionUtilisateurSpecification;
import ma.zs.easystock.service.facade.admin.stock.ModelPermissionUtilisateurAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import ma.zs.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;

import ma.zs.easystock.service.facade.admin.stock.ModelPermissionAdminService ;
import ma.zs.easystock.bean.core.stock.ModelPermission ;
import ma.zs.easystock.service.facade.admin.stock.UtilisateurAdminService ;
import ma.zs.easystock.bean.core.stock.Utilisateur ;
import ma.zs.easystock.service.facade.admin.stock.ActionPermissionAdminService ;
import ma.zs.easystock.bean.core.stock.ActionPermission ;

import java.util.List;
@Service
public class ModelPermissionUtilisateurAdminServiceImpl extends AbstractServiceImpl<ModelPermissionUtilisateur, ModelPermissionUtilisateurCriteria, ModelPermissionUtilisateurDao> implements ModelPermissionUtilisateurAdminService {






    public List<ModelPermissionUtilisateur> findByActionPermissionId(Long id){
        return dao.findByActionPermissionId(id);
    }
    public int deleteByActionPermissionId(Long id){
        return dao.deleteByActionPermissionId(id);
    }
    public long countByActionPermissionReference(String reference){
        return dao.countByActionPermissionReference(reference);
    }
    public List<ModelPermissionUtilisateur> findByModelPermissionId(Long id){
        return dao.findByModelPermissionId(id);
    }
    public int deleteByModelPermissionId(Long id){
        return dao.deleteByModelPermissionId(id);
    }
    public long countByModelPermissionReference(String reference){
        return dao.countByModelPermissionReference(reference);
    }
    public List<ModelPermissionUtilisateur> findByUtilisateurId(Long id){
        return dao.findByUtilisateurId(id);
    }
    public int deleteByUtilisateurId(Long id){
        return dao.deleteByUtilisateurId(id);
    }
    public long countByUtilisateurEmail(String email){
        return dao.countByUtilisateurEmail(email);
    }






    public void configure() {
        super.configure(ModelPermissionUtilisateur.class, ModelPermissionUtilisateurSpecification.class);
    }


    @Autowired
    private ModelPermissionAdminService modelPermissionService ;
    @Autowired
    private UtilisateurAdminService utilisateurService ;
    @Autowired
    private ActionPermissionAdminService actionPermissionService ;

    public ModelPermissionUtilisateurAdminServiceImpl(ModelPermissionUtilisateurDao dao) {
        super(dao);
    }

}
