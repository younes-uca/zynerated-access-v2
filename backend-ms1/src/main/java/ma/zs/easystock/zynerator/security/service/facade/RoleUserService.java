package ma.zs.easystock.zynerator.security.service.facade;

import java.util.List;
import ma.zs.easystock.zynerator.security.bean.RoleUser;
import ma.zs.easystock.zynerator.security.dao.criteria.core.RoleUserCriteria;
import ma.zs.easystock.zynerator.service.IService;



public interface RoleUserService extends  IService<RoleUser,RoleUserCriteria>  {

    List<RoleUser> findByRoleId(Long id);
    int deleteByRoleId(Long id);
    long countByRoleAuthority(String authority);
    List<RoleUser> findByUserId(Long id);
    int deleteByUserId(Long id);
    long countByUserEmail(String email);



}
