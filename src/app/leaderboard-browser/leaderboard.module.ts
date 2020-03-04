import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardBrowserComponent } from './leaderboard-browser.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'leaderboard', component: LeaderboardBrowserComponent }];

@NgModule({
    declarations: [LeaderboardBrowserComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LeaderboardModule {}
