import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyComponent } from './grey.component';

describe('GreyComponent', () => {
  let component: GreyComponent;
  let fixture: ComponentFixture<GreyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
