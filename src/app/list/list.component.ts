import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: Object[];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.config.getUsers()
    .subscribe(users =>{
      this.users = Array.of(JSON.stringify(users));
      console.log(users)
    })
  }

 

}
