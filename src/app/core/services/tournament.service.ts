import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  private apiUrl = `${environment.apiUrl}/myTournaments`;

  constructor(private http: HttpClient) {}

  getTournaments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTournament(tournament: any): Observable<any> {
    return this.http.post(this.apiUrl, tournament);
  }

  updateTournament(id: number, tournament: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, tournament);
  }

  deleteTournament(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
