import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRatingShowcaseComponent } from './angular-rating-showcase.component';

describe('AngularRatingShowcaseComponent', () => {
  let component: AngularRatingShowcaseComponent;
  let fixture: ComponentFixture<AngularRatingShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularRatingShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularRatingShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
