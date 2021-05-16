import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profiles: any;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.service.getTweetAll().subscribe(
      (res:any) => {
        console.log(res);
        this.profiles = res.Items;
      },
      err => console.error(err)
    );
  }

}
