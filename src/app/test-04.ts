/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, Input, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Component({
    selector : 'ng-app',
    template : `
                <h2>Enter your first and last name</h2>
                <div>
                <b>First Name</b>
                <input type="text" id="firstName" name="firstName" (change) = "getFirstName($event.target.value)"/> <br/>
                <b>Last Name Name</b>
                <input type="text" id="lastName" name="lastName" (change) = "getLastName($event.target.value)"/> <br/>
                <b> {{ userName }}</b>
                </div>
                
                `,
    styles : []
})
export class UserNameComponent {
    
    @Input() _firstName: string;
    @Input() _lastName: string;
    userName: string;
    randomNum: number;

    getFirstName(firstName) {
        if(firstName != null) {
            this._firstName = firstName;
            this.generateUserName()
        }
    }

    getLastName(lastName) {
        if(lastName != null ) {
            this._lastName = lastName;
            this.generateUserName()
        }
    }

    generateUserName() {
        if(this._firstName != null && this._lastName != null) {
            this.randomNum = Math.floor(Math.random() * 10);
            this.userName = this._firstName.toLowerCase() + "_" + this._lastName.toLowerCase() + "_" + this.randomNum;
        }
    }

}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : UserNameComponent
            }
        ])
    ],
    declarations : [UserNameComponent]
})
export class UserNameModule {};