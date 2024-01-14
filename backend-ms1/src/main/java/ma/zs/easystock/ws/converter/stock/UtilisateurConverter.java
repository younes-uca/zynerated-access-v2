package  ma.zs.easystock.ws.converter.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ma.zs.easystock.zynerator.util.ListUtil;

import ma.zs.easystock.ws.converter.stock.DroitUtilisateurConverter;
import ma.zs.easystock.ws.converter.stock.ModelPermissionConverter;
import ma.zs.easystock.ws.converter.stock.DroitConverter;
import ma.zs.easystock.ws.converter.stock.ModelPermissionUtilisateurConverter;
import ma.zs.easystock.ws.converter.stock.ActionPermissionConverter;



import ma.zs.easystock.zynerator.util.StringUtil;
import ma.zs.easystock.zynerator.converter.AbstractConverter;
import ma.zs.easystock.zynerator.util.DateUtil;
import ma.zs.easystock.bean.core.stock.Utilisateur;
import ma.zs.easystock.ws.dto.stock.UtilisateurDto;

@Component
public class UtilisateurConverter extends AbstractConverter<Utilisateur, UtilisateurDto> {

    @Autowired
    private DroitUtilisateurConverter droitUtilisateurConverter ;
    @Autowired
    private ModelPermissionConverter modelPermissionConverter ;
    @Autowired
    private DroitConverter droitConverter ;
    @Autowired
    private ModelPermissionUtilisateurConverter modelPermissionUtilisateurConverter ;
    @Autowired
    private ActionPermissionConverter actionPermissionConverter ;
    private boolean modelPermissionUtilisateurs;
    private boolean droitUtilisateurs;

    public  UtilisateurConverter(){//DroitUtilisateur droitUtilisateurModelPermission modelPermissionDroit droitModelPermissionUtilisateur modelPermissionUtilisateurActionPermission actionPermission,){
        super(Utilisateur.class, UtilisateurDto.class);
        init(true);
        //this.droitUtilisateur =  droitUtilisateur ;
        //this.modelPermission =  modelPermission ;
        //this.droit =  droit ;
        //this.modelPermissionUtilisateur =  modelPermissionUtilisateur ;
        //this.actionPermission =  actionPermission ;
    }

    @Override
    public Utilisateur toItem(UtilisateurDto dto) {
        if (dto == null) {
            return null;
        } else {
        Utilisateur item = new Utilisateur();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(dto.getCredentialsNonExpired() != null)
                item.setCredentialsNonExpired(dto.getCredentialsNonExpired());
            if(dto.getEnabled() != null)
                item.setEnabled(dto.getEnabled());
            if(StringUtil.isNotEmpty(dto.getEmail()))
                item.setEmail(dto.getEmail());
            if(dto.getAccountNonExpired() != null)
                item.setAccountNonExpired(dto.getAccountNonExpired());
            if(dto.getAccountNonLocked() != null)
                item.setAccountNonLocked(dto.getAccountNonLocked());
            if(StringUtil.isNotEmpty(dto.getUsername()))
                item.setUsername(dto.getUsername());
            if(StringUtil.isNotEmpty(dto.getPassword()))
                item.setPassword(dto.getPassword());
            if(dto.getPasswordChanged() != null)
                item.setPasswordChanged(dto.getPasswordChanged());

            if(this.modelPermissionUtilisateurs && ListUtil.isNotEmpty(dto.getModelPermissionUtilisateurs()))
                item.setModelPermissionUtilisateurs(modelPermissionUtilisateurConverter.toItem(dto.getModelPermissionUtilisateurs()));
            if(this.droitUtilisateurs && ListUtil.isNotEmpty(dto.getDroitUtilisateurs()))
                item.setDroitUtilisateurs(droitUtilisateurConverter.toItem(dto.getDroitUtilisateurs()));


        return item;
        }
    }

