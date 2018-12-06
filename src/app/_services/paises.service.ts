
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { producto } from '../Components/producto/producto';


@Injectable()
export class PaisesService {

  private apiURL = "https://restcountries.eu/rest/v2/all";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getPersonas(): Observable<producto[]> {
    return this.http.get<producto[]>(this.apiURL);
  }

  getPersona(personaId: string): Observable<producto> {
    let params = new HttpParams().set('incluirDirecciones', "true");
    return this.http.get<producto>(this.apiURL + '/' + personaId, {params: params});
  }

  createPersona(persona: producto): Observable<producto> {
    return this.http.post<producto>(this.apiURL, persona);
  }

  updatePersona(persona: producto): Observable<producto> {
    return this.http.put<producto>(this.apiURL + "/" + persona.id.toString(), persona);
  }

  deletePersona(personaId: string): Observable<producto> {
    return this.http.delete<producto>(this.apiURL + "/" + personaId);
  }
}
