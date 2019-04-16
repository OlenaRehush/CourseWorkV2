import { Injector, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { SpinnerService } from './spinner.service';
import { finalize } from 'rxjs/operators'
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    protected apiUrl = (`${document.location.host}/api/`);
    private headers: HttpHeaders;
    private options: any;
    private httpClient: HttpClient;

    constructor(injector: Injector) {
        this.httpClient = injector.get(HttpClient);
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });

        this.options = {
            headers: this.headers
        };
    }

    protected httpGet(url: string, params: any = {}): Observable<any> {
        return this.httpClient.get(url, {
            headers: this.headers,
            params: params
        })
    }

    public get<T>(url: string, params: any = {}): Observable<T> {
        return this.httpClient.get<T>(url, {
            headers: this.headers,
            params: params
        })
    }

    protected httpPost(url: string, body: any): Observable<any> {
        return this.httpClient.post(url, body, this.options)
    }

    protected httpPatch(url: string, body: any): Observable<any> {
        return this.httpClient.patch(url, body, this.options)
    }

    protected httpDelete(url: string): Observable<any> {
        return this.httpClient.delete(url, this.options)
    }


}
