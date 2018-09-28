import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'

let dock: Object[];

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

 

  listUrl = 'https://v10dev.yeira.training/api/v1/users?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cHM6Ly92MTBkZXYueWVpcmEudHJhaW5pbmcvYXBpL3YxL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTUzODE1MDg4MSwiZXhwIjoxNTM4MTU0NDgxLCJuYmYiOjE1MzgxNTA4ODEsImp0aSI6IkVYZlk3dFdMcGtIZjFuQ3cifQ.SzXWRQd1WvPFPREiF9eSikPKbFNxJA2_wX58R4BE8BM'
 
  constructor(private http: HttpClient) { }



  getAllUsers(){
    let usersArr: Object[] = [];
    this.http.get(this.listUrl)
      .toPromise()
      .then(response => {
        for(let i = 0; i< 10; i++){
          usersArr.push(response.results[i])
        }
        // peopleArr.push(response.results)
      })
      console.log(usersArr)
      return usersArr;
  }

 

}




