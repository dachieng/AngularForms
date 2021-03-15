import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
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

  postError = false
  postErrorMessage = ''
  subscriptionTypes:Observable<string[]>

  onHttpError(errorResponse: any){
    console.log(errorResponse)
    this.postError = true
    this.postErrorMessage = errorResponse.console.error.errorMessage;

  }

  userSettings:UserSettings = {...this.originalUserSettings}

  constructor(private dataService:DataService) { }



  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionType()

  }

  onSubmit(form:NgForm){
    console.log(form.valid)
    this.dataService.postUserSettings(this.userSettings).subscribe(
      success => console.log("results : ",success),
      err => this.onHttpError(err)
    )
  }

}
