import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperianceComponent } from './experiance.component';

describe('ExperianceComponent', () => {
  let component: ExperianceComponent;
  let fixture: ComponentFixture<ExperianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
