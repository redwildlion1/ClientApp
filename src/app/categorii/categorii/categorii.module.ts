import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriiPageComponent } from '../categorii-page/categorii-page.component';
import { AsfaltareComponent } from '../asfaltare/asfaltare.component';
import { CarouselComponent } from 'src/app/home/carousel/carousel.component';


@NgModule({
  declarations: [AsfaltareComponent,CategoriiPageComponent],
  imports: [
    CarouselComponent,
    CommonModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoriiPageComponent,
        pathMatch: 'full',
        children: [
          {
            path: 'asfaltare',
            component: AsfaltareComponent,
          }
        ]
      }
    ])
  ],
})
export class CategoriiModule {
  constructor() {
    console.log('CategoriiModule loaded');
     
  }
}
