import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPelis } from '../models/iPelis.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliService {

  constructor(private http: HttpClient) { }

  searchMovies() {

  }

  getDetails() {
    
  }
}
