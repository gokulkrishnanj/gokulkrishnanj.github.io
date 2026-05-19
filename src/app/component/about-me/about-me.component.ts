import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  private docURL: string = 'https://drive.google.com/file/d/1C0ZpYZc4_OJh7o5sL_Zp28Ja4EWI6RU1/view';
  private docLink: string='https://drive.google.com/uc?export=download&id=1C0ZpYZc4_OJh7o5sL_Zp28Ja4EWI6RU1'

  ngOnInit(): void {
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

}
