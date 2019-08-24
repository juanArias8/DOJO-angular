import {Component, OnInit} from '@angular/core';
import {AppNumber} from '../../providers/models/app.number';
import {NgForm} from '@angular/forms';
import {NumberService} from '../../providers/services/number.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  convertNumberLoader = false;
  convertNumberMessage = '';
  convertNumberSuccess = null;

  number: AppNumber = {decimal: 1, roman: 'i'};

  successResponse = 'Operación exitosa';
  errorResponse = 'Operación fallida';
  invalidFormMessage = 'Datos inválidos';

  constructor(private numberService: NumberService) {
  }

  ngOnInit() {
  }

  convertNewNumber(formData: NgForm) {
    if (formData.valid) {
      this.convertNumberLoader = true;
      this.numberService.getRoman(this.number)
        .subscribe((response: AppNumber) => {
          this.number = response;
          this.convertNumberLoader = false;
          this.convertNumberSuccess = true;
          this.convertNumberMessage = this.successResponse;
        }, () => {
          this.convertNumberLoader = false;
          this.convertNumberSuccess = false;
          this.convertNumberMessage = this.errorResponse;
        });
    } else {
      this.convertNumberSuccess = false;
      this.convertNumberMessage = this.invalidFormMessage;
    }
  }

}
