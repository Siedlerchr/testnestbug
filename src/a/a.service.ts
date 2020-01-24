import { Injectable, HttpService } from '@nestjs/common';
import { BService } from '../b/b.service';

@Injectable()
export class AService {

    constructor(private readonly httpService: HttpService, private readonly bservice: BService) {
        
    }
}
