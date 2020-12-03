import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { StoresComponent } from './stores/stores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MainComponent,
    SearchComponent,
    ResultComponent,
    StoresComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'searchComponent', component: SearchComponent },
      { path: 'resultComponent', component: ResultComponent },
      { path: 'storesComponent', component: StoresComponent },
      { path: 'mainComponent', component: MainComponent },   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
