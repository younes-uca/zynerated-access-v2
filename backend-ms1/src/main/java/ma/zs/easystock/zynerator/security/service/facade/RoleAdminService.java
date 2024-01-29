package ma.zs.easystock.zynerator.security.service.facade;

import ma.zs.easystock.zynerator.security.bean.Role;
import ma.zs.easystock.zynerator.security.dao.criteria.core.RoleCriteria;
import ma.zs.easystock.zynerator.service.IService;



public interface RoleAdminService extends  IService<Role,RoleCriteria>  {
    Role findByAuthority(String authority);
    int deleteByAuthority(String authority);


    



}
