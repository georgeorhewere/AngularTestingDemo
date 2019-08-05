import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { HttpHeaders } from '@angular/common/http';
import {IConnectionService} from "./iconnection";


//const PROTOCOL = 'https';
//const PORT = 44338;

@Injectable({
  providedIn: 'root'
})
export class StoreDBService implements IConnectionService {

  public baseUrl: string;
  public PROTOCOL = 'https';
  public PORT = 44338;
  /*auth_token: string;*/

  constructor(private http: HttpClient){
    this.baseUrl = `${this.PROTOCOL}://${location.hostname}:${this.PORT}/api/`;
    console.log(this.baseUrl);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  addUser(user: User): Observable<User>
  {
    console.log(user)
    return this.http.post<User>(this.baseUrl + 'users', user);
  }
  getUser(id: number): Observable<User>
  {
    console.log(id)
    return this.http.get<User>(this.baseUrl + 'users/'+ id);
  }

  deleteUser(id: number)
  {
    console.log(id)
    return this.http.delete<User>(this.baseUrl + 'users/'+  id);
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) };
  }
}
