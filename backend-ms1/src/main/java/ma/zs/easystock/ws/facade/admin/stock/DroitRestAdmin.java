package  ma.zs.easystock.ws.facade.admin.stock;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.zs.easystock.bean.core.stock.Droit;
import ma.zs.easystock.dao.criteria.core.stock.DroitCriteria;
import ma.zs.easystock.service.facade.admin.stock.DroitAdminService;
import ma.zs.easystock.ws.converter.stock.DroitConverter;
import ma.zs.easystock.ws.dto.stock.DroitDto;
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
@RequestMapping("/api/admin/droit/")
public class DroitRestAdmin  extends AbstractController<Droit, DroitDto, DroitCriteria, DroitAdminService, DroitConverter> {



    @Operation(summary = "upload one droit")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple droits")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all droits")
    @GetMapping("")
    public ResponseEntity<List<DroitDto>> findAll() throws Exception {
        return super.findAll();
    }

    @Operation(summary = "Finds an optimized list of all droits")
    @GetMapping("optimized")
    public ResponseEntity<List<DroitDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @Operation(summary = "Finds a droit by id")
    @GetMapping("id/{id}")
    public ResponseEntity<DroitDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

    @Operation(summary = "Finds a droit by authority")
    @GetMapping("authority/{authority}")
    public ResponseEntity<DroitDto> findByAuthority(@PathVariable String authority, String[] includes, String[] excludes) throws Exception {
        return super.findByReferenceEntity(new Droit(authority), includes, excludes);
    }

    @Operation(summary = "Saves the specified  droit")
    @PostMapping("")
    public ResponseEntity<DroitDto> save(@RequestBody DroitDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  droit")
    @PutMapping("")
    public ResponseEntity<DroitDto> update(@RequestBody DroitDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of droit")
    @PostMapping("multiple")
    public ResponseEntity<List<DroitDto>> delete(@RequestBody List<DroitDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified droit")
    @DeleteMapping("")
    public ResponseEntity<DroitDto> delete(@RequestBody DroitDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified droit")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple droits by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "Finds droits by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<DroitDto>> findByCriteria(@RequestBody DroitCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated droits by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody DroitCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports droits by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody DroitCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets droit data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody DroitCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public DroitRestAdmin (DroitAdminService service, DroitConverter converter) {
        super(service, converter);
    }




}
