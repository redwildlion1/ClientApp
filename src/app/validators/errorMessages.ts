import { FormGroup } from "@angular/forms";


export class ErrorMessages {
    formErrorMessages: Record<string, string> = {
        'required': 'Acest camp este obligatoriu',
        'email': 'Emailul nu este valid',
        'minlength': 'Lungimea minima este de 6 caractere',
        'maxlength': 'Lungimea maxima este de 20 caractere',
        'mismatch': 'Parolele nu coincid'
    };

    private registrationForm: FormGroup;

    constructor(registrationForm: FormGroup) {
        this.registrationForm = registrationForm;
    }

    errorMessages(control: string): string {
        const errors = this.registrationForm.get(control)?.errors && this.registrationForm.get(control)?.touched ? this.registrationForm.get(control)?.errors : null;
        if (errors) {
            for (const errorType in errors) {
                if (errors[errorType]) {
                    console.log(errorType);
                    return this.formErrorMessages[errorType];
                }
            }
        }
        return '';
    }

    classForControl(control: string): string {
        const errors = this.registrationForm.get(control)?.errors;
        if (errors && this.registrationForm.get(control)?.touched) {
            return 'is-invalid';
        }
        return '';
    }
}
