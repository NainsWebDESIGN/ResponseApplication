import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, App } from '@service';
import { PHP_Content } from '@ts/interface';
import { dateArr, dateProperty } from '@ts/translate';

@Component({
  selector: 'app-routerID',
  templateUrl: './routerID.component.html'
})
export class RouterIDComponent implements OnInit {
  /** router實作取得的id */
  title: string;
  /** 取得資料的內容 */
  content: PHP_Content = { getWay: "", body: "" };
  /** Loading狀態 */
  load: boolean = false;
  /** 今日日期 */
  Today = new Date();
  /** DatePipe範例 */
  date: string[] = dateArr;
  /** DatePipe參數 */
  Property = dateProperty;
  constructor(private router: ActivatedRoute, public api: ApiService) { }
  /** 至頂端 */
  scrollTop() {
    let top = document.getElementById("content");
    top.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngOnInit() {
    App.text = "每月獨立";
    console.log(App.find({ obj: dateProperty, key: "type" }));
    this.router.params.subscribe((el: any) => {
      this.title = el.data;
      this.load = true;
      this.api.postApi(this.title, { body: "testPHP" }).subscribe(
        data => this.content = data.ret,
        err => {
          console.log(err);
          this.content.getWay = err.err;
          this.content.body = err.ret.message;
        },
        () => this.load = false
      );
    });
  }

}
