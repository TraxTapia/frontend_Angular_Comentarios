import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comentario } from '../interfaces/Comentario';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  private _UrlMyApi = 'https://localhost:7135/';
  private _Api = 'api/Comentario/';
  constructor(private http: HttpClient) {}
  getListComentario(): Observable<any> {
    return this.http.get(this._UrlMyApi + this._Api);
  }
  deleteRegister(id: any): Observable<any> {
    return this.http.delete(this._UrlMyApi + this._Api + id);
  }
  saveComentario(comentario: comentario): Observable<any> {
    return this.http.post(this._UrlMyApi + this._Api, comentario);
  }
}
