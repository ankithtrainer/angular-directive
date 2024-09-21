import { Component } from '@angular/core';
import { Customer } from '../cusomers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-directive-example';

   items  = [ 'Apple', 'Banana' , 'Orange']

   
customers:Customer[] = [
  { custId:'100' , Cust_Name: 'Rahul', city:'Bangalore' , state:'Taminadu'} ,
  { custId:'101' , Cust_Name: 'Tapan', city:'Delhi' , state:'Delhi'} 
]

readMe(){
   console.log(" I am inside controller method ");
}



}
