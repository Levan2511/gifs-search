import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiphyResponse } from '../models/Giphy';
import { HttpClient } from '@angular/common/http';

const API_KEY = 'EmpS7yCUm0UvTBU3Tjy2is6N6AWH4kU1';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private readonly baseUrl = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  getTrending(limit = 15, offset = 0): Observable<GiphyResponse> {
    return this.http.get<GiphyResponse>(`${this.baseUrl}/trending`, {
      params: {
        'api_key': API_KEY,
        limit,
        offset
      }
    })
  }

  getGifsByQuery(q: string, limit = 15, offset = 0) {
    return this.http.get<GiphyResponse>(`${this.baseUrl}/search`, {
      params: {
        'api_key': API_KEY,
        limit,
        offset,
        q
      }
    })
  }
}
