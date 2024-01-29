package ma.zs.easystock.zynerator.security.service.facade;

import ma.zs.easystock.zynerator.security.bean.User;
import ma.zs.easystock.zynerator.security.dao.criteria.core.UserCriteria;
import ma.zs.easystock.zynerator.service.IService;



public interface UserAdminService extends IService<User, UserCriteria>, UserService {


    User findByUsername(String username);

    User findByUsernameWithRoles(String username);


}
