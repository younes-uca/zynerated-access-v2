package ma.zs.easystock.zynerator.security.jwt;


import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import ma.zs.easystock.zynerator.security.bean.User;
import ma.zs.easystock.zynerator.security.common.SecurityParams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Component
public class JwtUtils {
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    private String jwtSecret;


    private int jwtExpirationMs;

    public String generateJwtToken(Authentication authentication) {

        User userPrincipal = (User) authentication.getPrincipal();
        Collection<String> roles = new ArrayList<>();
        if (userPrincipal.getRoleUsers() != null) {
            userPrincipal.getRoleUsers().forEach(a -> roles.add(a.getRole().getAuthority()));
        }

        String jwt = JWT.create()
                .withSubject(userPrincipal.getUsername())
                .withClaim("email", userPrincipal.getEmail())
                .withArrayClaim("roles", roles.toArray(new String[roles.size()]))
                .withExpiresAt(new Date(System.currentTimeMillis() + SecurityParams.EXPIRATION))
                .sign(Algorithm.HMAC256(SecurityParams.SECRET));
        return jwt;
    }

}
