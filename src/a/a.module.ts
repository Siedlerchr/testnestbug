import { Module, HttpModule } from "@nestjs/common";
import { AService } from "./a.service";

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [AService],
    exports: [AService]
})
export class AModdule { }
