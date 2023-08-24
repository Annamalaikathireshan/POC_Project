import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Sbbutton:any;
  product: any;
  title = 'POC_Project'; 
  public productid!: number;
  productname : string = " ";

  onSave($event: any){    
    console.log("Save button is clicked!", $event);    
  } 
}
