import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LeaderboardModule } from './leaderboard-browser/leaderboard.module';

// const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'leaderboard' }];
const routes: Routes = [];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        SharedModule,
        CoreModule,
        LeaderboardModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
