import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, catchError, of, tap } from "rxjs";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private toastrService: ToastrService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(e => {
        this.toastrService.error(e?.error?.meta?.msg);
        return of(e?.data)
      })
    )
  }
}
