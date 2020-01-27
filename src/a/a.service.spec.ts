import { Test, TestingModule } from '@nestjs/testing';
import { AService } from './a.service';
import { HttpModule } from '@nestjs/common';
import { BModule } from '../b/b.module';
import { GenericFwhttpServiceModule } from '../generic-fwhttp/generic-fwhttp.module';

describe('AService', () => {
  let service: AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, BModule, GenericFwhttpServiceModule],
      providers: [AService],
    }).compile();

    service = module.get<AService>(AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
