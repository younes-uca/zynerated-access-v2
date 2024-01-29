package ma.zs.easystock.zynerator.security.service.impl;


import ma.zs.easystock.zynerator.security.bean.RoleUser;
import ma.zs.easystock.zynerator.security.dao.criteria.core.RoleUserCriteria;
import ma.zs.easystock.zynerator.security.dao.facade.core.RoleUserDao;
import ma.zs.easystock.zynerator.security.dao.specification.core.RoleUserSpecification;
import ma.zs.easystock.zynerator.security.service.facade.RoleUserAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import ma.zs.easystock.zynerator.security.service.facade.RoleAdminService;
import ma.zs.easystock.zynerator.security.service.facade.UserAdminService;

@Service
public class RoleUserAdminServiceImpl extends AbstractServiceImpl<RoleUser, RoleUserCriteria, RoleUserDao> implements RoleUserAdminService {






    public List<RoleUser> findByRoleId(Long id){
        return dao.findByRoleId(id);
    }
    public int deleteByRoleId(Long id){
        return dao.deleteByRoleId(id);
    }
    public long countByRoleAuthority(String authority){
        return dao.countByRoleAuthority(authority);
    }
    public List<RoleUser> findByUserId(Long id){
        return dao.findByUserId(id);
    }
    public int deleteByUserId(Long id){
        return dao.deleteByUserId(id);
    }
    public long countByUserEmail(String email){
        return dao.countByUserEmail(email);
    }






    public void configure() {
        super.configure(RoleUser.class, RoleUserSpecification.class);
    }


    @Autowired
    private RoleAdminService roleService ;
    @Autowired
    private UserAdminService utilisateurService ;

    public RoleUserAdminServiceImpl(RoleUserDao dao) {
        super(dao);
    }

}
