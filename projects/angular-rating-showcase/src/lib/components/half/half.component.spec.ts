import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfComponent } from './half.component';

describe('HalfComponent', () => {
  let component: HalfComponent;
  let fixture: ComponentFixture<HalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
