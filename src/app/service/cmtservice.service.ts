import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cmt } from '../model/Cmt';

@Injectable({
  providedIn: 'root'
})
export class CmtserviceService {
  baseUrl: string= "http://localhost:8080/cmt"
  constructor(private http: HttpClient) { }
  getCmt(): Observable<Cmt>{
    return this.http.get<Cmt>(this.baseUrl);
  }
  getCmtbyBookid(bookid: number): Observable<any>
  {
    return this.http.get<Cmt>(`${this.baseUrl}/${bookid}`);
  }
  addConment(Cmt: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/`, Cmt);
  }
}
