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

 

  listUrl = 'https://v10dev.yeira.training/api/v1/users?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cHM6Ly92MTBkZXYueWVpcmEudHJhaW5pbmcvYXBpL3YxL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTUzODM1NzM1MCwiZXhwIjoxNTM4MzYwOTUwLCJuYmYiOjE1MzgzNTczNTAsImp0aSI6Inh2U00zNFhCY3g5WWlwTkgifQ.VNpHv1a2uc2khrFlQZPO1l5EBpzzysv9r05_aVrOqWQ'
 
  constructor(private http: Http) { }

  getUsers(): Observable<any>{
    return this.http.get(this.listUrl)
    .pipe(map((res:Response)=>res.json()))
    
    
  }

 

}




