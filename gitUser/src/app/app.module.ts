import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ReposListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
