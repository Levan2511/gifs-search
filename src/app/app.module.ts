import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { GridComponent } from './components/grid/grid.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridComponent,
    SearchInputComponent,
    RouterModule.forRoot([]),
    ToastrModule.forRoot(),
    MatProgressBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
