import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarvellousService {
   apiUrl = 'http://localhost:5200';

  constructor(private http:HttpClient) { }

  getbatches():Observable<any>{
   return  this.http.get<any>(`${this.apiUrl}/getbatches`)
  }
}
