import { TestBed } from '@angular/core/testing';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from './icon.service';

describe('IconService', () => {
  let iconService: IconService;

  const iconRegistryMock: Partial<MatIconRegistry> = {
    addSvgIcon: jest.fn()
  };

  const domSanitizerMock: Partial<DomSanitizer> = {
    bypassSecurityTrustResourceUrl: jest.fn().mockImplementation(s => s)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      providers: [
        IconService,
        {provide: MatIconRegistry, useValue: iconRegistryMock},
        {provide: DomSanitizer, useValue: domSanitizerMock}
      ]
    });
    iconService = TestBed.inject(IconService);
  });

  describe('addIcons', () => {
    describe(`Given a set of available icons and some unavailable`, () => {
      describe(`When registering the icons`, () => {
        const unknownIcon = '%%%%%';
        const icon1 = 'search';
        const icon2 = 'email';
        beforeEach(() => iconService.addIcons([icon1, unknownIcon, icon2, icon1]));
        it('Then it should add the icons if not already and log errors if some appear', () => {
          expect(iconRegistryMock.addSvgIcon).toHaveBeenCalledTimes(2);
        });
      });
    });
  });

  describe('addIcon', () => {
    describe(`Given a set of available icons`, () => {
      describe(`When adding an icon non available`, () => {
        it('Then it throws an explicit error', () => {
          const unknownIcon = '%%%%%';
          expect(() => iconService.addIcon(unknownIcon)).toThrow(`Icon '${unknownIcon}' is not available!`);
        });
      });

      describe(`When adding an available icon`, () => {
        const icon = 'search';
        beforeEach(() => jest.clearAllMocks());
        describe ('If the icon has not already been added', () => {
          it('Then it should add the icon', () => {
            iconService.addIcon(icon);
            expect(domSanitizerMock.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(`assets/icons/${icon}.svg`);
            expect(iconRegistryMock.addSvgIcon).toHaveBeenCalledWith(icon, `assets/icons/${icon}.svg`);
          });
        });

        describe ('If the icon has already been added', () => {
          it('Then it should do nothing', () => {
            iconService.addIcon(icon);
            iconService.addIcon(icon);
            expect(domSanitizerMock.bypassSecurityTrustResourceUrl).toHaveBeenCalledTimes(1);
            expect(iconRegistryMock.addSvgIcon).toHaveBeenCalledTimes(1);
          });
        });
      });
    });
  });
});
