import { Component } from '@angular/core';
import {createTaskComponent} from './components/createTask.component';

import {showList} from './components/showList.component';
import {filterComponent} from './components/filter.component';
// import {capitalize} from './pipes/capitalize.pipe';
import {completePipe} from './pipes/complete.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
// keyword= 'task 2';
// @Input() data;
// complete  = this.data;


// getdata($e){
// 	this.complete=$e.key;
// }
}
