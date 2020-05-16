import { Component, OnInit } from '@angular/core';
import { faCrown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  facrow=faCrown;

}
