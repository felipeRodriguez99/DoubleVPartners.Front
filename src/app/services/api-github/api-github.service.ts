import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {


  constructor(private http: HttpClient) {

  }

  public GetUserGithub(serach: string): Observable<any> {
    // this.options = { headers: this.headersAuthorization()};
    return this.http
      .get(`http://api.github.com/search/users?q=${serach}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // Handle the error here
          return throwError(err.message); // Rethrow it back to component
        })
      );
  }

  public GetPersonsFollowers(url: string): Observable<any> {
    // this.options = { headers: this.headersAuthorization()};
    return this.http
      .get(url)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // Handle the error here
          return throwError(err.message); // Rethrow it back to component
        })
      );
  }
}
