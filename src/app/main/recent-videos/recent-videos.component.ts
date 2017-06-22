import { Component, OnInit } from '@angular/core';
import { Type } from '../../type';

import { Recent } from '../../data';
@Component({
  selector: 'app-recent-videos',
  templateUrl: './recent-videos.component.html',
  styleUrls: ['./recent-videos.component.css']
})
export class RecentVideosComponent implements OnInit {
  recent = Recent;
  constructor() { }

  ngOnInit() {
  }

}
