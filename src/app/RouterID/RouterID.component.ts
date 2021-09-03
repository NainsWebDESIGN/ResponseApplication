import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@service';

@Component({
  selector: 'app-routerID',
  templateUrl: './routerID.component.html',
  styleUrls: ['./routerID.component.scss']
})
export class RouterIDComponent implements OnInit {
  /** router實作取得的id */
  title: string;
  constructor(private router: ActivatedRoute, public api: ApiService) { }
  ngOnInit() {
    this.router.params.subscribe((el: any) => this.title = el.data);
  }

}
