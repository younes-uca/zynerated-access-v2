package  ma.zs.easystock.ws.facade.admin.stock;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.zs.easystock.bean.core.stock.DroitUtilisateur;
import ma.zs.easystock.dao.criteria.core.stock.DroitUtilisateurCriteria;
import ma.zs.easystock.service.facade.admin.stock.DroitUtilisateurAdminService;
import ma.zs.easystock.ws.converter.stock.DroitUtilisateurConverter;
import ma.zs.easystock.ws.dto.stock.DroitUtilisateurDto;
import ma.zs.easystock.zynerator.controller.AbstractController;
import ma.zs.easystock.zynerator.dto.AuditEntityDto;
import ma.zs.easystock.zynerator.util.PaginatedList;


import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.zs.easystock.zynerator.process.Result;


import org.springframework.web.multipart.MultipartFile;
import ma.zs.easystock.zynerator.dto.FileTempDto;

@RestController
@RequestMapping("/api/admin/droitUtilisateur/")
public class DroitUtilisateurRestAdmin  extends AbstractController<DroitUtilisateur, DroitUtilisateurDto, DroitUtilisateurCriteria, DroitUtilisateurAdminService, DroitUtilisateurConverter> {



    @Operation(summary = "upload one droitUtilisateur")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple droitUtilisateurs")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all droitUtilisateurs")
    @GetMapping("")
    public ResponseEntity<List<DroitUtilisateurDto>> findAll() throws Exception {
        return super.findAll();
    }


    @Operation(summary = "Finds a droitUtilisateur by id")
    @GetMapping("id/{id}")
    public ResponseEntity<DroitUtilisateurDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }


    @Operation(summary = "Saves the specified  droitUtilisateur")
    @PostMapping("")
    public ResponseEntity<DroitUtilisateurDto> save(@RequestBody DroitUtilisateurDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  droitUtilisateur")
    @PutMapping("")
    public ResponseEntity<DroitUtilisateurDto> update(@RequestBody DroitUtilisateurDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of droitUtilisateur")
    @PostMapping("multiple")
    public ResponseEntity<List<DroitUtilisateurDto>> delete(@RequestBody List<DroitUtilisateurDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified droitUtilisateur")
    @DeleteMapping("")
    public ResponseEntity<DroitUtilisateurDto> delete(@RequestBody DroitUtilisateurDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified droitUtilisateur")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple droitUtilisateurs by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "find by droit id")
    @GetMapping("droit/id/{id}")
    public List<DroitUtilisateurDto> findByDroitId(@PathVariable Long id){
        return findDtos(service.findByDroitId(id));
    }
    @Operation(summary = "delete by droit id")
    @DeleteMapping("droit/id/{id}")
    public int deleteByDroitId(@PathVariable Long id){
        return service.deleteByDroitId(id);
    }
    @Operation(summary = "find by utilisateur id")
    @GetMapping("utilisateur/id/{id}")
    public List<DroitUtilisateurDto> findByUtilisateurId(@PathVariable Long id){
        return findDtos(service.findByUtilisateurId(id));
    }
    @Operation(summary = "delete by utilisateur id")
    @DeleteMapping("utilisateur/id/{id}")
    public int deleteByUtilisateurId(@PathVariable Long id){
        return service.deleteByUtilisateurId(id);
    }
    @Operation(summary = "Finds droitUtilisateurs by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<DroitUtilisateurDto>> findByCriteria(@RequestBody DroitUtilisateurCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated droitUtilisateurs by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody DroitUtilisateurCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports droitUtilisateurs by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody DroitUtilisateurCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets droitUtilisateur data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody DroitUtilisateurCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public DroitUtilisateurRestAdmin (DroitUtilisateurAdminService service, DroitUtilisateurConverter converter) {
        super(service, converter);
    }




}
