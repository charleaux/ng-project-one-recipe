import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyAphGh25NLhO5LpEvG_U9szri7fcFkQ4Ss',
      authDomain: 'ng-project-one-recipe.firebaseapp.com',
      databaseURL: 'https://ng-project-one-recipe.firebaseio.com',
      projectId: 'ng-project-one-recipe',
      storageBucket: 'ng-project-one-recipe.appspot.com',
      messagingSenderId: '1029586836551'
    };
    firebase.initializeApp(config);
  }
}
