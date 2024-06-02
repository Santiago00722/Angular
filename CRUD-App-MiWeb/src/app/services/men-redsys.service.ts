import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenRedsysService {

  constructor(private _http: HttpClient) { }

  getRedsysList(): Observable<any> {
    //return this._http.get('http://192.168.1.145:3000/MenRedsys');
    return this._http.get('http://192.168.1.145:3000/Mensaje');
  }

  getRedsys(id: number): Observable<any> {
    //return this._http.get('http://192.168.1.145:3000/MenRedsys?id=' + id);
    return this._http.get('http://192.168.1.145:3000/Mensaje?id=' + id);
  }
}
