import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessThanHalfComponent } from './less-than-half.component';

describe('LessThanHalfComponent', () => {
  let component: LessThanHalfComponent;
  let fixture: ComponentFixture<LessThanHalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessThanHalfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessThanHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
