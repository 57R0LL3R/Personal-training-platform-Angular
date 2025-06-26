import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private http:HttpClient) { }
  login(model:User):Observable<Response>{
    return this.http.post<Response>(enviroment.endPoint+'login',model)
  }
}
