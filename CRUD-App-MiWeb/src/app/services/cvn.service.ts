import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvnService {

  constructor(private _http: HttpClient) { }

  addCvn(data: any): Observable<any> {
    return this._http.post('http://192.168.1.145:3000/cvn', data);
  }

  updateCvn(id: number, data: any): Observable<any> {
    return this._http.put('http://192.168.1.145:3000/cvn/' + id, data);
  }

  getCvnList(): Observable<any> {
    return this._http.get('http://192.168.1.145:3000/cvn');
  
  }

  getCvn(id: number): Observable<any> {
    return this._http.get('http://192.168.1.145:3000/cvn?id=' + id);
  
  }

  deleteCvn(id: number): Observable<any> { 
    //console.log(id);   
    return this._http.delete('http://192.168.1.145:3000/cvn/' + id );    
  }
}
