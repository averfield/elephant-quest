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
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  sixthFormGroup!: FormGroup;
  seventhFormGroup!: FormGroup;

  firstQuestionText: string = "1 + 1";
  secondQuestionText: string = "Якого кольору банан?";
  thirdQuestionText: string = "";
  fourthQuestionText: string = "";
  fifthQuestionText: string = "";
  sixthQuestionText: string = "";
  seventhQuestionText: string = "";
  finalText: string = "А ти харош...";

  constructor(private _formBuilder: FormBuilder) {
    this.initQuestion();
  }

  ngOnInit() { }

  private initQuestion(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["2"])]],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["жовтий"])]],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["жовтий"])]],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["жовтий"])]],
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["жовтий"])]],
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["жовтий"])]],
    });
    this.seventhFormGroup = this._formBuilder.group({
      seventhCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["жовтий"])]],
    });
  }

  answerValidator(userAnswer: string, correctAnswers: string[]): boolean {
    return correctAnswers.includes(userAnswer);
  }
}
