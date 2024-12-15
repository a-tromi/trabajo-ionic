import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private apiUrlGetComics = 'https://gateway.marvel.com:443/v1/public/comics?apikey=d9344d9be90304f1a51f747d22481c39&hash=ef54ca2f44f8715c283db790c6343f8d&ts=1';


  constructor(private http: HttpClient) { }

  getComics(): Observable<any> {
    return this.http.get(this.apiUrlGetComics);
  }

  // Método para obtener los usuarios
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para agregar un nuevo usuario
  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

}
