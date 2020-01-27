import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GenericFwhttpService } from './generic-fwhttp.service';

@Module({
    imports: [HttpModule, ConfigModule.forRoot()],
    controllers: [],
    providers: [GenericFwhttpService],
    exports: [GenericFwhttpService]
})
export class GenericFwhttpServiceModule { }
