import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AVAILABLE_ICONS } from './icon.constant';
import { AVAILABLE_LOGOS } from './logo.constant';

/**
 * @title SVG icons
 */
@Injectable({ providedIn: 'root' })
export class IconService {
  private loadedIcons: string[] = [];

  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  addIcons(iconNames: readonly string[]): void {
    iconNames.forEach((iconName) => {
      try {
        this.addIcon(iconName);
      } catch (e) {
        console.error(e);
      }
    });
  }

  addLogos(logoNames: readonly string[]): void {
    logoNames.forEach((logoName) => {
      try {
        this.addLogo(logoName);
      } catch (e) {
        console.error(e);
      }
    });
  }

  addIcon(iconName: string): void {
    if (!AVAILABLE_ICONS.includes(iconName)) {
      throw Error(`Icon '${iconName}' is not available!`);
    }
    if (!this.loadedIcons.includes(iconName)) {
      this.iconRegistry.addSvgIcon(
        iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${iconName}.svg`
        )
      );
      this.loadedIcons.push(iconName);
    }
  }

  addLogo(logoName: string): void {
    if (!AVAILABLE_LOGOS.includes(logoName)) {
      throw Error(`Logo '${logoName}' is not available!`);
    }
    if (!this.loadedIcons.includes(logoName)) {
      this.iconRegistry.addSvgIcon(
        logoName,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `assets/logos/${logoName}.svg`
        )
      );
      this.loadedIcons.push(logoName);
    }
  }
}
