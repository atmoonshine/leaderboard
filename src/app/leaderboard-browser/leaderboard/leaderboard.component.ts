import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/shared/models/game';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
    @Input() game: Game | undefined;
}
