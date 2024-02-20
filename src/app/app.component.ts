import { Component, OnInit } from '@angular/core';
import { GiphyService } from './services/giphy.service';
import { ResponseItem } from './models/Giphy';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, distinctUntilChanged, distinctUntilKeyChanged, iif, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;
  items$: Observable<ResponseItem[]> = this.activeRoute.queryParams.pipe(
    distinctUntilKeyChanged('query'),
    tap(() => this.loading = true),
    switchMap(({ query }) => iif(
      () => query!!,
      this.giphyService.getGifsByQuery(query),
      this.giphyService.getTrending()
    )),
    tap(() => this.loading = false),
    map(({ data }) => data),
  );

  constructor(
    private giphyService: GiphyService,
    private activeRoute: ActivatedRoute
  ) {}
}
