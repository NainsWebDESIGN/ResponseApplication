import { Component, OnInit } from '@angular/core';
import { ApiService } from '@service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  inputJson: string;
  constructor(private api: ApiService) { }
  get(text?) {
    let Text = (text == undefined) ? this.inputJson : text;
    this.api.getTest(Text).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log("Complete")
    );
  }
  ngOnInit() {
  }
}
