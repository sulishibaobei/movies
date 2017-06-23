import { Component, OnInit } from '@angular/core';
import { Type } from '../type';
import { Animate, Recommend, Recommend1 } from '../data';
import { MainService } from './main.service';
declare let $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  animate = Animate;
  recommend = Recommend;
  recommend1 = Recommend1;

  name = "Recent Videos";
  name1 = "Animated Cartoon";
  name2 = "Recommended";
  name3 = "Sports";
  errorMessage: string;
  recent: Type[];
  constructor(private mainservice: MainService) {
    $(function () {
      // Slideshow 4  滑动
      $("#slider3").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });

    });
  }

  ngOnInit() {
    this.getrecent();
  }
  getrecent() {
    this.mainservice.getRecent().then(
      recent => {
        this.recent = recent;
      },
      error => this.errorMessage = <any>error
    )
  }

}
