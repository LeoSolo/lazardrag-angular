import {Component, OnInit} from '@angular/core';
import {SlidesService} from "../../../services/slides.service";
import {ISlide} from "../../../models/ISlide";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})

export class SliderComponent implements OnInit {

  slides: ISlide[] = [];
  slideIndex: number = 0;
  loading: boolean = true;
  delay: number = 3500;
  pause: boolean = false;
  interval: number = null;

  constructor(private slidesService: SlidesService) {
  }

  async ngOnInit() {
    this.getSlides();
    this.play();
  }

  async getSlides() {
    this.slides = await this.slidesService.getSlides()
      .then(res => {
        this.loading = false;
        return res;
      })
  }

  next() {
    if (this.pause) {
      clearInterval(this.interval);
      return
    }

    const total = this.slides.length;

    if (total > 0)
      this.slideIndex = (this.slideIndex === total - 1) ? 0 : this.slideIndex + 1;
  }

  play() {
    this.pause = false;

    this.interval = setInterval(() => {
      this.next();
    }, this.delay);
  }

  setPause() {
    clearInterval(this.interval);
    this.pause = true;
  }

  skip(direction) {
    const total = this.slides.length;
    clearInterval(this.interval);

    switch (direction) {
      case 'next':
        this.slideIndex = (this.slideIndex === total - 1) ? 0 : this.slideIndex + 1;
        break;
      case 'prev':
        this.slideIndex = (this.slideIndex === 0) ? total - 1 : this.slideIndex - 1;
        break;
    }

    this.play();
  }

  chooseCurrentImage(index) {
    this.slideIndex = index;
  }

}
