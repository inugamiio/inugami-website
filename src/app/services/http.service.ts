import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpServices {

    //==================================================================================================================
    // ATTRIBUTES
    //==================================================================================================================
    private readonly http = inject(HttpClient);


    //==================================================================================================================
    // GET SOURCE
    //==================================================================================================================
    public getSourceCode(url: string): Observable<string> {
        return this.http.get(url, { responseType: 'text' })
            .pipe(catchError((err) => this.handleError(url, err)));
    }

    private handleError(url: string, error: any): Observable<never> {
        console.error(`fail to fetch source: ${url}`, error);
        return throwError(() => error);
    }
}