import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '@service';
import { BG, Mode } from '@ts/mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  /** 依據螢幕大小更動取得寬度值 */
  setWidth($event) {
    let wwd = $event.target.innerWidth;
    this.InnerWidth = (wwd <= 414)
  }
  mode: Mode = Mode.S;
  InnerWidth: boolean = false;
  menu: boolean = false;
  constructor(public api: ApiService) { }
  changeMode() {
    this.api.mode = !this.api.mode;
    let mode = (this.api.mode) ? "N" : "S", body = document.querySelector("body");
    this.mode = Mode[mode];
    body.style.background = BG[mode];
  }
  ngOnInit() {
    let wwd = window.innerWidth;
    this.InnerWidth = (wwd <= 414);
    let Observer = {
      next: el => console.log(el),
      error: err => console.log(err)
    }
    this.api.postApi('test').subscribe(Observer);
    this.api.postApi('123', { body: "testPHP" }).subscribe(Observer);
  }
}

@Component({
  selector: 'app_btn',
  templateUrl: './Appbtn.component.html',
  styleUrls: ['./app.component.css']
})
export class AppbtnComponent implements OnInit {
  constructor(public api: ApiService) { }
  ngOnInit() {

  }
}