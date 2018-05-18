import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {createTaskComponent} from './components/createTask.component';
import { ReactiveFormsModule } from '@angular/forms';
import {searchComponent} from './components/search.component';
import {postService} from './services/post.service';
import{HttpClientModule} from '@angular/common/http';
import {showList} from './components/showList.component';
//import {removeTask} from './components/removetask.component';
import {capitalize} from './pipes/capitalize.pipe';
import {completePipe} from './pipes/complete.pipe';
import {searchPipe} from './pipes/search.pipe';
import{FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    createTaskComponent,
    searchComponent,
    showList,
  //  removeTask,
    capitalize,
    completePipe,
    searchPipe

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  postService,
  completePipe,
  searchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
