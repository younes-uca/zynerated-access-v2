import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PermissionDto} from './Permission.model';

export class ModelPermissionDto extends BaseDto{

    public reference: string;

    public libelle: string;

     public permissions: Array<PermissionDto>;
    

    constructor() {
        super();

        this.reference = '';
        this.libelle = '';
        this.permissions = new Array<PermissionDto>();

        }

}
