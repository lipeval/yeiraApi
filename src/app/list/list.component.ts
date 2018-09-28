import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  chars: Object[];
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.chars = this.config.getAllUsers();
    console.log(this.chars)
  }

 

}
