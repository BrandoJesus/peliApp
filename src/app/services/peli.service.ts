import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPelis } from '../models/iPelis.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliService {

  private url: string = '';
  private apiKey: string = '683ba592';

  constructor(private http: HttpClient) { }

  searchMovies(title: string, type: string) {
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    
    return this.http.get<IPelis>(this.url).pipe(map(results => results['Search']));
  }

  getDetails(id:string) {
    return this.http.get<IPelis>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
