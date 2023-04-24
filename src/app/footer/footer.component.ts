import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  emailstring = 'florianisenberg@gmail.com';

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
