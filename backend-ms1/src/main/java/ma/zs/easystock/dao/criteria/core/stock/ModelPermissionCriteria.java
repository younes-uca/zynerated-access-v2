package  ma.zs.easystock.dao.criteria.core.stock;



import ma.zs.easystock.zynerator.criteria.BaseCriteria;
import java.util.List;

public class ModelPermissionCriteria extends  BaseCriteria  {

    private String reference;
    private String referenceLike;
    private String libelle;
    private String libelleLike;



    public ModelPermissionCriteria(){}

    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }
    public String getReferenceLike(){
        return this.referenceLike;
    }
    public void setReferenceLike(String referenceLike){
        this.referenceLike = referenceLike;
    }

    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }
    public String getLibelleLike(){
        return this.libelleLike;
    }
    public void setLibelleLike(String libelleLike){
        this.libelleLike = libelleLike;
    }


}
