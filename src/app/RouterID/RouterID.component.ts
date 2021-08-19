import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@service';
import { ResponeData } from '@ts/interface';

@Component({
  selector: 'app-RouterID',
  templateUrl: './RouterID.component.html',
  styleUrls: ['./RouterID.component.scss']
})
export class RouterIDComponent implements OnInit {
  PageName: string;
  constructor(private router: ActivatedRoute, public api: ApiService) { }
  ngOnInit() {
    this.router.params.subscribe(rou => {
      this.api.getJson(rou.id).subscribe(
        (data: ResponeData) => this.PageName = data.ret,
        (err: ResponeData) => this.PageName = err.err.msg
      )
    })
  }

}
