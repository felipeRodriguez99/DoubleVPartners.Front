import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private options: any;

  constructor(private http: HttpClient) { }


  private headersAuthorization = (): HttpHeaders => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    };

    return new HttpHeaders(headers);
  };

  public GetPersons(model: any): Observable<any> {
    this.options = { headers: this.headersAuthorization(), params: model};
    return this.http
      .get('http://localhost:5226/api/User/GetUserLogin',this.options)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // Handle the error here
          return throwError(err.message); // Rethrow it back to component
        })
      );
  }

}
