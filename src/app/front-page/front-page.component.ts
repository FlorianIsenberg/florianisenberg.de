import { Component } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
})
export class FrontPageComponent {
  emailstring = 'mailto:kontakt@florianisenberg.de';

  links = [
    {
      github: 'https://github.com/FlorianIsenberg',
      linkedin: 'https://www.linkedin.com/in/florian-isenberg/',
    },
  ];

  openNewWindow(url: string) {
    window.open(url, '_blank');
  }
}
