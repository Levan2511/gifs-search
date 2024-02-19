import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>search-input works!</p>`,
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent { }
