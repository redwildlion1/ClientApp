import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-viewSubs',
  templateUrl: './viewSubs.component.html',
  styleUrls: ['./viewSubs.component.css'],
  
})
export class ViewSubsComponent implements OnInit {
  subs: any[] = [];
  subCategoryId : number | null = null;
  categoryId : number | null = null;
  subCategoryName: string = '';
  categoryName: string = '';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('category'));
      this.subCategoryId = Number(params.get('subCategory'));
      console.log(this.subCategoryId);
      const subcategory = this.categoryService.getSubcategoryById(this.categoryId, this.subCategoryId);
      console.log(subcategory);
      this.categoryName = this.categoryService.getCategoryById(this.categoryId)?.name || '';
      this.subCategoryName = subcategory?.name || '';
      this.subs = subcategory?.subs || [];
      console.log(this.subs);
    });
  }

}
