import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CategoryService } from "src/app/services/category.service";
import { RouterLink } from "@angular/router";



@Component({
  selector: 'home-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  activePanelIndex = 0;
  fadeIn: boolean = true;
  categories : any[] = [];
  constructor(private cdr: ChangeDetectorRef, private categoryService : CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  togglePanel(i: number) {
    if (this.activePanelIndex !== i) {
      this.activePanelIndex = i;
      this.fadeIn = false;
      setTimeout(() => {
        this.fadeIn = true;
        this.cdr.detectChanges();
      }, 50);
    }
    this.cdr.detectChanges();
  }
}
