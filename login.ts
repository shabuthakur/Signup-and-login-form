import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
 email:any;
 pwd:any;
 
  constructor() { }
  onSubmit(loginform:any){
    console.log(loginform);
  }

  ngOnInit(): void {
  }


}
