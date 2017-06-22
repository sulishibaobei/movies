import { Component, OnInit } from '@angular/core';
import {  Language } from '../data';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  student: string = '';
  info: string = '';
  language = Language;
  constructor() { }

  ngOnInit() {
  }
  setInfo() {
    this.info = this.student;
  }
}
