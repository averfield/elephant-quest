import { Injectable } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";

@Injectable()
export class AnswerValidatorService {
    static answerValidator(correctAnswers: string[]): ValidationErrors | null {
        return (control: FormControl) => {
            const userInput = this.processString(control.value);
            return !correctAnswers.map(el => this.processString(el)).includes(userInput) ? {answerIncorrect: {value: userInput}} : null;
        }
    }

    static processString(text: string): string {
        return text.toLocaleLowerCase().replace(/[.,;:\s]/g, "");
    }
}