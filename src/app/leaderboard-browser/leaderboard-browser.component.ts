import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../core/leaderboard.service';
import { tap } from 'rxjs/operators';
import { trigger, transition, query, stagger, animateChild, style, animate } from '@angular/animations';

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
    leaderboard$ = this.leaderboardService
        .get()
        .pipe(tap(() => setTimeout(() => (document.getElementsByTagName('button')[0] as HTMLElement)?.focus())));

    constructor(private leaderboardService: LeaderboardService) {}
}
