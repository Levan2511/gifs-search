import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ResponseItem } from 'src/app/models/Giphy';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent { 
  @Input() items: ResponseItem[] = [];
}
