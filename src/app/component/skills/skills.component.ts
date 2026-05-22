import { Component, OnInit } from '@angular/core';
import { Skills } from '../../models/Skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  public currentIndex: number = 0;
  public skillDetailContainerWidth: number = 180; // card width + gap (110 + 70)


  public skills: Skills[] = [
    { skillName: 'Java', skillImage: 'assets/javalogo.jpg' },
    { skillName: 'Springboot', skillImage: 'assets/springbootlogo.jpg' },
    { skillName: 'HTML', skillImage: 'assets/htmllogo.jpg' },
    { skillName: 'CSS', skillImage: 'assets/csslogo.jpg' },
    { skillName: 'JavaScript', skillImage: 'assets/javascriptlogo.jpg' },
    { skillName: 'Angular', skillImage: 'assets/angularlogo.jpg' },
    { skillName: 'Git', skillImage: 'assets/gitlogo.jpg' },
    { skillName: 'SQL', skillImage: 'assets/sqllogo.jpg' },
    { skillName: 'MongoDB', skillImage: 'assets/mongodblogo.jpg' },
    { skillName: 'AWS', skillImage: 'assets/awslogo.jpg' },
    { skillName: 'Kafka', skillImage: 'assets/kafkalogo.jpg' },
    { skillName: 'Redis', skillImage: 'assets/redislogo.jpg' },
    { skillName: 'Python', skillImage: 'assets/pythonlogo.jpg' }
  ];

  ngOnInit(): void {

  }

  public updateIndex(a: string): void {
    console.log(this.currentIndex + " " + a);
    if (this.currentIndex > 0 && a === 'prev') {
      this.currentIndex--;
    }
    if (this.currentIndex < this.skills.length - 1 && a === 'next') {
      this.currentIndex++;
    }
  }
}
