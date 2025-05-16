import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrewImageComponent } from './andrew-image.component';

describe('AndrewImageComponent', () => {
  let component: AndrewImageComponent;
  let fixture: ComponentFixture<AndrewImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndrewImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndrewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
