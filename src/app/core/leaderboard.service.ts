import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../shared/models/game';

@Injectable({ providedIn: 'root' })
export class LeaderboardService {
    get(limit: number = 30) {
        return this.http.get<Game[]>(`https://acnet-qa.atgames.net/backend/d2d/arcade/v2/leaderboards?limit=${limit}`);
    }

    constructor(private http: HttpClient) {}
}
