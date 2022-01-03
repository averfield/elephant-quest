import { Injectable } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";

@Injectable()
export class AnswerValidatorService {
    static answerValidator(correctAnswers: string[]): ValidationErrors | null {
        return (control: FormControl) => {
            const userInput = control.value;
            return !correctAnswers.includes(userInput) ? {answerIncorrect: {value: userInput}} : null;
        }
    }
}