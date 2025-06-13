import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceFinancement } from './annonce-financement';

describe('AnnonceFinancement', () => {
  let component: AnnonceFinancement;
  let fixture: ComponentFixture<AnnonceFinancement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnonceFinancement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceFinancement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
