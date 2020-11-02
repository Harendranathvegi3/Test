import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibmtest';
  conditionCeck: boolean = true;

  _onClickdiv() {
    console.log("_onClickdiv");
    alert("img click")
  }
  sumbit() {
    console.log("sumbit");
    this.conditionCeck = true;
  }
  edit() {
    console.log("edit");
    this.conditionCeck = false;
  }

}
