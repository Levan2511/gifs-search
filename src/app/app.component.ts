import { Component, OnInit } from '@angular/core';
import { GiphyService } from './services/giphy.service';
import { ResponseItem } from './models/Giphy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TestProject';
  items: ResponseItem[] = [];

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {
    this.giphyService.getTrending().subscribe(({ data }) => {
      this.items = data;
    });
  }
}
