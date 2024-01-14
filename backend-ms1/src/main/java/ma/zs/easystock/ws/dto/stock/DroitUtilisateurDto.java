package  ma.zs.easystock.ws.dto.stock;

import ma.zs.easystock.zynerator.audit.Log;
import ma.zs.easystock.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;





@JsonInclude(JsonInclude.Include.NON_NULL)
public class DroitUtilisateurDto  extends AuditBaseDto {


    private DroitDto droit ;
    private UtilisateurDto utilisateur ;



    public DroitUtilisateurDto(){
        super();
    }




    public DroitDto getDroit(){
        return this.droit;
    }

    public void setDroit(DroitDto droit){
        this.droit = droit;
    }
    public UtilisateurDto getUtilisateur(){
        return this.utilisateur;
    }

    public void setUtilisateur(UtilisateurDto utilisateur){
        this.utilisateur = utilisateur;
    }






}
