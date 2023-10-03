import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { IntroComponent } from '../intro/intro.component';
import { LanguagesComponent } from '../languages/languages.component';
import { ProfileComponent } from '../profile/profile.component';
import { PublicationsComponent } from '../publications/publications.component';
import { TechsComponent } from '../techs/techs.component';

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
    PublicationsComponent,
    TechsComponent,
  ],
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent {}
