package ma.zs.easystock.dao.facade.core.stock;

import org.springframework.data.jpa.repository.Query;
import ma.zs.easystock.zynerator.repository.AbstractRepository;
import ma.zs.easystock.bean.core.stock.Utilisateur;
import org.springframework.stereotype.Repository;
import ma.zs.easystock.bean.core.stock.Utilisateur;
import java.util.List;


@Repository
public interface UtilisateurDao extends AbstractRepository<Utilisateur,Long>  {
    Utilisateur findByEmail(String email);
    int deleteByEmail(String email);


    @Query("SELECT NEW Utilisateur(item.id,item.email) FROM Utilisateur item")
    List<Utilisateur> findAllOptimized();

}
