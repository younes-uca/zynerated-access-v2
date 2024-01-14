package ma.zs.easystock.bean.core.stock;

import java.util.Objects;
import java.util.List;







import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.easystock.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "utilisateur")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="utilisateur_seq",sequenceName="utilisateur_seq",allocationSize=1, initialValue = 1)
public class Utilisateur   extends AuditBusinessObject     {

    private Long id;

    @Column(columnDefinition = "boolean default false")
    private Boolean credentialsNonExpired = false;
    @Column(columnDefinition = "boolean default false")
    private Boolean enabled = false;
    @Column(length = 500)
    private String email;
    @Column(columnDefinition = "boolean default false")
    private Boolean accountNonExpired = false;
    @Column(columnDefinition = "boolean default false")
    private Boolean accountNonLocked = false;
    @Column(length = 500)
    private String username;
    @Column(length = 500)
    private String password;
    @Column(columnDefinition = "boolean default false")
    private Boolean passwordChanged = false;


    private List<ModelPermission> modelPermissions ;
    private List<DroitUtilisateur> droitUtilisateurs ;

    public Utilisateur(){
        super();
    }

    public Utilisateur(Long id,String email){
        this.id = id;
        this.email = email ;
    }
    public Utilisateur(String email){
        this.email = email ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="utilisateur_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public boolean  getCredentialsNonExpired(){
        return this.credentialsNonExpired;
    }
    public void setCredentialsNonExpired(boolean credentialsNonExpired){
        this.credentialsNonExpired = credentialsNonExpired;
    }
    public boolean  getEnabled(){
        return this.enabled;
    }
    public void setEnabled(boolean enabled){
        this.enabled = enabled;
    }
    public String getEmail(){
        return this.email;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public boolean  getAccountNonExpired(){
        return this.accountNonExpired;
    }
    public void setAccountNonExpired(boolean accountNonExpired){
        this.accountNonExpired = accountNonExpired;
    }
    public boolean  getAccountNonLocked(){
        return this.accountNonLocked;
    }
    public void setAccountNonLocked(boolean accountNonLocked){
        this.accountNonLocked = accountNonLocked;
    }
    public String getUsername(){
        return this.username;
    }
    public void setUsername(String username){
        this.username = username;
    }
    public String getPassword(){
        return this.password;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public boolean  getPasswordChanged(){
        return this.passwordChanged;
    }
    public void setPasswordChanged(boolean passwordChanged){
        this.passwordChanged = passwordChanged;
    }
    @OneToMany

    public List<ModelPermission> getModelPermissions(){
        return this.modelPermissions;
    }
    public void setModelPermissions(List<ModelPermission> modelPermissions){
        this.modelPermissions = modelPermissions;
    }
    @OneToMany(mappedBy = "utilisateur")

    public List<DroitUtilisateur> getDroitUtilisateurs(){
        return this.droitUtilisateurs;
    }
    public void setDroitUtilisateurs(List<DroitUtilisateur> droitUtilisateurs){
        this.droitUtilisateurs = droitUtilisateurs;
    }

    @Transient
    public String getLabel() {
        label = email;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Utilisateur utilisateur = (Utilisateur) o;
        return id != null && id.equals(utilisateur.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

