import { Module, HttpModule } from "@nestjs/common";
import { AService } from "./a.service";
import { AController } from "./a.controller";
import { BModule } from "../b/b.module";
import { GenericFwhttpServiceModule } from "../generic-fwhttp/generic-fwhttp.module";

@Module({
    imports: [HttpModule, BModule, GenericFwhttpServiceModule],
    controllers: [AController],
    providers: [AService],
    exports: [AService]
})
export class AModdule { }
