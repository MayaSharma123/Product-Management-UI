import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeService } from '../welcome.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
