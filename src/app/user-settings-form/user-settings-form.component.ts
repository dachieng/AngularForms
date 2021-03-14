import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.valid)
  }

}
