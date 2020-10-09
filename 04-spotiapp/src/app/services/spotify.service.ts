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
      'Authorization': 'Bearer BQAdWte9YN_AAI16c6wPhyHSDUlUIGj1VqadsEgsDF8rJaRidanuW2Bv6QvFawbyuucIiw1xcS6sJNC8u7s'
    })
    
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
