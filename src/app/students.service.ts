import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  parentAge: any;
  parentName: any;
  
  constructor() { }

  getParentAge(){
    return this.parentAge
  }

  getParentName(){
    return this.parentName
  }
  
  setParentName(name: string){
    this.parentName = name
  }

  setParentAge(age:number){
    this.parentAge = age
  }
}
