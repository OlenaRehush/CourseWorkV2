import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import '../../rxjs-operators';
import { BaseService } from '../../shared/services/base.service';
import { HomeDetails } from '../models/home.details.interface';

@Injectable()
export class DashboardService extends BaseService {
  baseUrl: string = '';

  constructor(private http: Http) {
    super();
  }

  getHomeDetails(): Observable<HomeDetails> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get("/api/dashboard/home", { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }
}
