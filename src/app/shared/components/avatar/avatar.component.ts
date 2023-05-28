import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'cv-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() diameter = 40;
  @Input() radius = 50;
  @Input() path!: string;
  @Input() description = '';
  @Input() imageWidth = 40;
  @Input() top = 0;
  @Input() left = 0;
}
