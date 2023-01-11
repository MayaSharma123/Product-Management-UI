import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Merchent } from './merchent';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MerchentLoginService {
                  
  constructor(private http: HttpClient) {}

  public login(merchant : Merchent):Observable<any> {
    return this.http.post<any>("http://localhost:8080/login", merchant);
   
  }
}







