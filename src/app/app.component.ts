import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  messageFromChild:any;
  parentMessage = "This message from parent"
  promise: Promise<any>;

  constructor (private students: StudentsService){
    this.promise = this.getPromise();
  }
  
  getPromise(){
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("promise completed!"),3000);
    });
  }

  showMessage(message:string){
    this.messageFromChild = message
  }

  setBtnClick() {
    this.students.setParentName("vignesh");
    this.students.setParentAge(25);
  }
  
  doSearch(term: string){
    alert(term)
  }
}


