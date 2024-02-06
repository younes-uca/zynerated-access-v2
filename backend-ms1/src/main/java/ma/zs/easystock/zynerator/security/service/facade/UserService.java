package ma.zs.easystock.zynerator.security.service.facade;

import ma.zs.easystock.zynerator.security.bean.User;
import ma.zs.easystock.zynerator.security.dao.criteria.core.UserCriteria;
import ma.zs.easystock.zynerator.service.IService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;


public interface UserService extends IService<User, UserCriteria>, UserDetailsService {


    User findByUsername(String username);


    String cryptPassword(String value);

    boolean changePassword(String username, String newPassword);
    User findByUsernameWithRoles(String username);

    int  deleteByUsername(String username);

    public UserDetails loadUserByUsername(String username)  ;

}
