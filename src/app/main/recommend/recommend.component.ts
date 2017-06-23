import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  @Input() name: string;
  @Input() animate: string;
  @Input() animate1: string;
  recommend:any;
 recommend1:any
  constructor() { }
  ngOnInit() {
   this.recommend=this.animate;
   this.recommend1=this.animate1;
  }

}
