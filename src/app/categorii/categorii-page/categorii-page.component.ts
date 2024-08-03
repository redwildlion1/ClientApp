import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categorii-page',
  templateUrl: './categorii-page.component.html',
  styleUrls: ['./categorii-page.component.css'],
})
export class CategoriiPageComponent implements OnInit {
  subcategories1: any[] = [];
  subcategories2: any[] = [];
  subcategories3: any[] = [];
  constructor(private categoryService : CategoryService) { }
  
  ngOnInit() {
    this.subcategories1 = this.categoryService.getSubcategories(0);
    console.log(this.subcategories1);
    this.subcategories2 = this.categoryService.getSubcategories(1);
    this.subcategories3 = this.categoryService.getSubcategories(2);
  }

}
