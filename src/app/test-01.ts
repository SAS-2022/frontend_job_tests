/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input,NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <b>Loan Total Value:</b> <div> <input type = "text"  (change) = "calculateValue($event.target.value)"/></div><br/>
                    <b>Monthly Payment:</b> {{"$" + monthly_payment}} <br/>
                    <b>Late Payment Fee : {{"$" + late_payment}}</b> <br/>
                </div>`
                
})

export class Test01Component {

    @Input() loan_amount:number;
    monthly_payment:any;
    late_payment: any;

    calculateValue(loan_amount:number) {
        if(loan_amount == null) {
            
           this.monthly_payment = 'N/A'
            this.late_payment = 'N/A'
        } else {
            this.monthly_payment = loan_amount * 0.02;
            this.late_payment = loan_amount * 0.05
            
        }
    }
    
}



@NgModule({
    imports : [
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component]

    
})
export class Test01Module {   
}