import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../../type';


@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css']
})
export class AnimateComponent implements OnInit {
  @Input() animate: Type;

  constructor() {
  }

  ngOnInit() {

  }


}
