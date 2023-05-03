import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../entities/Character';

@Injectable({
  providedIn: 'root',
})
export class ListCharactersService {
  listUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  load(): Observable<any> {
    return this.http.get<{ info: any; results: Character[] }>(this.listUrl);
  }
}
