import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseURL: string = "http://localhost:8080/user"
  constructor(private http: HttpClient) { }
  getuser(): Observable<user>
  {
    return this.http.get<user>(this.baseURL);
  }
  getUserById(id: number): Observable<user>
  {
    return this.http.get<user>(`${this.baseURL}/${id}`);
  }
}
