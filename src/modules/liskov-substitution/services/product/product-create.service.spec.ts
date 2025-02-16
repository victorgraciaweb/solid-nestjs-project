import { Test, TestingModule } from '@nestjs/testing';
import { ProductCreateService } from './product-create.service';

describe('ProductCreateService', () => {
  let service: ProductCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCreateService],
    }).compile();

    service = module.get<ProductCreateService>(ProductCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
