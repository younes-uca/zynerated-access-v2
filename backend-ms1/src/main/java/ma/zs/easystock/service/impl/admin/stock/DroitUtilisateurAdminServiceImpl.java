package ma.zs.easystock.service.impl.admin.stock;


import ma.zs.easystock.bean.core.stock.DroitUtilisateur;
import ma.zs.easystock.dao.criteria.core.stock.DroitUtilisateurCriteria;
import ma.zs.easystock.dao.facade.core.stock.DroitUtilisateurDao;
import ma.zs.easystock.dao.specification.core.stock.DroitUtilisateurSpecification;
import ma.zs.easystock.service.facade.admin.stock.DroitUtilisateurAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import ma.zs.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;

import ma.zs.easystock.service.facade.admin.stock.DroitAdminService ;
import ma.zs.easystock.bean.core.stock.Droit ;
import ma.zs.easystock.service.facade.admin.stock.UtilisateurAdminService ;
import ma.zs.easystock.bean.core.stock.Utilisateur ;

import java.util.List;
@Service
public class DroitUtilisateurAdminServiceImpl extends AbstractServiceImpl<DroitUtilisateur, DroitUtilisateurCriteria, DroitUtilisateurDao> implements DroitUtilisateurAdminService {






    public List<DroitUtilisateur> findByDroitId(Long id){
        return dao.findByDroitId(id);
    }
    public int deleteByDroitId(Long id){
        return dao.deleteByDroitId(id);
    }
    public long countByDroitAuthority(String authority){
        return dao.countByDroitAuthority(authority);
    }
    public List<DroitUtilisateur> findByUtilisateurId(Long id){
        return dao.findByUtilisateurId(id);
    }
    public int deleteByUtilisateurId(Long id){
        return dao.deleteByUtilisateurId(id);
    }
    public long countByUtilisateurEmail(String email){
        return dao.countByUtilisateurEmail(email);
    }






    public void configure() {
        super.configure(DroitUtilisateur.class, DroitUtilisateurSpecification.class);
    }


    @Autowired
    private DroitAdminService droitService ;
    @Autowired
    private UtilisateurAdminService utilisateurService ;

    public DroitUtilisateurAdminServiceImpl(DroitUtilisateurDao dao) {
        super(dao);
    }

}
