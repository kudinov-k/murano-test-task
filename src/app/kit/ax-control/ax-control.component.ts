import { Component, ContentChild, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'ax-control',
  templateUrl: './ax-control.component.html',
  styleUrls: ['./ax-control.component.scss'],
})
export class AxControlComponent {
  @Input() title: string | undefined;
  @ContentChild(NgControl) inputControl: NgControl | undefined;

  get errors(): string[] {
    if (this.inputControl?.control?.errors) {
      return Object.keys(this.inputControl?.control.errors);
    }

    return [];
  }
}
