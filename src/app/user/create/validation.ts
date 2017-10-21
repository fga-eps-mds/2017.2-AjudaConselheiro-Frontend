import {AbstractControl} from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       const senha = AC.get('senha').value; // to get value in input tag
       const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (senha !== confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors( {MatchPassword: true});
        } else {
            console.log('true');
            return null;
        }
    }
}
