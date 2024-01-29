package ma.zs.easystock.zynerator.security.ws.dto;

import ma.zs.easystock.zynerator.audit.Log;
import ma.zs.easystock.zynerator.bean.Etablissement;
import ma.zs.easystock.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;




@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDto  extends AuditBaseDto {

    private Boolean credentialsNonExpired  ;
    private Boolean enabled  ;
    private String email  ;
    private Boolean accountNonExpired  ;
    private Boolean accountNonLocked  ;
    private String username  ;
    private String password  ;
    private Boolean passwordChanged  ;


    private List<ModelPermissionUserDto> modelPermissionUsers ;
    private List<RoleUserDto> roleUsers ;

    protected Etablissement etablissement;


    public UserDto(){
        super();
    }



    @Log
    public Boolean getCredentialsNonExpired(){
        return this.credentialsNonExpired;
    }
    public void setCredentialsNonExpired(Boolean credentialsNonExpired){
        this.credentialsNonExpired = credentialsNonExpired;
    }

    @Log
    public Boolean getEnabled(){
        return this.enabled;
    }
    public void setEnabled(Boolean enabled){
        this.enabled = enabled;
    }

    @Log
    public String getEmail(){
        return this.email;
    }
    public void setEmail(String email){
        this.email = email;
    }

    @Log
    public Boolean getAccountNonExpired(){
        return this.accountNonExpired;
    }
    public void setAccountNonExpired(Boolean accountNonExpired){
        this.accountNonExpired = accountNonExpired;
    }

    @Log
    public Boolean getAccountNonLocked(){
        return this.accountNonLocked;
    }
    public void setAccountNonLocked(Boolean accountNonLocked){
        this.accountNonLocked = accountNonLocked;
    }

    @Log
    public String getUsername(){
        return this.username;
    }
    public void setUsername(String username){
        this.username = username;
    }

    @Log
    public String getPassword(){
        return this.password;
    }
    public void setPassword(String password){
        this.password = password;
    }

    @Log
    public Boolean getPasswordChanged(){
        return this.passwordChanged;
    }
    public void setPasswordChanged(Boolean passwordChanged){
        this.passwordChanged = passwordChanged;
    }





    public List<ModelPermissionUserDto> getModelPermissionUsers(){
        return this.modelPermissionUsers;
    }

    public void setModelPermissionUsers(List<ModelPermissionUserDto> modelPermissionUsers){
        this.modelPermissionUsers = modelPermissionUsers;
    }
    public List<RoleUserDto> getRoleUsers(){
        return this.roleUsers;
    }

    public void setRoleUsers(List<RoleUserDto> roleUsers){
        this.roleUsers = roleUsers;
    }

    public Etablissement getEtablissement() {
        return etablissement;
    }

    public void setEtablissement(Etablissement etablissement) {
        this.etablissement = etablissement;
    }
}
