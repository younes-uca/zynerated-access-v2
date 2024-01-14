package ma.zs.easystock.service.facade.admin.stock;

import java.util.List;
import ma.zs.easystock.bean.core.stock.DroitUtilisateur;
import ma.zs.easystock.dao.criteria.core.stock.DroitUtilisateurCriteria;
import ma.zs.easystock.zynerator.service.IService;



public interface DroitUtilisateurAdminService extends  IService<DroitUtilisateur,DroitUtilisateurCriteria>  {

    List<DroitUtilisateur> findByDroitId(Long id);
    int deleteByDroitId(Long id);
    long countByDroitAuthority(String authority);
    List<DroitUtilisateur> findByUtilisateurId(Long id);
    int deleteByUtilisateurId(Long id);
    long countByUtilisateurEmail(String email);



}
