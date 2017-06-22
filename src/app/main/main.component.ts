import { Component, OnInit } from '@angular/core';
import { Type } from '../type';
import { Animate, Recommend, Recommend1 } from '../data';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  animate = Animate;
  recommend = Recommend;
  recommend1 = Recommend1;
  constructor() { }

  ngOnInit() {
  }

}
