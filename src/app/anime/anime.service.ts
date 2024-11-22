import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable, map } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);
  }

  getAnime(id: number): Observable<Anime> {
  return this.http.get<Anime[]>(this.apiUrl).pipe(
    map((animes: Anime[]) => {
    //Complete con el código necesario para recorrer los animes y retornar el anime con el id buscado
      const anime = animes.find(anime => anime.id === id);
      if (!anime) {
        throw new Error(`Anime con ID ${id} no encontrado`);
      }
      return anime;
    })
  );
}

}


