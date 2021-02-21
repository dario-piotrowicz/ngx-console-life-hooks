import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public examples = [
    {
      name: 'Label Example',
      description:
        'Example showing the use of the decorator for a label component',
      routerLink: '/label-example',
    },
    {
      name: 'Input Example',
      description: `Example showing the use of the decorator for an input component and its
      parent with different color schemes used to distinguish the two types of logs`,
      routerLink: '/input-example',
    },
  ];
}
