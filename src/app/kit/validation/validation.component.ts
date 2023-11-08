import { AfterContentInit, Component, Host, Input, Optional } from '@angular/core';
import { AxControlComponent } from '../ax-control/ax-control.component';

@Component({
  selector: 'validation[when]',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements AfterContentInit {
  @Input() when!: string;
  showError: boolean = false;

  constructor(@Host() @Optional() private axControl: AxControlComponent) {
  }

  ngAfterContentInit() {
    this.checkErrors();

    this.axControl.inputControl?.valueChanges?.subscribe(
      () => {
        this.checkErrors();
      }
    );
  }

  private checkErrors() {
    this.showError = !!this.axControl.inputControl?.hasError(this.when);
  }
}
