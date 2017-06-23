import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-grids',
  templateUrl: './single-grids.component.html',
  styleUrls: ['./single-grids.component.css']
})
export class SingleGridsComponent implements OnInit {
  @Input() grid: string;
  constructor() { }

  ngOnInit() {
  }

}
