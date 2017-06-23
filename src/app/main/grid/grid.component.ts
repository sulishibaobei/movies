import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../../type';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() c = Type;
  constructor() { }

  ngOnInit() {
  }

}
