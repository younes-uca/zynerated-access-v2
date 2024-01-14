package  ma.zs.easystock.ws.dto.stock;

import ma.zs.easystock.zynerator.audit.Log;
import ma.zs.easystock.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;




@JsonInclude(JsonInclude.Include.NON_NULL)
public class ModelPermissionDto  extends AuditBaseDto {

    private String reference  ;
    private String libelle  ;


    private List<PermissionDto> permissions ;


    public ModelPermissionDto(){
        super();
    }



    @Log
    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }

    @Log
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }





    public List<PermissionDto> getPermissions(){
        return this.permissions;
    }

    public void setPermissions(List<PermissionDto> permissions){
        this.permissions = permissions;
    }



}
