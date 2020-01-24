import { Module, HttpModule } from "@nestjs/common";
import { BService } from "./b.service";

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [BService],
    exports: [BService]
})
export class BModule { }
