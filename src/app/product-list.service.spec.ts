import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ProductListService } from './product-list.service';
import { Product } from './product';
import { of } from 'rxjs';

describe('ProductListService', () => {
  let mockHttpClient: HttpClient;
  let mockMessageService;
  let service: ProductListService;
  let httpController: HttpTestingController;
  let httpClient :jasmine.SpyObj<HttpClient>;
 
  beforeEach(() => {
    service =new ProductListService(mockHttpClient); 
     
   });
   
   it('It should retrive all the list of products', () => {
    let mockResponse=[
      {
        id : 1,
        name : 'Sony',
        description :'Headphone',
        price : 500,
      },
      {
        id : 2,
        name : 'Motorola',
        description :'Mobile',
        price : 50000,
      },
      {
        id : 3 ,
        name : 'Samsung',
        description: 'Mobile',
        price : 50000,
      }
      
        ];
        httpClient.get.and.returnValue(of(Product));
        service.getProductList().subscribe({
          next :(Product)=>{
            expect(Product).toEqual(Product);
          },
          error:()=>{},
        });
        expect(httpClient.get).toHaveBeenCalledTimes(1);
        
  });
});