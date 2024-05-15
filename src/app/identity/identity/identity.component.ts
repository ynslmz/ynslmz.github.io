import { Component } from '@angular/core';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss'],
})
export class IdentityComponent {
  constructor() {}
  currentYear = new Date().getFullYear();

  links = [
    {
      url: 'https://twitter.com/ynslmz',
      icon: 'bi bi-twitter',
    },
    {
      url: 'https://www.linkedin.com/in/ynslmz/',
      icon: 'bi bi-linkedin',
    },
    {
      url: 'https://www.instagram.com/yns.lmz/',
      icon: 'bi bi-instagram',
    },
    {
      url: 'https://stackoverflow.com/users/3129784/ynslmz',
      icon: 'fab fa-stack-overflow',
    },
    {
      url: 'https://github.com/ynslmz',
      icon: 'bi bi-github',
    },
    {
      url: 'mailto:yns4832@gmail.com',
      icon: 'bi bi-envelope',
    },
  ];
}
