import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

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
    { name: 'Profile', icon: 'person', path: 'profile' },
    { name: 'Techs', icon: 'code', path: 'techs' },
    { name: 'Experiences', icon: 'work', path: 'experiences' },
    { name: 'Publications', icon: 'article', path: 'publications' },
    { name: 'Education', icon: 'school', path: 'education' },
    { name: 'Languages', icon: 'language', path: 'languages' },
  ];

  onNavigate(routePath: string): void {
    this.navigate.emit(routePath);
  }
}
