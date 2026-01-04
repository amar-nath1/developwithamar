import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  projects = [
    {
      title: 'Meetup',
      subtitle: 'Manage your tasks efficiently',
      description: `Developed especially for executives who are required to
schedule frequent meetings and keep track of these with
guests. Meetings are synced with Microsoft and Google
Calendar. It allows user to prepare schedule for the week and
Prioritize meetings.`,
      image: 'assets/projects/task-manager.png',
      link: ''
    },
    {
      title: 'Anywhere Commerce',
      subtitle: 'Transactions Dashboard',
      description: `An Angular-based Transaction Dashboard which which presents the
      tabular and graphical view of transaction data.`,
      image: 'assets/projects/e-commerce.png',
      link: 'https://log.payments.ac/'
    },
    {
      title: 'Anypay',
      subtitle: 'Mobile Pos',
      description: `App is developed for both Android and IOS using ionic Angular.
it is used for making transactions using a card reader. App
shows summary of all transactions. Bluetooth connectivity,
Device Location, Send Sms are some features used in this app.
`,
      image: 'assets/projects/weather-dashboard.png',
      link: ''
    },
    {
      title: 'Pristine',
      subtitle: 'Farming Tracker',
      description: `Boasts a reputation among farming companies especially in
foreign countries where farming is treated as a lucrative
business. This web app keeps track of all alpha and omega of
farming. It offers intuitive UI and allows you to mark your fields
and farms on the map, calculating the acres accurately by
itself.`,
      image: 'assets/projects/weather-dashboard.png',
      link: ''
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Showcase myself',
      description: 'A personal portfolio website developed with Angular to showcase projects, skills, and contact information, with a responsive design and smooth animations.',
      image: 'assets/projects/portfolio.png',
      link: 'https://developwithamar.web.app/'
    },
    {
      title: 'React Portfolio',
      subtitle: 'React Portfolio and projects.',
      description: 'https://coderamar.web.app/- A personal portfolio website developed with React to showcase projects, skills, and contact information.',
      image: 'assets/projects/portfolio.png',
      link: 'https://coderamar.web.app/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
