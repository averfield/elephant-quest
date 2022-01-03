import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnswerValidatorService } from 'src/app/services/answer-validator-service';

@Component({
  selector: 'quest-steps',
  templateUrl: './quest-steps.component.html',
  styleUrls: ['./quest-steps.component.scss']
})
export class QuestStepsComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["2"])]],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["жовтий"])]],
    });
  }

  answerValidator(userAnswer: string, correctAnswers: string[]): boolean {
    return correctAnswers.includes(userAnswer);
  }
}
