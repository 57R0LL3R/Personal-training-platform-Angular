import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';
import { enviroment } from '../enviroment/enviroment'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  getProfiles():Observable<Profile[]>{
    return this.http.get<Profile[]>(enviroment.endPoint+'Profiles')
  }

  getProfile(id:number):Observable<Profile[]>{
    return this.http.get<Profile[]>(enviroment.endPoint+'Profiles/'+id)
  }
  addProfile(model:Profile):Observable<Profile>{
    return this.http.post<Profile>(enviroment.endPoint+'Profiles',model)
  }
}
