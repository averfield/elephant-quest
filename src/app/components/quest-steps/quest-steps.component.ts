import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnswerValidatorService } from 'src/app/services/answer-validator-service';

@Component({
  selector: 'quest-steps',
  templateUrl: './quest-steps.component.html',
  styleUrls: ['./quest-steps.component.scss']
})
export class QuestStepsComponent {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  sixthFormGroup!: FormGroup;
  seventhFormGroup!: FormGroup;

  firstQuestionText: string = "Щиро вдячна, що ви вирішили приєднатись до відновлення мого свята. У мене виникає відчуття якоїсь підстави,вони надіслали мені це фото з цими незрозумілими буквами і знаками. Можливо вам вдасться здогадатись що це?";
  secondQuestionText: string = "уууу, ви це розгадали!!! дякую) Продовжимо грати за їхніми правилами?! Здається люди, які це затіяли з специфічним почуттям гумору. Що означають ці фрази <br> <br> Цнотливість у маленькому селі <br> Кінець <br> Дивіться вниз ";
  thirdQuestionText: string = "Тьфу, то це ж нормальні фільми, може подивимось один з них в кінці вечора? Щось я відволіклась, біля телевізора знайшла ось цю картинку, знову якась дурня..Оу, тут ще й дві різні шкарпетки. Чому різні?";
  fourthQuestionText: string = "Іграшка? та поки я знайшла тут цю іграшку то дуже втомилась, присяду. А вам ось наступний незрозумілий текст: <br> <br> ОЩ ЕН МЖОЕ  ИЛИЗИБТ  ПУАЛ  У НТИУУТККРИ?";
  fifthQuestionText: string = "Я знайшла сейф, але тут пароль і листівка.";
  sixthQuestionText: string = "єєє, відкрився! Знайшла записку і темну жорстку волосину середньої довжини. Здається він/вона/вони люблять покер, хмм";
  seventhQuestionText: string = "Mоя Оленка знайшла запаролений телефон з смскою, але цей пароль не підходить для розблокування? який ж тоді пароль? Невже у телефоні є щось цінне?";
  eightsQuestionText: string = "Серед смс знайшла ще одну цікаву Заглянула в галерею і тут фото купи контейнерів для лінз, їх ніби порівнювали.";
  finalText: string = "Ну туди вже біжіть самі, я надто втомилась.";

  finalBtnClicked = false;

  constructor(private _formBuilder: FormBuilder) {
    this.initQuestion();
  }

  private initQuestion(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["Левчик"])]],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["секс у великому місті Початок Не дивіться вгору "])]],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["Іграшка"])]],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["кути", "кут" ])]],
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["045"])]],
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["Оленка","Олена"])]],
    });
    this.seventhFormGroup = this._formBuilder.group({
      seventhCtrl: ['', [Validators.required, AnswerValidatorService.answerValidator(["123987 "])]],
    });
  }
}
