package ma.zs.easystock.zynerator.security.service.impl;


import ma.zs.easystock.zynerator.security.bean.Role;
import ma.zs.easystock.zynerator.security.dao.criteria.core.RoleCriteria;
import ma.zs.easystock.zynerator.security.dao.facade.core.RoleDao;
import ma.zs.easystock.zynerator.security.dao.specification.core.RoleSpecification;
import ma.zs.easystock.zynerator.security.service.facade.RoleAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RoleAdminServiceImpl extends AbstractServiceImpl<Role, RoleCriteria, RoleDao> implements RoleAdminService {


    @Override
    public Role findByAuthority(String authority) {
        return dao.findByAuthority(authority);
    }

    @Override
    public int deleteByAuthority(String authority) {
        return deleteByAuthority(authority);
    }



    public Role findByReferenceEntity(Role t){
        return  dao.findByAuthority(t.getAuthority());
    }


    public List<Role> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(Role.class, RoleSpecification.class);
    }



    public RoleAdminServiceImpl(RoleDao dao) {
        super(dao);
    }

}
