import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import '../../rxjs-operators';
import { BaseService } from "./base.service";

@Injectable()
export class UserService extends BaseService {
  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: Http) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
  }

  register(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    let body = JSON.stringify({ firstName, lastName, email, password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/api/accounts', body, options)
      .map(res => true)
      .catch(this.handleError);
  }

  login(userName: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/api/auth/login',
        JSON.stringify({ userName, password }), { headers }
      )
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      })
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  facebookLogin(accessToken: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({ accessToken });
    return this.http
      .post(
        '/api/externalauth/facebook', body, { headers })
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      })
      .catch(this.handleError);
  }
}

