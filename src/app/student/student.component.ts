import { Component, OnInit } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.styl']
})
export class StudentComponent implements OnInit {

  s1 : Student;
  btnText : string;
  isDisabled : boolean;
  btnClassCss : string;
  username : string;
  showUsers:boolean;
  studentList : Array<Student>;

  constructor() {
    this.isDisabled =false;
    this.s1 = new Student(1,"Anuj","anuj@gmail.com",9799301038,"Jaipur");
    this.btnText ="Click here to Login"
    this.username = "maxanuj24";
    this.studentList= [this.s1,new Student(2,"chits","chits@yahoomail.com",7891000700,"Gurgaon"),new Student(3,"Yash","Yash@yahoomail.com",869692313,"Chennai"),new Student(4,"Adi","aditya@mallumail.com",9746221,"Mumbai")];

  }

  ngOnInit() {
    

  }
  showCards()
  {
    this.showUsers = true;
   }
  validateButton(){
    if(!this.isDisabled)
    {
      this.btnText=" Login";
      this.btnClassCss="btn btn-danger";
      console.log(!this.isDisabled);
      this.isDisabled=true;
    }
    else{
      this.btnText="Already Loged in";
      this.btnClassCss = "btn btn-success";
      console.log(this.isDisabled);
      this.isDisabled=false;
    }
  }

}
