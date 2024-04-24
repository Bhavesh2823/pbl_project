import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('contactSection') contactSection!: ElementRef;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    // AOS.init();
  }

  ngAfterViewInit(): void {
    // Scroll to the contact section after the view has been initialized
    this.scrollIfNeeded();
  }

  scrollToHod(event: Event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Use Angular Router to navigate to the contact component within the same page
    this.router.navigate(['/'], { fragment: 'hoddesk' }).then(() => {
      // Scroll to the contact section manually
      this.scrollToElement('hoddesk');
    });
  }

  scrollToGallary(event: Event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Use Angular Router to navigate to the contact component within the same page
    this.router.navigate(['/'], { fragment: 'galary' }).then(() => {
      // Scroll to the contact section manually
      this.scrollToElement('gallary');
    });
  }

  scrollToSyllabus(event: Event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Use Angular Router to navigate to the contact component within the same page
    this.router.navigate(['/'], { fragment: 'syllabus' }).then(() => {
      // Scroll to the contact section manually
      this.scrollToElement('syllabus');
    });
  }

  private scrollIfNeeded(): void {
    // Check if there is a fragment in the URL and scroll to the corresponding section
    const fragment = this.router.parseUrl(this.router.url).fragment;

    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  private scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}