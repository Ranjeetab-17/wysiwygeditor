import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private _http: HttpClient) { }

  getContent(): Observable<any> {
    return this._http.get(`${environment.apiUrl}/api/editor`);
  }
}
