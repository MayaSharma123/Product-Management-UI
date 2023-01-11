import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';


import { MerchentLoginService } from './merchent-login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('MerchentLoginService', () => {
  let service: MerchentLoginService;
  let http:HttpClient;
  let httpController:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[MerchentLoginService],
    });
    service = TestBed.inject(MerchentLoginService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);

  });
  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeDefined();   
  });

  it('call login()', () => {
    const testData = true;
    const expectedURL = `/login`;
    const inputData = {
      id: 1,
      fname: 'Himanshu',
      lname: 'Singh',
      email: 'Himanshu@gmail.com',
      password: '123456',
    };

    service
       .login(inputData).subscribe((data: any)=>expect(data).toEqual(testData));
     // .login(inputData).subscribe((data: any) => expect(data).toEqual(testData));

    const req = httpController.expectOne('http://localhost:8080/login');

    expect(req.request.method).toEqual('POST');

    req.flush(testData);
  });

  it('call login() failed', () => {
    const expectedURL = `/login`;
    const emsg = 'status 500 error';
    const inputData = {
      id: 1,
      fname: 'Himanshu',
      lname: 'Singh',
      email: 'Himanshu@gmail.com',
      password: '123456',
    };

    service.login(inputData).subscribe(
      () => fail('should have failed with the 500 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpController.expectOne('http://localhost:8080/login');

    expect(req.request.method).toEqual('POST');

    req.flush(emsg, { status: 500, statusText: 'Server Error' });
  });

});