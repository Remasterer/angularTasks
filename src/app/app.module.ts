import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WorksComponent } from './components/works/works.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule } from '@angular/forms';
import {TaskListComponent} from './works/task-list/task-list.component';
import {UsersFunctionalComponent} from './works/users-functional/users-functional.component';
import {WordsFormComponent} from './works/words-form/words-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksComponent,
    HomeComponent,
    TaskListComponent,
    UsersFunctionalComponent,
    WordsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
