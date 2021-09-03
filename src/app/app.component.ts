import { Component, OnInit, HostListener, Output, EventEmitter, Input } from '@angular/core';
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
    this.InnerWidth = ($event.target.innerWidth <= 414)
  }
  InnerWidth: boolean = false;
  Menu: Function;
  menu: boolean = false;
  Mode: Function;
  mode: Mode = Mode.S;
  constructor(public api: ApiService) { }
  changeMode() {
    this.api.mode = !this.api.mode;
    let mode = (this.api.mode) ? "N" : "S", body = document.querySelector("body");
    this.mode = Mode[mode];
    body.style.background = BG[mode];
    this.changeMenu(false);
  }
  changeMenu(boolin?: boolean) {
    this.menu = (boolin) ? boolin : !this.menu;
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
    ["Mode", "Menu"].forEach(item => this[item] = this[`change${item}`].bind(this));
  }
}

@Component({
  selector: 'app_btn',
  templateUrl: './Appbtn.component.html',
  styleUrls: ['./app.component.css']
})
export class AppbtnComponent {
  @Input() Menu: Function;
  constructor(public api: ApiService) { }
}

@Component({
  selector: 'app_lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./app.component.css']
})
export class LangComponent {
  @Input() Mode: Function;
  @Input() Menu: Function;
  @Input() mode;
  constructor(public api: ApiService) { }
  language(lang: string) {
    this.api._lang = lang;
    this.Menu(false);
  }
}