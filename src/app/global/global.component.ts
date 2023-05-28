import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from '../education/education.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { LanguagesComponent } from '../languages/languages.component';
import { ProfileComponent } from '../profile/profile.component';
import { TechsComponent } from '../techs/techs.component';
import { IntroComponent } from '../intro/intro.component';

@Component({
  selector: 'cv-global',
  standalone: true,
  imports: [
    CommonModule,
    EducationComponent,
    ExperiencesComponent,
    IntroComponent,
    LanguagesComponent,
    ProfileComponent,
    TechsComponent,
  ],
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent {}
