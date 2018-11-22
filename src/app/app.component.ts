import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var config = {
      apiKey: "AIzaSyDflSQjn_X056hIJS-StVHst7cgbtDwJKw",
      authDomain: "http-client-demo-a1f4f.firebaseapp.com",
      databaseURL: "https://http-client-demo-a1f4f.firebaseio.com",
      projectId: "http-client-demo-a1f4f",
      storageBucket: "http-client-demo-a1f4f.appspot.com",
      messagingSenderId: "16688228406"
    };
    firebase.initializeApp(config);
  }
}
