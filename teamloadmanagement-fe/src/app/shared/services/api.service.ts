import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    protected apiUrl = '/api';
    private headers = new HttpHeaders();
    private httpClient: HttpClient;
    private spinner: NgxSpinnerService;

    constructor(injector: Injector) {
        this.httpClient = injector.get(HttpClient);
        this.spinner = injector.get(NgxSpinnerService);
        this.headers = this.headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        this.headers = this.headers.append('Authorization', `Bearer ${authToken}`);
    }

    protected httpGet(url: string, params: any = {}): Observable<any> {
        this.spinner.show();
        return this.httpClient.get(url, {
            headers: this.headers,
            params: params
        }).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        )
    }

    public get<T>(url: string, params: any = {}): Observable<T> {
        this.spinner.show();
        return this.httpClient.get<T>(url, {
            headers: this.headers,
            params: params
        }).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        )
    }

    protected httpPost(url: string, body: any): Observable<any> {
        this.spinner.show();
        return this.httpClient.post(url, body, { headers: this.headers }).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        )
    }

    protected httpPut(url: string, body: any): Observable<any> {
        this.spinner.show();
        return this.httpClient.put(url, body, { headers: this.headers }).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        )
    }

    protected httpPatch(url: string, body: any): Observable<any> {
        this.spinner.show();
        return this.httpClient.patch(url, body, { headers: this.headers }).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        )
    }

    protected httpDelete(url: string): Observable<any> {
        this.spinner.show();
        return this.httpClient.delete(url, { headers: this.headers }).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        )
    }
}
