import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatIconModule, MatButtonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateHero();
    }
  }





  
  animateHero(): void {
    const heroContent = document.querySelector('.heroContent');
    const featureCards = document.querySelectorAll('.featureCard');

    if (heroContent) {
      gsap.from(heroContent, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
      });
    }

    if (featureCards.length > 0) {
      gsap.from(featureCards, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        delay: 1,
      });
    }
  }
}
