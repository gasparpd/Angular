import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');

  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD1uhBL5_Ye1DeiFI0QM3Yl7U5wCUnXnT-q7plYtmMtbzvtMrYENvXneJ5GWad080q9YR6QpmngwvYldSE'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
