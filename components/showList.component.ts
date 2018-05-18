import {Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import {Task} from '../models/task';
import {completePipe} from '../pipes/complete.pipe';
import {searchPipe} from '../pipes/search.pipe';
import {searchComponent} from './search.component';
import {postService} from '../services/post.service';
//import {removeTask} from '../components/removetask.component';

@Component({
	selector:'showList',
	templateUrl:'./showList.html',
	providers:[postService]
})

export class showList implements OnInit {


//service injection
constructor(private posetservice:postService){}

tasks:Task[]=[];
taskname=Task.name;

ngOnInit(){this.tasks=this.posetservice.tasks;
console.log(this.taskname);}


complete:boolean=false;
search= '';


  getmessage($event){
  	this.search = $event;
  	// console.log($event);
  };

  receiveMessage($event) {
    this.complete = $event;
 //console.log($event);

  }
//delete task send it to service and call service 
delete(a:Task){ 
this.posetservice.remove(a);

	}

//donetask
done(a:Task){
this.posetservice.completed(a);
}

//editask
edit(a:Task){


}
}
