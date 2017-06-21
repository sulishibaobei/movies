import { Component, OnInit } from '@angular/core';
import { Data } from '../data';

const Recent: Data[] = [
  { id: 1, image: './assets/images/t1.jpg', title: 'Pellentesque vitae pulvinar tortor nullam interdum metus a imperdiet', author: 'John Maniya', view: '2,114,200 views' },
  { id: 2, image: './assets/images/t2.jpg', title: 'Interdum pellentesque vitae pulvinar tortor nullam metus a imperdiet', author: 'John Maniya', view: '4,200 views' },
  { id: 3, image: './assets/images/t3.jpg', title: 'Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor', author: 'John Maniya', view: '71,174 views' }
];
@Component({
  selector: 'app-recent-videos',
  templateUrl: './recent-videos.component.html',
  styleUrls: ['./recent-videos.component.css']
})
export class RecentVideosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
