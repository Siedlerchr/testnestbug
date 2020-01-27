import { Module, HttpModule } from "@nestjs/common";
import { AService } from "./a.service";
import { AController } from "./a.controller";

@Module({
    imports: [HttpModule],
    controllers: [AController],
    providers: [AService],
    exports: [AService]
})
export class AModdule { }
