import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AService } from './a/a.service';
import { BService } from './b/b.service';
import { GenericFwhttpService } from './generic-fwhttp/generic-fwhttp.service';
import { AModdule } from './a/a.module';

@Module({
  imports: [AModdule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
