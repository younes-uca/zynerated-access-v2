package  ma.zs.easystock.ws.dto.stock;

import ma.zs.easystock.zynerator.audit.Log;
import ma.zs.easystock.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;




@JsonInclude(JsonInclude.Include.NON_NULL)
public class UtilisateurDto  extends AuditBaseDto {

    private Boolean credentialsNonExpired  ;
    private Boolean enabled  ;
    private String email  ;
    private Boolean accountNonExpired  ;
    private Boolean accountNonLocked  ;
    private String username  ;
    private String password  ;
    private Boolean passwordChanged  ;


    private List<ModelPermissionDto> modelPermissions ;
    private List<DroitUtilisateurDto> droitUtilisateurs ;


    public UtilisateurDto(){
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





    public List<ModelPermissionDto> getModelPermissions(){
        return this.modelPermissions;
    }

    public void setModelPermissions(List<ModelPermissionDto> modelPermissions){
        this.modelPermissions = modelPermissions;
    }
    public List<DroitUtilisateurDto> getDroitUtilisateurs(){
        return this.droitUtilisateurs;
    }

    public void setDroitUtilisateurs(List<DroitUtilisateurDto> droitUtilisateurs){
        this.droitUtilisateurs = droitUtilisateurs;
    }



}
