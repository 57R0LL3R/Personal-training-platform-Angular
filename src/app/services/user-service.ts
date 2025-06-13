import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getProfiles():Observable<User[]>{
    return this.http.get<User[]>(enviroment.endPoint+'Users')
  }

  getProfile(id:number):Observable<User[]>{
    return this.http.get<User[]>(enviroment.endPoint+'Users/'+id)
  }
  addProfile(model:User):Observable<User>{
    return this.http.post<User>(enviroment.endPoint+'Users',model)
  }
  updateProfile(model:User,id:number):Observable<User>{
    return this.http.put<User>(enviroment.endPoint+'Users/'+id,model)
  }
}
