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
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help the last remaining elf to find mana tanks to fight against the attacking orcs. ',
      link: '',
      git: '',
    },
    {
      img: 'mockupPokedex.png',
      tech: 'HTML | CSS | Javascript | API',
      name: 'Pokedex',
      description:
        'Based on the PokéAPI a simple libary that provides and catalogues pokémon information',
      link: '',
      git: '',
    },
    {
      img: 'mockupJoin.png',
      tech: 'HTML | CSS | Javascript',
      name: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize task using drag and drop functions, assign users and categories. This project was developed by group work.',
      link: '',
      git: '',
    },
  ];

  openNewWindow(url: string) {
    window.open(url, '_blank');
  }
}
