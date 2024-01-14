package  ma.zs.easystock.ws.converter.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zs.easystock.ws.converter.stock.UtilisateurConverter;
import ma.zs.easystock.ws.converter.stock.DroitConverter;

import ma.zs.easystock.bean.core.stock.Utilisateur;


import ma.zs.easystock.zynerator.util.StringUtil;
import ma.zs.easystock.zynerator.converter.AbstractConverter;
import ma.zs.easystock.zynerator.util.DateUtil;
import ma.zs.easystock.bean.core.stock.DroitUtilisateur;
import ma.zs.easystock.ws.dto.stock.DroitUtilisateurDto;

@Component
public class DroitUtilisateurConverter extends AbstractConverter<DroitUtilisateur, DroitUtilisateurDto> {

    @Autowired
    private UtilisateurConverter utilisateurConverter ;
    @Autowired
    private DroitConverter droitConverter ;
    private boolean droit;
    private boolean utilisateur;

    public  DroitUtilisateurConverter(){//Utilisateur utilisateurDroit droit,){
        super(DroitUtilisateur.class, DroitUtilisateurDto.class);
        //this.utilisateur =  utilisateur ;
        //this.droit =  droit ;
    }

    @Override
    public DroitUtilisateur toItem(DroitUtilisateurDto dto) {
        if (dto == null) {
            return null;
        } else {
        DroitUtilisateur item = new DroitUtilisateur();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(this.droit && dto.getDroit()!=null &&  dto.getDroit().getId() != null)
                item.setDroit(droitConverter.toItem(dto.getDroit())) ;

            if(dto.getUtilisateur() != null && dto.getUtilisateur().getId() != null){
                item.setUtilisateur(new Utilisateur());
                item.getUtilisateur().setId(dto.getUtilisateur().getId());
                item.getUtilisateur().setEmail(dto.getUtilisateur().getEmail());
            }




        return item;
        }
    }

    @Override
    public DroitUtilisateurDto toDto(DroitUtilisateur item) {
        if (item == null) {
            return null;
        } else {
            DroitUtilisateurDto dto = new DroitUtilisateurDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
        if(this.droit && item.getDroit()!=null) {
            dto.setDroit(droitConverter.toDto(item.getDroit())) ;
        }
        if(this.utilisateur && item.getUtilisateur()!=null) {
            dto.setUtilisateur(utilisateurConverter.toDto(item.getUtilisateur())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.droit = value;
        this.utilisateur = value;
    }


    public UtilisateurConverter getUtilisateurConverter(){
        return this.utilisateurConverter;
    }
    public void setUtilisateurConverter(UtilisateurConverter utilisateurConverter ){
        this.utilisateurConverter = utilisateurConverter;
    }
    public DroitConverter getDroitConverter(){
        return this.droitConverter;
    }
    public void setDroitConverter(DroitConverter droitConverter ){
        this.droitConverter = droitConverter;
    }
    public boolean  isDroit(){
        return this.droit;
    }
    public void  setDroit(boolean droit){
        this.droit = droit;
    }
    public boolean  isUtilisateur(){
        return this.utilisateur;
    }
    public void  setUtilisateur(boolean utilisateur){
        this.utilisateur = utilisateur;
    }
}
