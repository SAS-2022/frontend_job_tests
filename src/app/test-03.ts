/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component,  Input, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';



@Component({
    selector : 'ng-app',
    template : `<form>
                    <h2>Login</h2>
                    <br/>
                    <input type="email" value="" name="email" (change) = "checkEmail($event.target.value)"/>

                    <br/>
                    <div *ngIf="errorEmail !== null">{{ errorEmail}} </div>
                    <input type="password" value="" name="password" (change) = "checkPassword($event.target.value)"/>
                    <div *ngIf="errorPass !== null">{{ errorPass}} </div>
                    <button [disabled] = "!logged_in ? true: null" type="submit">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {

    
    @Input() _email:string = "";
    @Input() _password:string = "";
    logged_in = false;
    validEmail = false;
    validPass = false;
    errorEmail: string;
    errorPass: string;

    ngInit() {
        this.logged_in = false;
    }

    checkEmail(email: string) {
        if(email.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")) {
           this._email = email;
           this.validEmail = true;
        } else {
            this.errorEmail = "Email is not Valid"
        }
    }

    checkPassword(pass: string) {
        if(pass.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
            console.log("There is a match");
            this._password = pass;
            this.validPass = true;
            this.activateSubmit();
        } else {
            this.errorPass = "Password is not valid"
        }
    }

    activateSubmit() {
        if(this.validEmail && this.validPass) {
            this.logged_in = true;
        }
    }

    
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};