import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'form-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings:UserSettings = {
    name : null,
    emailOffers : null,
    subscriptionType:null,
    interfaceStyle:null,
    notes:null
  }

  userSettings:UserSettings = {...this.originalUserSettings}

  constructor(private dataService:DataService) { }



  ngOnInit(): void {

  }

  onSubmit(form:NgForm){
    console.log(form.valid)
    this.dataService.postUserSettings(this.userSettings).subscribe(
      success => console.log("results : ",success),
      err => console.log("error : ", err)
    )
  }

}
