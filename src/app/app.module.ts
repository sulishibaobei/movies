import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AnimateComponent } from './main/animate/animate.component';

import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TitleComponent } from './main/title/title.component';
import { RecommendComponent } from './main/recommend/recommend.component';
import { GridComponent } from './main/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimateComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    TitleComponent,
    RecommendComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
