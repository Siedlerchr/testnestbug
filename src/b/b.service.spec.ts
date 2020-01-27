import { Test, TestingModule } from '@nestjs/testing';
import { BService } from './b.service';
import { HttpService, HttpModule } from '@nestjs/common';

describe('BService', () => {
  let service: BService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [BService],
    }).compile();

    service = module.get<BService>(BService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
