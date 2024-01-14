package ma.zs.easystock.dao.facade.core.stock;

import ma.zs.easystock.zynerator.repository.AbstractRepository;
import ma.zs.easystock.bean.core.stock.ModelPermissionUtilisateur;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface ModelPermissionUtilisateurDao extends AbstractRepository<ModelPermissionUtilisateur,Long>  {

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
