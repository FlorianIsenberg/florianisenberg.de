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
        'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf der letzten verbliebenen Elfe, Manatanks zu finden, um gegen die angreifenden Orks zu kämpfen.',
      link: 'https://elf-of-the-silver-forest.florianisenberg.de/',
      git: 'https://github.com/FlorianIsenberg/Elf-of-the-silver-forest',
    },
    {
      img: 'mockupPokedex.png',
      tech: 'HTML | CSS | Javascript | API',
      name: 'Pokedex',
      description:
        'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert',
      link: 'https://pokedex.florianisenberg.de/',
      git: 'https://github.com/FlorianIsenberg/myPokedex',
    },
    {
      img: 'mockupJoin.png',
      tech: 'HTML | CSS | Javascript',
      name: 'Join',
      description:
        'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzern und Kategorien zu. Dieses Projekt wurde in Gruppenarbeit entwickelt.',
      link: 'https://join.florianisenberg.de/',
      git: 'https://github.com/FlorianIsenberg/myJoin',
    },
  ];

  openNewWindow(url: string) {
    window.open(url, '_blank');
  }
}
