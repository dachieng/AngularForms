import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'form-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings:UserSettings = {
    name : "Dorcas",
    emailOffers : true,
    subscriptionType:"Lifetime",
    interfaceStyle:"Light",
    notes:"Im Dorcas Oloo"
  }

  userSettings:UserSettings = {...this.originalUserSettings}

  constructor() { }

  ngOnInit(): void {
  }

}
