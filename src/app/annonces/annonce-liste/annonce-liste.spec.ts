import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceListe } from './annonce-liste';

describe('AnnonceListe', () => {
  let component: AnnonceListe;
  let fixture: ComponentFixture<AnnonceListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnonceListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
