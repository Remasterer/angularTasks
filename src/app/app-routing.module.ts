import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {WorksComponent} from './components/works/works.component';
import {TaskListComponent} from './works/task-list/task-list.component';
import {UsersFunctionalComponent} from './works/users-functional/users-functional.component';
import {WordsFormComponent} from './works/words-form/words-form.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'works', component: WorksComponent , children: [
      {path: 'task-list', component: TaskListComponent},
      {path: 'users-list', component: UsersFunctionalComponent},
      {path: 'words-check', component: WordsFormComponent},
    ]},
  {path: '', pathMatch: 'full' , redirectTo: 'home'},
  {path: '**', pathMatch: 'full' , redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
