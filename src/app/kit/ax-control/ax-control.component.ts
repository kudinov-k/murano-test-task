import { AfterViewInit, Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { ValidationComponent } from '../validation/validation.component';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'ax-control',
  templateUrl: './ax-control.component.html',
  styleUrls: ['./ax-control.component.scss'],
})
export class AxControlComponent implements AfterViewInit {
  @Input() title: string | undefined;

  @ContentChild(NgControl) inputControl: NgControl | undefined;
  @ContentChildren(ValidationComponent) validations: QueryList<ValidationComponent> | undefined;

  validationsObject: Map<string, TemplateRef<any>> = new Map();

  get errors(): string[] {
    if (this.inputControl?.control?.errors) {
      return Object.keys(this.inputControl?.control.errors);
    }

    return [];
  }

  ngAfterViewInit() {
    setTimeout(() =>
      this.validations?.map(cmp => {
        this.validationsObject.set(cmp.when, cmp.template);
      })
    );
  }

  onFocus() {
    console.log(123);
  }
}
