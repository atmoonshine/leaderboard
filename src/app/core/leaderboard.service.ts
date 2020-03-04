import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../shared/models/game';

@Injectable({ providedIn: 'root' })
export class LeaderboardService {
    get(limit: number = 30) {
        return this.http.get<Game[]>(`https://www.atgames.net/arcadenet/backend/d2d/arcade/v1/leaderboards?limit=${limit}`);
    }

    constructor(private http: HttpClient) {}
}
