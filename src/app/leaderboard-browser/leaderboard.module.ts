import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardBrowserComponent } from './leaderboard-browser.component';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [{ path: '', component: LeaderboardBrowserComponent }];

@NgModule({
    declarations: [LeaderboardBrowserComponent, LeaderboardComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LeaderboardModule {
}
