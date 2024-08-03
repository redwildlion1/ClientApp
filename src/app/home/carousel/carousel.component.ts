import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

interface Keyword {
  name: string;
  category: string;
}

interface PopularCategory {
  name: string;
  img: string;
}

@Component({
  selector: 'home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    CommonModule,
    MatChipsModule
  ],
  standalone: true
})
export class CarouselComponent implements OnInit {
  category: string = '';
  control = new FormControl('');
  keywords: Keyword[] = [
    { name: 'Ciment', category: 'Materiale' },
    { name: 'Cărămidă', category: 'Materiale' },
    { name: 'Beton', category: 'Materiale' },
    { name: 'Învelitoare', category: 'Materiale' },
    { name: 'Instalații sanitare', category: 'Servicii' },
    { name: 'Instalații electrice', category: 'Servicii' },
    { name: 'Vopsitorie', category: 'Servicii' },
    { name: 'Arhitectură', category: 'Profesii' },
    { name: 'Inginerie', category: 'Profesii' },
    { name: 'Constructor', category: 'Profesii' },
    { name: 'Renovare', category: 'Proiecte' },
    { name: 'Remodelare', category: 'Proiecte' },
    { name: 'Construcție', category: 'Proiecte' }
  ];
  categories: string[] = [];
  popularCategories: PopularCategory[] = [
    { name: 'Materiale', img: 'street.jpg' },
    { name: 'Servicii', img: 'fruit.jpg' },
    { name: 'Profesii', img: 'vegetable.jpg' }
  ];

  filteredCategories: Observable<string[]> = new Observable<string[]>();
  isSmallScreen: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });

    this.categories = [...new Set(this.keywords.map(keyword => keyword.category))];

    this.filteredCategories = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCategories(value || ''))
    );
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 576;
  }

  private _filterCategories(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    const matchingCategories = new Set<string>();
    this.keywords.forEach(keyword => {
      if (this._normalizeValue(keyword.name).includes(filterValue)) {
        matchingCategories.add(keyword.category);
      }
    });
    return this.categories.filter(category =>
      this._normalizeValue(category).includes(filterValue) || matchingCategories.has(category)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  public search(keyword: string) {
    console.log(`Searching for keyword: ${keyword}`);
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public setCategoryFromPopular(category: string) {
    if (category === this.category) {
      this.category = '';
      this.control.setValue('');
      return;
    }
    this.category = category;
    this.control.setValue(category);
  }

  getSearchButtonHtml() {
      return this.isSmallScreen ? '<i class="bi bi-arrow-right fs-4"></i>' : 'Incepeti proiectul';
  }
}