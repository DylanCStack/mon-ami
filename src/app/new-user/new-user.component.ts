import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  autoGetLocation:boolean = true;
  location;
  sentLocation;
  locationButton:string= "btn btn-md active btn-primary";
  @Input() newUser:boolean;
  @Output() newUserSender = new EventEmitter();
  constructor() { }
  setPosition(position){
    this.sentLocation = [position.coords.latitude, position.coords.longitude]
  }
  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }
    this.locationButton = "btn btn-md active btn-primary";
  }

  getLocation(){
    if(this.autoGetLocation){
      this.locationButton = "btn btn-md btn-primary"
      this.autoGetLocation = false;
    } else {
      this.locationButton = "btn btn-md active btn-primary";
      this.autoGetLocation = true;
    }
  }
  saveUser(Username, Password, Email, Age, Gender, Status){

    // console.log(Username.value);
    if(this.autoGetLocation){

    } else {
      this.sentLocation = this.location;
    }
    var newUser = {
      username: Username.value,
      password: Password.value,
      location: this.sentLocation,
      email: Email.value,
      gender: Gender.value,
      age: parseInt(Age.value),
      status: Status.value
    };
    this.newUserSender.emit(newUser);
  }

}
