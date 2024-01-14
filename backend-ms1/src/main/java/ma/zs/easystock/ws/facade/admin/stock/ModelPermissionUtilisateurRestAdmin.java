package  ma.zs.easystock.ws.facade.admin.stock;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.zs.easystock.bean.core.stock.ModelPermissionUtilisateur;
import ma.zs.easystock.dao.criteria.core.stock.ModelPermissionUtilisateurCriteria;
import ma.zs.easystock.service.facade.admin.stock.ModelPermissionUtilisateurAdminService;
import ma.zs.easystock.ws.converter.stock.ModelPermissionUtilisateurConverter;
import ma.zs.easystock.ws.dto.stock.ModelPermissionUtilisateurDto;
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
@RequestMapping("/api/admin/modelPermissionUtilisateur/")
public class ModelPermissionUtilisateurRestAdmin  extends AbstractController<ModelPermissionUtilisateur, ModelPermissionUtilisateurDto, ModelPermissionUtilisateurCriteria, ModelPermissionUtilisateurAdminService, ModelPermissionUtilisateurConverter> {



    @Operation(summary = "upload one modelPermissionUtilisateur")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple modelPermissionUtilisateurs")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all modelPermissionUtilisateurs")
    @GetMapping("")
    public ResponseEntity<List<ModelPermissionUtilisateurDto>> findAll() throws Exception {
        return super.findAll();
    }


    @Operation(summary = "Finds a modelPermissionUtilisateur by id")
    @GetMapping("id/{id}")
    public ResponseEntity<ModelPermissionUtilisateurDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }


    @Operation(summary = "Saves the specified  modelPermissionUtilisateur")
    @PostMapping("")
    public ResponseEntity<ModelPermissionUtilisateurDto> save(@RequestBody ModelPermissionUtilisateurDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  modelPermissionUtilisateur")
    @PutMapping("")
    public ResponseEntity<ModelPermissionUtilisateurDto> update(@RequestBody ModelPermissionUtilisateurDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of modelPermissionUtilisateur")
    @PostMapping("multiple")
    public ResponseEntity<List<ModelPermissionUtilisateurDto>> delete(@RequestBody List<ModelPermissionUtilisateurDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified modelPermissionUtilisateur")
    @DeleteMapping("")
    public ResponseEntity<ModelPermissionUtilisateurDto> delete(@RequestBody ModelPermissionUtilisateurDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified modelPermissionUtilisateur")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple modelPermissionUtilisateurs by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "find by actionPermission id")
    @GetMapping("actionPermission/id/{id}")
    public List<ModelPermissionUtilisateurDto> findByActionPermissionId(@PathVariable Long id){
        return findDtos(service.findByActionPermissionId(id));
    }
    @Operation(summary = "delete by actionPermission id")
    @DeleteMapping("actionPermission/id/{id}")
    public int deleteByActionPermissionId(@PathVariable Long id){
        return service.deleteByActionPermissionId(id);
    }
    @Operation(summary = "find by modelPermission id")
    @GetMapping("modelPermission/id/{id}")
    public List<ModelPermissionUtilisateurDto> findByModelPermissionId(@PathVariable Long id){
        return findDtos(service.findByModelPermissionId(id));
    }
    @Operation(summary = "delete by modelPermission id")
    @DeleteMapping("modelPermission/id/{id}")
    public int deleteByModelPermissionId(@PathVariable Long id){
        return service.deleteByModelPermissionId(id);
    }
    @Operation(summary = "find by utilisateur id")
    @GetMapping("utilisateur/id/{id}")
    public List<ModelPermissionUtilisateurDto> findByUtilisateurId(@PathVariable Long id){
        return findDtos(service.findByUtilisateurId(id));
    }
    @Operation(summary = "delete by utilisateur id")
    @DeleteMapping("utilisateur/id/{id}")
    public int deleteByUtilisateurId(@PathVariable Long id){
        return service.deleteByUtilisateurId(id);
    }
    @Operation(summary = "Finds modelPermissionUtilisateurs by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<ModelPermissionUtilisateurDto>> findByCriteria(@RequestBody ModelPermissionUtilisateurCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated modelPermissionUtilisateurs by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody ModelPermissionUtilisateurCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports modelPermissionUtilisateurs by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody ModelPermissionUtilisateurCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets modelPermissionUtilisateur data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody ModelPermissionUtilisateurCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public ModelPermissionUtilisateurRestAdmin (ModelPermissionUtilisateurAdminService service, ModelPermissionUtilisateurConverter converter) {
        super(service, converter);
    }




}
