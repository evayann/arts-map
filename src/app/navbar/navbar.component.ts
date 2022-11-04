import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  items!: MenuItem[];

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-home',
        tooltipOptions: {
          tooltipLabel: "About this project"
        },
        command: () => this.router.navigate([''])
      },
      {
        icon: 'pi pi-map',
        tooltipOptions: {
          tooltipLabel: "Draw map"
        },
        command: () => this.router.navigate(['maps'])
      },
      {
        icon: 'pi pi-user',
        tooltipOptions: {
          tooltipLabel: "About me"
        },
        command: () => this.router.navigate(['me'])
      }
    ];
  }
}
