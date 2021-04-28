import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PassingData';

   data  = [] as any;
  recieveData(event: String) {
    console.log(event)

    this.data.push(event);
    console.log(this.data)
    
  }
}
