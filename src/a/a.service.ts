import { Injectable, HttpService } from '@nestjs/common';
import { BService } from '../b/b.service';
import { GenericFwhttpService } from '../generic-fwhttp/generic-fwhttp.service';
import { ResourceA } from '../model/resource-a';
import { ResourceB } from '../model/resource-b';

@Injectable()
export class AService {
    insertMentionsIntoFiware() {
    }

    constructor(private readonly httpService: HttpService,
        private readonly bservice: BService,
        private readonly genericA: GenericFwhttpService<ResourceA>,
        private readonly genericB: GenericFwhttpService<ResourceB>
    ) { }
}
