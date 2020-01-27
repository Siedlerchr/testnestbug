import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class BService {

    constructor(private readonly httpService: HttpService) {

    }

}
