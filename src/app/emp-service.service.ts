import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Edata } from './Edata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private httpc:HttpClient) { }
  public getPosts():Observable<Edata[]>{
    return this.httpc.get<Edata[]>
    ('http://dummy.restapiexample.com/api/v1/employees');
  
  }
}
