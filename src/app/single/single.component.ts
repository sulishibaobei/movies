import { Component, OnInit } from '@angular/core';
import { Media, Recommend, Recommend1 } from '../data';
declare let $: any;
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  media = Media;
  recommend = Recommend;
  recommend1 = Recommend1;

  constructor() {
    $(document).ready(function () {
      let size_li = $("#myList li").size();
      let x = 1;
      $('#myList li:lt(' + x + ')').show();
      $('#loadMore').click(function () {
        x = (x + 1 <= size_li) ? x + 1 : size_li;
        $('#myList li:lt(' + x + ')').show();
      });
      $('#showLess').click(function () {
        x = (x - 1 < 0) ? 1 : x - 1;
        $('#myList li').not(':lt(' + x + ')').hide();
      });
    });
  }

  ngOnInit() {
  }

}
