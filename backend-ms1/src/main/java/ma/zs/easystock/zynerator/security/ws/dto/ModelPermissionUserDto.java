package ma.zs.easystock.zynerator.security.ws.dto;

import ma.zs.easystock.zynerator.audit.Log;
import ma.zs.easystock.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;





@JsonInclude(JsonInclude.Include.NON_NULL)
public class ModelPermissionUserDto  extends AuditBaseDto {

    private Boolean value  ;
    private String subAttribute  ;

    private ActionPermissionDto actionPermission ;
    private ModelPermissionDto modelPermission ;
    private UserDto user ;



    public ModelPermissionUserDto(){
        super();
    }



    @Log
    public Boolean getValue(){
        return this.value;
    }
    public void setValue(Boolean value){
        this.value = value;
    }

    @Log
    public String getSubAttribute(){
        return this.subAttribute;
    }
    public void setSubAttribute(String subAttribute){
        this.subAttribute = subAttribute;
    }


    public ActionPermissionDto getActionPermission(){
        return this.actionPermission;
    }

    public void setActionPermission(ActionPermissionDto actionPermission){
        this.actionPermission = actionPermission;
    }
    public ModelPermissionDto getModelPermission(){
        return this.modelPermission;
    }

    public void setModelPermission(ModelPermissionDto modelPermission){
        this.modelPermission = modelPermission;
    }
    public UserDto getUser(){
        return this.user;
    }

    public void setUser(UserDto user){
        this.user = user;
    }






}
