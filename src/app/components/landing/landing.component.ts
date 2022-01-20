import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [`
    #hero{
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%);
      height:700px;
      overflow:hidden;
    }

    @media screen and (min-width: 768px) {
      #hero{
          -webkit-clip-path: ellipse(150% 87% at 93% 13%);
          clip-path: ellipse(150% 87% at 93% 13%);
          height: 430px;
      }
    }

    @media screen and (min-width: 1300px){
      #hero > img {
        position: absolute;
      }

      #hero > div > p { 
        max-width: 450px;
      }
    }

    @media screen and (max-width: 1300px){
      #hero {
        height: 600px;
      }

      #hero > img {
        position:static;
        transform: scale(1);
        margin-left: auto;
      }

      #hero > div {
        width: 100%;
      }

      #hero > div > p {
        width: 100%;
        max-width: 100%;
      }
    }
  `]
})
export class LandingComponent implements OnInit {
  
  themeElement: any;

  constructor() { }

  ngOnInit(): void {
    this.themeElement = document.getElementById('theme-css');
    this.themeElement.setAttribute('href','assets/theme/saga-blue/theme.css');
  }

  ngOnDestroy(): void {
    this.themeElement.setAttribute('href', 'assets/theme/lara-light-indigo/theme.css');
  }

}