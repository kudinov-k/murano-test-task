import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'validation[when]',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {
  @Input() when!: string;
  @ViewChild('template') template!: TemplateRef<any>;
}
