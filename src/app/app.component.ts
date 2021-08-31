import { Component, OnInit } from '@angular/core';
import { ApiService } from '@service';
import { BG, Mode } from '@ts/mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mode: Mode = Mode.S;
  constructor(public api: ApiService) { }
  changeMode() {
    this.api.mode = !this.api.mode;
    let mode = (this.api.mode) ? "N" : "S", body = document.querySelector("body");
    this.mode = Mode[mode];
    body.style.background = BG[mode];
  }
  ngOnInit() {
    let Observer = {
      next: el => console.log(el),
      error: err => console.log(err)
    }
    this.api.postApi('test').subscribe(Observer);
    this.api.postApi('123', { body: "testPHP" }).subscribe(Observer);
  }
}
