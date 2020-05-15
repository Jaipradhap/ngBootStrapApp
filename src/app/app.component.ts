import { Component } from '@angular/core';
import { faAd,faFilm}  from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng7app';
  faAdIcon = faAd;
  faFilmIcon =faFilm;
}
