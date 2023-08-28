import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
        setHeaders: {
            'x-rapidapi-key': 'c1a4c0f4fcmshd5a9b8d7e6d3b5fp1f5c7djsn7a8e5a1b5d1e',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        },
        setParams: {
            key: 'e40e743af2c94b0c916a8aa618fb4473'
        }
        });
        return next.handle(req);
    }

}