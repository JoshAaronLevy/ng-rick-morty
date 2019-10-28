import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const apiUrl = `${environment.apiUrl}/character`;

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  characters: any;

  constructor(
    private http: HttpClient
  ) {}

  // getCharacters(): Observable<any> {
  //   return this.http.get(apiUrl)
  //     .pipe(
  //       map(res => {
  //         return res;
  //       })
  //     );
  // }

  getCharacters() {
    return this.http.get(apiUrl)
      .toPromise()
      .then(data => {
        return data;
      })
      .catch(error => {
        return error;
      });
  }

  getCharacter(
    id: number
  ): Observable<any> {
    const mapObj = {
      '{id}': id
    };
    const url = apiUrl.replace(/{id}/gi, function(matched) {
      return mapObj[matched];
    });
    return this.http.get(url)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  addCharacter(
    params: HttpParams = new HttpParams()
  ) {
    const url = environment.apiUrl;
    return this.http.post<any>(url, params)
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      );
  }

  updateCharacter(
    params: HttpParams = new HttpParams(),
    id: any
  ) {
    const mapObj = {
      '{id}': id
    };
    const url = apiUrl.replace(/{id}/gi, function (matched) {
      return mapObj[matched];
    });
    return this.http.put<any>(url, params)
      .toPromise()
      .then(res => {
        return res;
      });
  }
}
