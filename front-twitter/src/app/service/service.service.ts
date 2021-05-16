import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'https://t55lxmhfp7.execute-api.us-east-2.amazonaws.com/users'

  constructor(private http: HttpClient) { }

  getTweetAll() {
    return this.http.get(this.url);
  }
}
