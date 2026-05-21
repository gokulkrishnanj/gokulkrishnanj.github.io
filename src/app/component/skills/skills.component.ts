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
    { skillName: 'Java', skillImage: 'assets/javalogo.jpg' },
    { skillName: 'Springboot', skillImage: 'assets/springbootlogo.jpg' },
    { skillName: 'HTML', skillImage: 'assets/htmllogo.jpg' },
    { skillName: 'CSS', skillImage: 'assets/csslogo.jpg' },
    { skillName: 'JavaScript', skillImage: 'assets/javascriptlogo.jpg' },
    { skillName: 'Angular', skillImage: 'assets/angularlogo.jpg' },
    { skillName: 'Git', skillImage: 'assets/gitlogo.jpg' },
    { skillName: 'SQL', skillImage: 'assets/sqllogo.jpg' },
    { skillName: 'MongoDB', skillImage: 'assets/mongodblogo.jpg' },
    { skillName: 'AWS', skillImage: 'assets/awslogo.jpg' }
  ];

  ngOnInit(): void {

  }

}
