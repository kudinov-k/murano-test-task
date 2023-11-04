import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  model = '';

  control = new FormControl('', [Validators.required, Validators.minLength(6)]);
  controlDisabled = new FormControl({ value: '', disabled: true });
}
