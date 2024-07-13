import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreThanHalfComponent } from './more-than-half.component';

describe('MoreThanHalfComponent', () => {
  let component: MoreThanHalfComponent;
  let fixture: ComponentFixture<MoreThanHalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreThanHalfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreThanHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
