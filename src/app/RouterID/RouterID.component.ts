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
      let Observer = {
        next: (data: ResponeData) => this.PageName = data.ret,
        error: (err: ResponeData) => this.PageName = err.err.msg
      }
      if (rou.id.length > 3) {
        let uu = rou.id.substr(0, 3);
        this.api.postApi(uu, { body: `post${uu}` }).subscribe(Observer)
      } else {
        this.api.getApi(rou.id).subscribe(Observer)
      }
    })
  }

}
