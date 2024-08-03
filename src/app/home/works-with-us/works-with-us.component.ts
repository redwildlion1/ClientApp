import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageSwapService } from '../../services/image-swap.service';
import { Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'home-works-with-us',
  templateUrl: './works-with-us.component.html',
  styleUrls: ['./works-with-us.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class WorksWithUsComponent implements OnInit, OnDestroy{
  @ViewChildren('imageElement') imageElements!: QueryList<ElementRef>;
  private intervalId: any;

  constructor(private imageSwapService: ImageSwapService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.swapRandomImage();
    }, 5000); // Swap every 5 seconds
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  swapRandomImage() {
    this.imageSwapService.swapRandomImage();
    const lastSwappedIndex = this.imageSwapService.getLastSwappedIndex();

    if (lastSwappedIndex !== null) {
      this.updateImageSrc(lastSwappedIndex);
    }
  }

  updateImageSrc(index: number) {
    const element = this.imageElements.toArray()[index].nativeElement as HTMLImageElement;
    if (element) {
      this.renderer.addClass(element, 'fadeOut');
      
      setTimeout(() => {
        element.src = this.imageSwapService.getDisplayedImages()[index]; // Update the image source
        this.renderer.removeClass(element, 'fadeOut');
        this.renderer.addClass(element, 'fadeIn');
      }, 1300); // Duration of the fadeOut transition

      setTimeout(() => {
        this.renderer.removeClass(element, 'fadeIn');
      }, 2600); // Duration of the fadeIn transition
    }
  }
}