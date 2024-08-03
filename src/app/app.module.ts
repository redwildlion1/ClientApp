import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {CommonModule} from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriiModule } from './categorii/categorii/categorii.module';
import { CategoriiPageComponent } from './categorii/categorii-page/categorii-page.component';
import { ViewSubsComponent } from './categorii/viewSubs/viewSubs.component';


@NgModule({
  declarations: [					
    AppComponent,
    NavMenuComponent,
    ViewSubsComponent,

   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselComponent,
    HomeComponent,
    MatAutocompleteModule,
    CommonModule,
    FooterComponent,
    AboutUsComponent,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about-us', component: AboutUsComponent},
      { path: 'categorii', component: CategoriiPageComponent},
      { path: 'categorii/:category/:subCategory', component: ViewSubsComponent}
    ])
  ],
  providers: [
    {
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER, COMMA]  
    }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
