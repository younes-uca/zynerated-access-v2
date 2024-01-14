package  ma.zs.easystock.dao.criteria.core.stock;



import ma.zs.easystock.zynerator.criteria.BaseCriteria;
import java.util.List;

public class DroitUtilisateurCriteria extends  BaseCriteria  {


    private DroitCriteria droit ;
    private List<DroitCriteria> droits ;
    private UtilisateurCriteria utilisateur ;
    private List<UtilisateurCriteria> utilisateurs ;


    public DroitUtilisateurCriteria(){}


    public DroitCriteria getDroit(){
        return this.droit;
    }

    public void setDroit(DroitCriteria droit){
        this.droit = droit;
    }
    public List<DroitCriteria> getDroits(){
        return this.droits;
    }

    public void setDroits(List<DroitCriteria> droits){
        this.droits = droits;
    }
    public UtilisateurCriteria getUtilisateur(){
        return this.utilisateur;
    }

    public void setUtilisateur(UtilisateurCriteria utilisateur){
        this.utilisateur = utilisateur;
    }
    public List<UtilisateurCriteria> getUtilisateurs(){
        return this.utilisateurs;
    }

    public void setUtilisateurs(List<UtilisateurCriteria> utilisateurs){
        this.utilisateurs = utilisateurs;
    }
}
