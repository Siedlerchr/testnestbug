import { Test, TestingModule } from '@nestjs/testing';
import { GenericFwhttpService } from './generic-fwhttp.service';

describe('GenericFwhttpService', () => {
  let service: GenericFwhttpService<string>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenericFwhttpService],
    }).compile();

    service = module.get<GenericFwhttpService<string>>(GenericFwhttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
