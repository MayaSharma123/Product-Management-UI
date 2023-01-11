import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Merchent } from '../merchent';

import { MerchentLoginService } from '../merchent-login.service';


@Component({
  selector: 'app-merchent-login',
  templateUrl: './merchent-login.component.html',
  styleUrls: ['./merchent-login.component.css']
})
export class MerchentLoginComponent  {
 
  merchent =new Merchent();
  msg='';
 
constructor(private service:MerchentLoginService, private router :Router){}
ngOnInit() {
      
}
 loginMerchant() {
   this.service.login(this.merchent).subscribe(
    data => 
    {console.log("response received");
    this.router.navigate(['weclome'])
  },
    error => {
      console.log("exception occured");
      this.msg="Bad Credentials.";
    }
  );
}
}