import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');

  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCFQpR-hsYFzBI2CY4sHFXhcGxP6C1GouzUI7Uae-4MWx0xKZlkiQJ4NeStP8CJMxMe4pMPPwcSsIX2aWM'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCFQpR-hsYFzBI2CY4sHFXhcGxP6C1GouzUI7Uae-4MWx0xKZlkiQJ4NeStP8CJMxMe4pMPPwcSsIX2aWM'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe(map(data => data['artists'].items));
  }
}
