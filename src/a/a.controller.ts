import { Controller, Post, Get } from '@nestjs/common';
import { AService } from './a.service';


@Controller('a')
export class AController {

    constructor(private readonly aService: AService) { }


    @Get('test')
    public testTheSystem() {
        return "Test";
    }



    @Get()
    public insertMentionsIntoFiware() {
        this.aService.insertMentionsIntoFiware();
    }

}
