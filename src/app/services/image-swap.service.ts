import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageSwapService {
  private allImages: string[] = [
    'assets/images/worksWithUs/1.webp',
    'assets/images/worksWithUs/2.webp',
    'assets/images/worksWithUs/3.webp',
    'assets/images/worksWithUs/4.webp',
    'assets/images/worksWithUs/5.webp',
    'assets/images/worksWithUs/6.webp',
    'assets/images/worksWithUs/7.webp',
    'assets/images/worksWithUs/8.webp',
    'assets/images/worksWithUs/9.webp',
    'assets/images/worksWithUs/10.webp',
    'assets/images/worksWithUs/11.webp',
    'assets/images/worksWithUs/12.webp',
    'assets/images/worksWithUs/13.webp',
    'assets/images/worksWithUs/14.webp',
    'assets/images/worksWithUs/15.webp',
    'assets/images/worksWithUs/16.webp',
    // Add more image paths as needed
  ];

  private displayedImages: string[] = [];
  private availableImages: string[] = [];
  private lastSwappedIndex: number | null = null;

  constructor() {
    this.initializeImages();
  }

  private initializeImages() {
    // Initialize the displayedImages with a subset of allImages
    this.displayedImages = this.allImages.slice(0, 8); // Assuming we display the first 5 images
    this.availableImages = this.allImages.slice(8); // The remaining images
  }

  getDisplayedImages() {
    return this.displayedImages;
  }

  getLastSwappedIndex() {
    return this.lastSwappedIndex;
  }

  swapRandomImage() {
    if (this.availableImages.length === 0) {
      return; // No available images to swap
    }

    const randomIndex = Math.floor(Math.random() * this.displayedImages.length);
    const randomAvailableIndex = Math.floor(Math.random() * this.availableImages.length);

    // Swap the images
    const temp = this.displayedImages[randomIndex];
    this.displayedImages[randomIndex] = this.availableImages[randomAvailableIndex];
    this.availableImages[randomAvailableIndex] = temp;

    // Set the last swapped index
    this.lastSwappedIndex = randomIndex;
  }
}
