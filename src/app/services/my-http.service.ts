// my-http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  private apiUrl = 'http://localhost:5000/api'; // Your C# API URL

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/quotes`); // Adjust endpoint as needed
  }

  getArtworks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/artworks`); // Adjust endpoint as needed
  }
}
