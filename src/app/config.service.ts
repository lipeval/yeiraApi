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

 

  listUrl = 'https://v10dev.yeira.training/api/v1/users?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cHM6Ly92MTBkZXYueWVpcmEudHJhaW5pbmcvYXBpL3YxL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTUzODI3MTk4NiwiZXhwIjoxNTM4Mjc1NTg2LCJuYmYiOjE1MzgyNzE5ODYsImp0aSI6Ik5jYXFFZG1hZ09sM2ZCVEEifQ.3PNzZR4o1dchNixwaj4Xl-OGXQK9Y73JK3JQtoFDI50'
 
  constructor(private http: Http) { }

  getUsers(): Observable<any>{
    return this.http.get(this.listUrl)
    .pipe(map((res:Response)=>res.json()))
    
    
  }

 

}




