import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  groups = [
    {
      title: 'Frontend',
      skills: ['Angular', 'React', 'TypeScript', 'HTML & CSS', 'Bootstrap', 'Ionic', 'RxJS', 'NgRx']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'REST APIs', 'SQL', 'Express.js']
    },
    {
      title: 'Other',
      skills: ['Testing (Jasmine/Karma)', 'GitHub Actions']
    }
  ];

  constructor() {}

}
