import { Component, OnInit } from '@angular/core';
import { Skills } from '../../models/Skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  skills: Skills[] = [
    { skillName: 'Github', skillImage: 'assets/githublogo.jpg' },
    { skillName: 'TypeScript', skillImage: 'assets/' },
    { skillName: 'HTML', skillImage: 'assets/html-logo.png' },
    { skillName: 'CSS', skillImage: 'assets/css-logo.png' }
  ];

  ngOnInit(): void {

  }

}
