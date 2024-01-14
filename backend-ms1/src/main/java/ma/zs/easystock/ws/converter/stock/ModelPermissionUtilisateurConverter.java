package  ma.zs.easystock.ws.converter.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zs.easystock.ws.converter.stock.ModelPermissionConverter;
import ma.zs.easystock.ws.converter.stock.UtilisateurConverter;
import ma.zs.easystock.ws.converter.stock.ActionPermissionConverter;

import ma.zs.easystock.bean.core.stock.Utilisateur;


import ma.zs.easystock.zynerator.util.StringUtil;
import ma.zs.easystock.zynerator.converter.AbstractConverter;
import ma.zs.easystock.zynerator.util.DateUtil;
import ma.zs.easystock.bean.core.stock.ModelPermissionUtilisateur;
import ma.zs.easystock.ws.dto.stock.ModelPermissionUtilisateurDto;

@Component
public class ModelPermissionUtilisateurConverter extends AbstractConverter<ModelPermissionUtilisateur, ModelPermissionUtilisateurDto> {

    @Autowired
    private ModelPermissionConverter modelPermissionConverter ;
    @Autowired
    private UtilisateurConverter utilisateurConverter ;
    @Autowired
    private ActionPermissionConverter actionPermissionConverter ;
    private boolean actionPermission;
    private boolean modelPermission;
    private boolean utilisateur;

    public  ModelPermissionUtilisateurConverter(){//ModelPermission modelPermissionUtilisateur utilisateurActionPermission actionPermission,){
        super(ModelPermissionUtilisateur.class, ModelPermissionUtilisateurDto.class);
        //this.modelPermission =  modelPermission ;
        //this.utilisateur =  utilisateur ;
        //this.actionPermission =  actionPermission ;
    }

    @Override
    public ModelPermissionUtilisateur toItem(ModelPermissionUtilisateurDto dto) {
        if (dto == null) {
            return null;
        } else {
        ModelPermissionUtilisateur item = new ModelPermissionUtilisateur();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(dto.getValue() != null)
                item.setValue(dto.getValue());
            if(StringUtil.isNotEmpty(dto.getSubAttribute()))
                item.setSubAttribute(dto.getSubAttribute());
            if(this.actionPermission && dto.getActionPermission()!=null &&  dto.getActionPermission().getId() != null)
                item.setActionPermission(actionPermissionConverter.toItem(dto.getActionPermission())) ;

            if(this.modelPermission && dto.getModelPermission()!=null &&  dto.getModelPermission().getId() != null)
                item.setModelPermission(modelPermissionConverter.toItem(dto.getModelPermission())) ;

            if(dto.getUtilisateur() != null && dto.getUtilisateur().getId() != null){
                item.setUtilisateur(new Utilisateur());
                item.getUtilisateur().setId(dto.getUtilisateur().getId());
                item.getUtilisateur().setEmail(dto.getUtilisateur().getEmail());
            }




        return item;
        }
    }

    @Override
    public ModelPermissionUtilisateurDto toDto(ModelPermissionUtilisateur item) {
        if (item == null) {
            return null;
        } else {
            ModelPermissionUtilisateurDto dto = new ModelPermissionUtilisateurDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
                dto.setValue(item.getValue());
            if(StringUtil.isNotEmpty(item.getSubAttribute()))
                dto.setSubAttribute(item.getSubAttribute());
        if(this.actionPermission && item.getActionPermission()!=null) {
            dto.setActionPermission(actionPermissionConverter.toDto(item.getActionPermission())) ;
        }
        if(this.modelPermission && item.getModelPermission()!=null) {
            dto.setModelPermission(modelPermissionConverter.toDto(item.getModelPermission())) ;
        }
        if(this.utilisateur && item.getUtilisateur()!=null) {
            dto.setUtilisateur(utilisateurConverter.toDto(item.getUtilisateur())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.actionPermission = value;
        this.modelPermission = value;
        this.utilisateur = value;
    }


    public ModelPermissionConverter getModelPermissionConverter(){
        return this.modelPermissionConverter;
    }
    public void setModelPermissionConverter(ModelPermissionConverter modelPermissionConverter ){
        this.modelPermissionConverter = modelPermissionConverter;
    }
    public UtilisateurConverter getUtilisateurConverter(){
        return this.utilisateurConverter;
    }
    public void setUtilisateurConverter(UtilisateurConverter utilisateurConverter ){
        this.utilisateurConverter = utilisateurConverter;
    }
    public ActionPermissionConverter getActionPermissionConverter(){
        return this.actionPermissionConverter;
    }
    public void setActionPermissionConverter(ActionPermissionConverter actionPermissionConverter ){
        this.actionPermissionConverter = actionPermissionConverter;
    }
    public boolean  isActionPermission(){
        return this.actionPermission;
    }
    public void  setActionPermission(boolean actionPermission){
        this.actionPermission = actionPermission;
    }
    public boolean  isModelPermission(){
        return this.modelPermission;
    }
    public void  setModelPermission(boolean modelPermission){
        this.modelPermission = modelPermission;
    }
    public boolean  isUtilisateur(){
        return this.utilisateur;
    }
    public void  setUtilisateur(boolean utilisateur){
        this.utilisateur = utilisateur;
    }
}
