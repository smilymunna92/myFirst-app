import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template : `
            <h1>Angular Router</h1>
            <nav>
              <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
              <a routerLink="/home" class="btn btn-info" routerLinkActive="active">Home</a>
            </nav>
            <router-outlet></router-outlet>
            `,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App works!';
}
