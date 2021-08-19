import { Component, OnInit } from '@angular/core';
import { ApiService } from '@service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private api: ApiService) { }
  changeLang(lang: string) {
    this.api.getLang(lang);
  }
  ngOnInit() {
  }
}
