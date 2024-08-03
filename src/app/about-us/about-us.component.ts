import { Component, OnInit } from '@angular/core';
import { AbousUsComponent } from '../home/abous-us/abous-us.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [AbousUsComponent],
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
