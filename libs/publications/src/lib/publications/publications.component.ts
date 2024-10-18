import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Publication } from '../publication.model';
import { PUBLICATIONS_MEDIUM } from '../publications.constant';

@Component({
  selector: 'cv-publications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent {
  publications: readonly Publication[] = PUBLICATIONS_MEDIUM;
}
