import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  urlPaises: string = "https://restcountries.eu/rest/v2/lang/es";

  constructor(private http: HttpClient) { }

  getPaises() {
    return this.http.get(this.urlPaises)
      .pipe(
        map((resp: any[]) =>
          resp.map(pais => ({ nombre: pais.name, codigo: pais.alpha3Code }))
        )
      );
  }
}
