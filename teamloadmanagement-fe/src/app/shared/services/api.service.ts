import { Injector, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
// import { SpinnerService } from './spinner.service';
import { finalize } from 'rxjs/operators'
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    //protected apiUrl = (`${document.location.host}/api/`);
    protected apiUrl = 'http://localhost:3000';
    private headers: HttpHeaders;
    private options: any;
    private httpClient: HttpClient;
    private spinner: NgxSpinnerService;

    constructor(injector: Injector) {
        this.httpClient = injector.get(HttpClient);
        this.spinner = injector.get(NgxSpinnerService);
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });

        this.options = {
            headers: this.headers
        };
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
        return this.httpClient.post(url, body, this.options).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        )
    }

    protected httpPatch(url: string, body: any): Observable<any> {
        this.spinner.show();
        return this.httpClient.patch(url, body, this.options).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        )
    }

    protected httpDelete(url: string): Observable<any> {
        this.spinner.show();
        return this.httpClient.delete(url, this.options).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        )
    }


}
