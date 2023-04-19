import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillsImg = [
    'angular.png',
    'css.png',
    'typescript.png',
    'javascript.png',
    'html.png',
    'git.png',
    'firebase.png',
    'scrum.png',
    'api.png',
    'material.png',
  ];
}
