package ma.zs.easystock.zynerator.security.ws.facade;

import io.swagger.v3.oas.annotations.Operation;

import ma.zs.easystock.zynerator.security.bean.User;
import ma.zs.easystock.zynerator.security.dao.criteria.core.UserCriteria;
import ma.zs.easystock.zynerator.security.service.facade.UserAdminService;
import ma.zs.easystock.zynerator.security.ws.converter.UserConverter;
import ma.zs.easystock.zynerator.security.ws.dto.UserDto;
import ma.zs.easystock.zynerator.controller.AbstractController;
import ma.zs.easystock.zynerator.util.PaginatedList;


import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


import org.springframework.web.multipart.MultipartFile;
import ma.zs.easystock.zynerator.dto.FileTempDto;

@RestController
@RequestMapping("/api/admin/user/")
public class UserRestAdmin  extends AbstractController<User, UserDto, UserCriteria, UserAdminService, UserConverter> {



    @Operation(summary = "upload one user")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple utilisateurs")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all utilisateurs")
    @GetMapping("")
    public ResponseEntity<List<UserDto>> findAll() throws Exception {
        return super.findAll();
    }

    @Operation(summary = "Finds an optimized list of all utilisateurs")
    @GetMapping("optimized")
    public ResponseEntity<List<UserDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @Operation(summary = "Finds a user by id")
    @GetMapping("id/{id}")
    public ResponseEntity<UserDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

    @Operation(summary = "Finds a user by email")
    @GetMapping("email/{email}")
    public ResponseEntity<UserDto> findByEmail(@PathVariable String email, String[] includes, String[] excludes) throws Exception {
        return super.findByReferenceEntity(new User(email), includes, excludes);
    }

    @Operation(summary = "Saves the specified  user")
    @PostMapping("")
    public ResponseEntity<UserDto> save(@RequestBody UserDto dto) throws Exception {
        ResponseEntity<UserDto> save = super.save(dto);
        return save;
    }

    @Operation(summary = "Updates the specified  user")
    @PutMapping("")
    public ResponseEntity<UserDto> update(@RequestBody UserDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of user")
    @PostMapping("multiple")
    public ResponseEntity<List<UserDto>> delete(@RequestBody List<UserDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified user")
    @DeleteMapping("")
    public ResponseEntity<UserDto> delete(@RequestBody UserDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified user")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple utilisateurs by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "Finds a user and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<UserDto> findWithAssociatedLists(@PathVariable Long id) {
        return super.findWithAssociatedLists(id);
    }

    @Operation(summary = "Finds utilisateurs by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<UserDto>> findByCriteria(@RequestBody UserCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated utilisateurs by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody UserCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports utilisateurs by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody UserCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets user data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody UserCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }
    @GetMapping("/username/{username}")
    public User findByUsernameWithRoles(@PathVariable String username) {
        return service.findByUsernameWithRoles(username);
    }

    @DeleteMapping("/username/{username}")
    public int deleteByUsername(@PathVariable String username) {
        return service.deleteByUsername(username);
    }
    public ResponseEntity<UserDto> findByUsername(String username) {
        User user = service.findByUsername(username);
        UserDto userDto = converter.toDto(user);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }




    public UserRestAdmin (UserAdminService service, UserConverter converter) {
        super(service, converter);
    }




}
