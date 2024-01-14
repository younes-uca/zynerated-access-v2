package ma.zs.easystock.dao.facade.core.stock;

import org.springframework.data.jpa.repository.Query;
import ma.zs.easystock.zynerator.repository.AbstractRepository;
import ma.zs.easystock.bean.core.stock.Droit;
import org.springframework.stereotype.Repository;
import ma.zs.easystock.bean.core.stock.Droit;
import java.util.List;


@Repository
public interface DroitDao extends AbstractRepository<Droit,Long>  {
    Droit findByAuthority(String authority);
    int deleteByAuthority(String authority);


    @Query("SELECT NEW Droit(item.id,item.authority) FROM Droit item")
    List<Droit> findAllOptimized();

}
