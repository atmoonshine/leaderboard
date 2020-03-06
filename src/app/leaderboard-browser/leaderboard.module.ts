import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardBrowserComponent } from './leaderboard-browser.component';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: LeaderboardBrowserComponent }];

@NgModule({
    declarations: [LeaderboardBrowserComponent, LeaderboardComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class LeaderboardModule {
}
