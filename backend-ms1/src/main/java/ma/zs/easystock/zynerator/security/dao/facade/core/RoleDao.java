package ma.zs.easystock.zynerator.security.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.zs.easystock.zynerator.repository.AbstractRepository;
import ma.zs.easystock.zynerator.security.bean.Role;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface RoleDao extends AbstractRepository<Role,Long>  {
    Role findByAuthority(String authority);
    int deleteByAuthority(String authority);

    @Query("SELECT NEW Role(item.id,item.authority) FROM Role item")
    List<Role> findAllOptimized();

}
