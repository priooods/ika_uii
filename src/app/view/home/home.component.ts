import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 20,
    slidesPerGroup: 3,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 8
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      950: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  };



  constructor() { }

  ngOnInit(): void {
  }

}
