import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  experiences = [
    {
      role: 'Software Developer',
      company: 'Coding Nebula',
      logo: 'assets/icon/company-enterprise.svg',
      duration: 'Apr 2023 – 30 Nov 2025',
      summary: 'Working on enterprise-grade Angular applications for a global client, focusing on scalability, performance, and maintainability.',
      highlights: [
        'Developed transaction monitoring and payment tracking dashboards handling high-volume data.',
        'Implemented state management using NgRx with effects, reducers, and selectors.',
        'Integrated secure REST APIs and optimized data loading using RxJS.',
        'Wrote unit tests using Jasmine and Karma to ensure long-term stability.',
        'Collaborated with onshore teams and participated in client calls.'
      ],
      techStack: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'Jasmine', 'Karma']
    },
    {
      role: 'Frontend Developer',
      company: 'Aar Exports',
      logo: 'assets/icon/company-previous.svg',
      duration: 'Mar 2021 – Aug 2022',
      summary: 'Built and maintained responsive web applications while strengthening fundamentals of frontend engineering.',
      highlights: [
        'Developed reusable Angular components and services.',
        'Worked closely with backend teams for API integration.',
        'Improved UI performance and cross-browser compatibility.'
      ],
      techStack: ['Angular', 'JavaScript', 'HTML', 'CSS']
    }
  ];

  // trackBy improves rendering performance for long lists
  trackByExperience(index: number, item: any) {
    return item.company + '|' + item.role;
  }
}
