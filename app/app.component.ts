import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul>
    <li *ngFor="let animal of animals">
      <span> {{ animal.name }} </span>
      <small> {{ animal.category }} </small>
    </li>
  </ul>
  <p *ngIf="animals.length > 3"> There are many animals! </p>`
})
export class AppComponent {
  animals: Array<Object> = [
    {
      id: 1,
      category: 'mammal',
      name: 'Dog'
    }, {
      id: 2,
      category: 'oviparous',
      name: 'Duck'
    }, {
      id: 3,
      category: 'mammal',
      name: 'Elephant'
    }, {
      id: 4,
      category: 'reptile',
      name: 'Snake'
    }
  ];
}
