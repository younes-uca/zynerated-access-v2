package  ma.zs.easystock.ws.converter.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;




import ma.zs.easystock.zynerator.util.StringUtil;
import ma.zs.easystock.zynerator.converter.AbstractConverter;
import ma.zs.easystock.zynerator.util.DateUtil;
import ma.zs.easystock.bean.core.stock.Droit;
import ma.zs.easystock.ws.dto.stock.DroitDto;

@Component
public class DroitConverter extends AbstractConverter<Droit, DroitDto> {


    public  DroitConverter(){//){
        super(Droit.class, DroitDto.class);
    }

    @Override
    public Droit toItem(DroitDto dto) {
        if (dto == null) {
            return null;
        } else {
        Droit item = new Droit();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getAuthority()))
                item.setAuthority(dto.getAuthority());



        return item;
        }
    }

    @Override
    public DroitDto toDto(Droit item) {
        if (item == null) {
            return null;
        } else {
            DroitDto dto = new DroitDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getAuthority()))
                dto.setAuthority(item.getAuthority());


        return dto;
        }
    }


    public void initObject(boolean value) {
    }


}
