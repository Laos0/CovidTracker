import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidLocationsComponent } from './views/main/covid-locations/covid-locations.component';
import { FooterComponent } from './views/footer/footer/footer.component';
import { HeaderComponent } from './views/header/header/header.component';
import { CovidGlobalStatsComponent } from './views/main/covid-global-stats/covid-global-stats.component';
import { CovidLocalStatsComponent } from './views/main/covid-local-stats/covid-local-stats.component';
import { SearchBarComponent } from './views/main/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidLocationsComponent,
    FooterComponent,
    HeaderComponent,
    CovidGlobalStatsComponent,
    CovidLocalStatsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
