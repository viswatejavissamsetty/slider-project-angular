import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider-child',
  templateUrl: './slider-child.component.html',
  styleUrls: ['./slider-child.component.scss']
})
export class SliderChildComponent {
  slideData = data;
  currentSlide = 0;
  direction: 1 | -1 = 1;

  next() {
    // $('.card').animate({ scrollLeft: 1000 }, 1000)
    this.direction = 1;
    this.currentSlide = (this.currentSlide + 1) % this.slideData.length;
  }

  prevoius() {
    this.direction = -1;
    this.currentSlide = (this.currentSlide - 1) % this.slideData.length;
  }
}

const data = [
  { title: "slide 1", content: "This is content for slide 1", link: "Learn more" },
  { title: "slide 2", content: "This is content for slide 2", link: "Learn more" },
  { title: "slide 3", content: "This is content for slide 3", link: "Learn more" },
  { title: "slide 4", content: "This is content for slide 4", link: "Learn more" },
  { title: "slide 5", content: "This is content for slide 5", link: "Learn more" },
  { title: "slide 6", content: "This is content for slide 6", link: "Learn more" },
]