import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getTasks = (url: string) => {
    return this.http.get<any>(url);
  };

  removeTask = (url: string) => {
    return this.http.delete(url, this.httpOptions);
  };

  editTask = (url: string) => {
    return this.http.put(url, this.httpOptions);
  };
}
