import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@service';
import { PHP_Content } from '@ts/interface';

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
  constructor(private router: ActivatedRoute, public api: ApiService) { }
  ngOnInit() {
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