    @Override
    public UtilisateurDto toDto(Utilisateur item) {
        if (item == null) {
            return null;
        } else {
            UtilisateurDto dto = new UtilisateurDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getCredentialsNonExpired()))
                dto.setCredentialsNonExpired(item.getCredentialsNonExpired());
            if(StringUtil.isNotEmpty(item.getEnabled()))
                dto.setEnabled(item.getEnabled());
            if(StringUtil.isNotEmpty(item.getEmail()))
                dto.setEmail(item.getEmail());
            if(StringUtil.isNotEmpty(item.getAccountNonExpired()))
                dto.setAccountNonExpired(item.getAccountNonExpired());
            if(StringUtil.isNotEmpty(item.getAccountNonLocked()))
                dto.setAccountNonLocked(item.getAccountNonLocked());
            if(StringUtil.isNotEmpty(item.getUsername()))
                dto.setUsername(item.getUsername());
            if(StringUtil.isNotEmpty(item.getPassword()))
                dto.setPassword(item.getPassword());
            if(StringUtil.isNotEmpty(item.getPasswordChanged()))
                dto.setPasswordChanged(item.getPasswordChanged());
        if(this.modelPermissionUtilisateurs && ListUtil.isNotEmpty(item.getModelPermissionUtilisateurs())){
            modelPermissionUtilisateurConverter.init(true);
            modelPermissionUtilisateurConverter.setUtilisateur(false);
            dto.setModelPermissionUtilisateurs(modelPermissionUtilisateurConverter.toDto(item.getModelPermissionUtilisateurs()));
            modelPermissionUtilisateurConverter.setUtilisateur(true);

        }
        if(this.droitUtilisateurs && ListUtil.isNotEmpty(item.getDroitUtilisateurs())){
            droitUtilisateurConverter.init(true);
            droitUtilisateurConverter.setUtilisateur(false);
            dto.setDroitUtilisateurs(droitUtilisateurConverter.toDto(item.getDroitUtilisateurs()));
            droitUtilisateurConverter.setUtilisateur(true);

        }


        return dto;
        }
    }

    public void initList(boolean value) {
        this.modelPermissionUtilisateurs = value;
        this.droitUtilisateurs = value;
    }

    public void initObject(boolean value) {
    }


    public DroitUtilisateurConverter getDroitUtilisateurConverter(){
        return this.droitUtilisateurConverter;
    }
    public void setDroitUtilisateurConverter(DroitUtilisateurConverter droitUtilisateurConverter ){
        this.droitUtilisateurConverter = droitUtilisateurConverter;
    }
    public ModelPermissionConverter getModelPermissionConverter(){
        return this.modelPermissionConverter;
    }
    public void setModelPermissionConverter(ModelPermissionConverter modelPermissionConverter ){
        this.modelPermissionConverter = modelPermissionConverter;
    }
    public DroitConverter getDroitConverter(){
        return this.droitConverter;
    }
    public void setDroitConverter(DroitConverter droitConverter ){
        this.droitConverter = droitConverter;
    }
    public ModelPermissionUtilisateurConverter getModelPermissionUtilisateurConverter(){
        return this.modelPermissionUtilisateurConverter;
    }
    public void setModelPermissionUtilisateurConverter(ModelPermissionUtilisateurConverter modelPermissionUtilisateurConverter ){
        this.modelPermissionUtilisateurConverter = modelPermissionUtilisateurConverter;
    }
    public ActionPermissionConverter getActionPermissionConverter(){
        return this.actionPermissionConverter;
    }
    public void setActionPermissionConverter(ActionPermissionConverter actionPermissionConverter ){
        this.actionPermissionConverter = actionPermissionConverter;
    }
    public boolean  isModelPermissionUtilisateurs(){
        return this.modelPermissionUtilisateurs ;
    }
    public void  setModelPermissionUtilisateurs(boolean modelPermissionUtilisateurs ){
        this.modelPermissionUtilisateurs  = modelPermissionUtilisateurs ;
    }
    public boolean  isDroitUtilisateurs(){
        return this.droitUtilisateurs ;
    }
    public void  setDroitUtilisateurs(boolean droitUtilisateurs ){
        this.droitUtilisateurs  = droitUtilisateurs ;
    }
}
