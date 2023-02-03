import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private options: any;

  constructor(private http: HttpClient) {

  }

  private headersAuthorization = (): HttpHeaders => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    };

    return new HttpHeaders(headers);
  };

  public RegisterPerson(model: any): Observable<any> {
    this.options = { headers: this.headersAuthorization()};
    return this.http
      .post('http://localhost:5226/api/Person/CreatePerson',JSON.stringify(model),this.options)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('error',err);
          // Handle the error here
          return throwError(err.message); // Rethrow it back to component
        })
      );
  }

  public GetPersons(): Observable<any> {
    this.options = { headers: this.headersAuthorization()};
    return this.http
      .get('http://localhost:5226/api/Person/GetPersons',this.options)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // Handle the error here
          return throwError(err.message); // Rethrow it back to component
        })
      );
  }
}
