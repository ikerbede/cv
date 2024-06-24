import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CvRoute } from '../cv-route.enum';

@Component({
  selector: 'cv-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Output() navigate = new EventEmitter<string>();

  readonly routes = [
    { name: CvRoute.Profile, icon: 'person', path: 'profile' },
    { name: CvRoute.Techs, icon: 'code', path: 'techs' },
    { name: CvRoute.Experiences, icon: 'work', path: 'experiences' },
    { name: CvRoute.Publications, icon: 'article', path: 'publications' },
    { name: CvRoute.Education, icon: 'school', path: 'education' },
    { name: CvRoute.Languages, icon: 'language', path: 'languages' },
  ];

  onNavigate(routePath: string): void {
    this.navigate.emit(routePath);
  }
}
