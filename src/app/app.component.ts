import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ApiService } from '@service';
import { Location_BG, Test_BG, Mode } from '@ts/mode';
import { Language } from '@ts/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  /** 依據螢幕大小更動取得寬度值 */
  setWidth($event) {
    this.InnerWidth = ($event.target.innerWidth <= 726)
  }
  /** 現在的螢幕寬度 */
  InnerWidth: boolean = false;
  /** 綁定處理菜單模式 */
  Menu: Function;
  /** 隨螢幕大小產生菜單 */
  menu: boolean = false;
  /** 綁定處理日夜模式 */
  Mode: Function;
  /** 日夜模式的按鈕名稱 */
  mode: Mode = Mode.S;
  constructor(public api: ApiService) { }
  /** 處理日夜模式 */
  changeMode() {
    this.api.mode = !this.api.mode;
    let mode = (this.api.mode) ? "N" : "S", body = document.querySelector("body"),
      Localhost: boolean = location.href.substr(0, 21) !== "http://localhost:1491";
    this.mode = Mode[mode];
    body.style.background = (Localhost) ? Location_BG[mode] : Test_BG[mode];
    this.changeMenu(false);
  }
  /** 處理菜單模式 */
  changeMenu(boolin?: boolean) {
    this.menu = (boolin) ? boolin : !this.menu;
  }
  ngOnInit() {
    let wwd = window.innerWidth;
    this.InnerWidth = (wwd <= 726);
    this.api.postApi('test').subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log("ServerJson Complete")
    );
    ["Mode", "Menu"].forEach(item => this[item] = this[`change${item}`].bind(this));
  }
}

@Component({
  selector: 'app_btn',
  templateUrl: './Appbtn.component.html'
})
export class AppbtnComponent {
  /** 處理菜單模式 */
  @Input() Menu: Function;
  constructor(public api: ApiService) { }
}

@Component({
  selector: 'app_lang',
  templateUrl: './lang.component.html'
})
export class LangComponent {
  /** 處理日夜模式 */
  @Input() Mode: Function;
  /** 處理菜單模式 */
  @Input() Menu: Function;
  /** 日夜模式的按鈕名稱 */
  @Input() mode;
  language: any[] = Language;
  constructor(public api: ApiService) { }
  /**
   * 更換語系
   * @param lang 語系
   */
  changeLang(lang: string) {
    this.api._lang = lang;
    this.Menu(false);
  }
}