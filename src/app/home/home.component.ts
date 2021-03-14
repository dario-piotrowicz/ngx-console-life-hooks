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
    {
      name: 'Frameworks Example',
      description: `Extremely simple example the use of the decorator on three elements and their parent,
      in which the use of indentation and different color schemes helps distinguish the logs`,
      routerLink: '/frameworks-example',
    },
  ];
}
