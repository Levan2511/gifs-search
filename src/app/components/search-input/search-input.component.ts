import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, filter, first, takeUntil, tap } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit {
  formControl = new FormControl(null);

  private destroy$$ = new Subject();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setInitialInputValueFromRoute();
    this.setQueryParamOnInput();
  }

  private setQueryParamOnInput() {
    this.formControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(query => this.router.navigate([], {
        queryParams: { query }
      })),
      takeUntil(this.destroy$$)
    ).subscribe()
  }

  private setInitialInputValueFromRoute() {
    this.activeRoute.queryParams.pipe(
      first(q => q['query']),
      filter(Boolean),
      tap(({ query }) => this.formControl.setValue(query)),
      takeUntil(this.destroy$$)
    ).subscribe();
  }
}
