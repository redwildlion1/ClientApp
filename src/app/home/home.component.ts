import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { AbousUsComponent } from './abous-us/abous-us.component';
import { WorksWithUsComponent } from './works-with-us/works-with-us.component';
import { HowDoesItWorkComponent } from './how-does-it-work/how-does-it-work.component';
import { MagazineComponent } from './magazine/magazine.component';
import { CategoriesComponent } from './categories/CategoriesComponent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CarouselComponent, AbousUsComponent, WorksWithUsComponent, HowDoesItWorkComponent, MagazineComponent, CategoriesComponent],
})
export class HomeComponent {
}
