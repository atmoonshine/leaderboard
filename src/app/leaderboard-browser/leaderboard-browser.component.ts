import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { LeaderboardService } from '../core/leaderboard.service';
import { tap, shareReplay } from 'rxjs/operators';
import { trigger, transition, query, stagger, animateChild, style, animate } from '@angular/animations';
import { Game } from '../shared/models/game';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-leaderboard-browser',
    templateUrl: './leaderboard-browser.component.html',
    styleUrls: ['./leaderboard-browser.component.scss'],
    animations: [
        // nice stagger effect when showing existing elements
        trigger('list', [
            transition(':enter', [
                // child animation selector + stagger
                query('@items', stagger(300, animateChild()), { optional: true })
            ])
        ]),
        trigger('items', [
            // cubic-bezier for a tiny bouncing feel
            transition(':enter', [
                style({ transform: 'scale(0.5)', opacity: 0 }),
                animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(1)', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ transform: 'scale(1)', opacity: 1, height: '*' }),
                animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
            ])
        ])
    ]
})
export class LeaderboardBrowserComponent {
    viewingLeaderboard = false;

    @ViewChild('leaderboardSection') leaderboardSection?: ElementRef<HTMLDivElement>;

    leaderboard$ = this.leaderboardService.get().pipe(
        tap(() => setTimeout(() => (document.getElementsByTagName('button')[0] as HTMLElement)?.focus())),
        shareReplay(1)
    );

    selectedGame$ = new BehaviorSubject<Game | undefined>(undefined);

    constructor(private leaderboardService: LeaderboardService) {}

    scrollToLeaderboard(game: Game) {
        this.selectedGame$.next(game);

        this.leaderboardSection?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.viewingLeaderboard = true;
    }

    @HostListener('keydown', ['$event'])
    onkeyDown(event: KeyboardEvent) {
        if (
            (event.key === 'ArrowUp' || event.key === 'Backspace' || event.key === 'b') &&
            this.viewingLeaderboard &&
            this.selectedGame$.value
        ) {
            event.stopPropagation();
            event.preventDefault();

            const srcButton = document.getElementById('game' + this.selectedGame$.value.game_id) as HTMLButtonElement;
            srcButton.scrollIntoView({ behavior: 'smooth' });
            srcButton.focus();
            this.viewingLeaderboard = false;
        }
    }

    onGameFocus(game: Game, event: FocusEvent) {
        this.selectedGame$.next(game);
        console.log({ event });
    }
}
