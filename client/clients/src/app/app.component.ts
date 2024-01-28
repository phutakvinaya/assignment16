import { Component } from '@angular/core';
import { MarvellousService } from './marvellous.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[MarvellousService]
})
export class AppComponent {
  title = 'clients';
  message:any;
  valuesarray:any[]=[];
constructor(private service:MarvellousService)
{}
  ngOnInit(){
    this.service.getbatches().subscribe(data =>{
      console.log(data);
      this.valuesarray = data
      // this.message = data;
      // this.valuesarray = Object.values(this.message)
      console.log(this.valuesarray)
    },
    (error) => {
      console.error('Error fetching data:', error);
    })
  }
}
