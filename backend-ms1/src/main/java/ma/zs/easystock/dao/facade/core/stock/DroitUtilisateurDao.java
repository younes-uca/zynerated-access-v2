package ma.zs.easystock.dao.facade.core.stock;

import ma.zs.easystock.zynerator.repository.AbstractRepository;
import ma.zs.easystock.bean.core.stock.DroitUtilisateur;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface DroitUtilisateurDao extends AbstractRepository<DroitUtilisateur,Long>  {

    List<DroitUtilisateur> findByDroitId(Long id);
    int deleteByDroitId(Long id);
    long countByDroitAuthority(String authority);
    List<DroitUtilisateur> findByUtilisateurId(Long id);
    int deleteByUtilisateurId(Long id);
    long countByUtilisateurEmail(String email);


}
