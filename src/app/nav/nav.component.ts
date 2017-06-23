import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {

    $(document).ready(function () {
      $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });

    });

    $("li a.menu1").click(function () {
      $("ul.cl-effect-2").slideToggle(300, function () {
        // Animation complete.
      });
    });
    $("li a.menu").click(function () {
      $("ul.cl-effect-1").slideToggle(300, function () {
        // Animation complete.
      });
    });
    $(".top-navigation").click(function () {
      $(".drop-navigation").slideToggle(300, function () {
        // Animation complete.
      });
    });
  }

  ngOnInit() {
  }

}
