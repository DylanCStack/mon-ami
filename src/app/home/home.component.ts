import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UsersService]
})
export class HomeComponent implements OnInit {
  users;//: any[];
  constructor(private UsersService: UsersService) { }

  ngOnInit() {
    this.UsersService.getUsers().subscribe(snap=>{
      this.users = snap;
    });
  }

}
