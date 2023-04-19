import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects = [
    {
      img: 'mockupEOTSF.png',
      tech: 'HTML | CSS | Javascript',
      name: 'Elves of the silver forest',
      link: '',
      git: '',
    },
    {
      img: 'mockupPokedex.png',
      tech: 'HTML | CSS | Javascript | API',
      name: 'Pokedex',
      link: '',
      git: '',
    },
    {
      img: 'mockupJoin.png',
      tech: 'HTML | CSS | Javascript',
      name: 'Join',
      link: '',
      git: '',
    },
  ];

  openNewWindow(url: string) {
    window.open(url, '_blank');
  }
}
