export class Student{

    id:number;
    name:string;
    email:string;
    contactno:number;
    city:string;

    constructor(id:number,name:string,email:string,contactno:number,city:string){
      this.id=id;
      this.name=name;
      this.city = city;
      this.contactno = contactno;
      this.email = email; 
    }
    
}