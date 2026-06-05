import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  public isContactUsClicked:boolean=false;
  public isMobileView:boolean=false;
  public isHomeImageDisplayed:boolean=false;
  public isHamburgerMenuClicked:boolean=false;

  constructor(private router: Router,
    private breakPointObserver: BreakpointObserver
  ) { }


  private docURL: string = 'https://drive.google.com/file/d/1C0ZpYZc4_OJh7o5sL_Zp28Ja4EWI6RU1/view';
  private docLink: string = 'https://drive.google.com/uc?export=download&id=1C0ZpYZc4_OJh7o5sL_Zp28Ja4EWI6RU1'

  ngOnInit(): void {
        this.breakPointObserver
      .observe(['(max-width: 1000px)'])
      .subscribe(result => {
        this.isHomeImageDisplayed = !result.matches;
      });

      this.breakPointObserver
      .observe(['(min-width: 700px)'])
      .subscribe(result=> {
        this.isMobileView = !result.matches;
      });

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

  public openContactMe(){
    this.isContactUsClicked= true;
  }

  public closeContactMe(){
    this.isContactUsClicked=false;
  }

}
