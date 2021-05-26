import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() message:any;
  @Output() childMsg = new EventEmitter()
  name: any;
  age: any;

  constructor(private students: StudentsService) {
   }

  ngOnInit(): void {
    this.childMsg.emit("Message From Child");
  }

  getBtnClick(){
    this.name = this.students.getParentName()
    this.age = this.students.getParentAge()
  }
}
