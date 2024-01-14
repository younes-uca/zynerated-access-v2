package  ma.zs.easystock.ws.converter.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ma.zs.easystock.zynerator.util.ListUtil;

import ma.zs.easystock.ws.converter.stock.ActionPermissionConverter;
import ma.zs.easystock.ws.converter.stock.PermissionConverter;



import ma.zs.easystock.zynerator.util.StringUtil;
import ma.zs.easystock.zynerator.converter.AbstractConverter;
import ma.zs.easystock.zynerator.util.DateUtil;
import ma.zs.easystock.bean.core.stock.ModelPermission;
import ma.zs.easystock.ws.dto.stock.ModelPermissionDto;

@Component
public class ModelPermissionConverter extends AbstractConverter<ModelPermission, ModelPermissionDto> {

    @Autowired
    private ActionPermissionConverter actionPermissionConverter ;
    @Autowired
    private PermissionConverter permissionConverter ;
    private boolean permissions;

    public  ModelPermissionConverter(){//ActionPermission actionPermissionPermission permission){
        super(ModelPermission.class, ModelPermissionDto.class);
        init(true);
        //this.actionPermission =  actionPermission ;
        //this.permission =  permission ;
    }

    @Override
    public ModelPermission toItem(ModelPermissionDto dto) {
        if (dto == null) {
            return null;
        } else {
        ModelPermission item = new ModelPermission();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getReference()))
                item.setReference(dto.getReference());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());

            if(this.permissions && ListUtil.isNotEmpty(dto.getPermissions()))
                item.setPermissions(permissionConverter.toItem(dto.getPermissions()));


        return item;
        }
    }

    @Override
    public ModelPermissionDto toDto(ModelPermission item) {
        if (item == null) {
            return null;
        } else {
            ModelPermissionDto dto = new ModelPermissionDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getReference()))
                dto.setReference(item.getReference());
            if(StringUtil.isNotEmpty(item.getLibelle()))
                dto.setLibelle(item.getLibelle());
        if(this.permissions && ListUtil.isNotEmpty(item.getPermissions())){
            permissionConverter.init(true);
            permissionConverter.setModelPermission(false);
            dto.setPermissions(permissionConverter.toDto(item.getPermissions()));
            permissionConverter.setModelPermission(true);

        }


        return dto;
        }
    }

    public void initList(boolean value) {
        this.permissions = value;
    }

    public void initObject(boolean value) {
    }


    public ActionPermissionConverter getActionPermissionConverter(){
        return this.actionPermissionConverter;
    }
    public void setActionPermissionConverter(ActionPermissionConverter actionPermissionConverter ){
        this.actionPermissionConverter = actionPermissionConverter;
    }
    public PermissionConverter getPermissionConverter(){
        return this.permissionConverter;
    }
    public void setPermissionConverter(PermissionConverter permissionConverter ){
        this.permissionConverter = permissionConverter;
    }
    public boolean  isPermissions(){
        return this.permissions ;
    }
    public void  setPermissions(boolean permissions ){
        this.permissions  = permissions ;
    }
}
