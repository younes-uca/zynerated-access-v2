package ma.zs.easystock.service.impl.admin.stock;


import ma.zs.easystock.bean.core.stock.Utilisateur;
import ma.zs.easystock.dao.criteria.core.stock.UtilisateurCriteria;
import ma.zs.easystock.dao.facade.core.stock.UtilisateurDao;
import ma.zs.easystock.dao.specification.core.stock.UtilisateurSpecification;
import ma.zs.easystock.service.facade.admin.stock.UtilisateurAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import ma.zs.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.zs.easystock.service.facade.admin.stock.DroitUtilisateurAdminService ;
import ma.zs.easystock.bean.core.stock.DroitUtilisateur ;
import ma.zs.easystock.service.facade.admin.stock.ModelPermissionUtilisateurAdminService ;
import ma.zs.easystock.bean.core.stock.ModelPermissionUtilisateur ;

import java.util.List;
@Service
public class UtilisateurAdminServiceImpl extends AbstractServiceImpl<Utilisateur, UtilisateurCriteria, UtilisateurDao> implements UtilisateurAdminService {


    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public Utilisateur create(Utilisateur t) {
    
        if (t.getModelPermissionUtilisateurs() != null) {
                t.getModelPermissionUtilisateurs().forEach(element-> {
                    element.setUtilisateur(t);
                    modelPermissionUtilisateurService.create(element);
            });
        }
        if (t.getDroitUtilisateurs() != null) {
                t.getDroitUtilisateurs().forEach(element-> {
                    element.setUtilisateur(t);
                    droitUtilisateurService.create(element);
            });
        }
        return t;

    }

    public Utilisateur findWithAssociatedLists(Long id){
        Utilisateur result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setModelPermissionUtilisateurs(modelPermissionUtilisateurService.findByUtilisateurId(id));
            result.setDroitUtilisateurs(droitUtilisateurService.findByUtilisateurId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        modelPermissionUtilisateurService.deleteByUtilisateurId(id);
        droitUtilisateurService.deleteByUtilisateurId(id);
    }


    public void updateWithAssociatedLists(Utilisateur utilisateur){
    if(utilisateur !=null && utilisateur.getId() != null){
            List<List<ModelPermissionUtilisateur>> resultModelPermissionUtilisateurs= modelPermissionUtilisateurService.getToBeSavedAndToBeDeleted(modelPermissionUtilisateurService.findByUtilisateurId(utilisateur.getId()),utilisateur.getModelPermissionUtilisateurs());
            modelPermissionUtilisateurService.delete(resultModelPermissionUtilisateurs.get(1));
            ListUtil.emptyIfNull(resultModelPermissionUtilisateurs.get(0)).forEach(e -> e.setUtilisateur(utilisateur));
            modelPermissionUtilisateurService.update(resultModelPermissionUtilisateurs.get(0),true);
            List<List<DroitUtilisateur>> resultDroitUtilisateurs= droitUtilisateurService.getToBeSavedAndToBeDeleted(droitUtilisateurService.findByUtilisateurId(utilisateur.getId()),utilisateur.getDroitUtilisateurs());
            droitUtilisateurService.delete(resultDroitUtilisateurs.get(1));
            ListUtil.emptyIfNull(resultDroitUtilisateurs.get(0)).forEach(e -> e.setUtilisateur(utilisateur));
            droitUtilisateurService.update(resultDroitUtilisateurs.get(0),true);
    }
    }



    public Utilisateur findByReferenceEntity(Utilisateur t){
        return  dao.findByEmail(t.getEmail());
    }


    public List<Utilisateur> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(Utilisateur.class, UtilisateurSpecification.class);
    }


    @Autowired
    private DroitUtilisateurAdminService droitUtilisateurService ;
    @Autowired
    private ModelPermissionUtilisateurAdminService modelPermissionUtilisateurService ;

    public UtilisateurAdminServiceImpl(UtilisateurDao dao) {
        super(dao);
    }

}
