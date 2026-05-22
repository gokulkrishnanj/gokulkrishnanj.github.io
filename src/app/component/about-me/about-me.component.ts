import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  public phoneNo: string = '';
  public mailId: string = '';
  public githubURL: string = '';
  public linkedInURL: string = '';
  public routeObject: Record<string, string> = {};
  public isFormClicked:boolean=false;

  constructor(private router: Router) { }


  private docURL: string = 'https://drive.google.com/file/d/1C0ZpYZc4_OJh7o5sL_Zp28Ja4EWI6RU1/view';
  private docLink: string = 'https://drive.google.com/uc?export=download&id=1C0ZpYZc4_OJh7o5sL_Zp28Ja4EWI6RU1'

  ngOnInit(): void {
    this.phoneNo = '+91 6382781047';
    this.mailId = 'gokulkrishnanj27@gmail.com'
    this.githubURL = 'https://github.com/gokulkrishnanj';
    this.linkedInURL = 'https://www.linkedin.com/in/jgokulkrishnan/'
    this.routeObject = { 'about-me': '/', 'skills': '/skills', 'projects': '/projects', 'experience': '/experience' }
  }

  public previewPDF() {
    window.open(this.docURL, '_blank');
  }

  public downloadDocument() {
    const link = document.createElement('a');
    link.href = this.docLink;
    link.download = 'Gokul_Resume.pdf';
    link.click();
  }

  public navigateOnClick(route: string): void {
    const targetRoute = this.routeObject[route];
    if (targetRoute) {
      this.router.navigate([targetRoute]);
    } else {
      console.error(`No route found for ${route}`);
    }
  }

  public openForm(){
    this.isFormClicked=true;
  }

  public closeForm(){
    this.isFormClicked=false;
  }

}
