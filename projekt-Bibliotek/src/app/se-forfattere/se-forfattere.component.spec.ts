import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeForfattereComponent } from './se-forfattere.component';

describe('SeForfattereComponent', () => {
  let component: SeForfattereComponent;
  let fixture: ComponentFixture<SeForfattereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeForfattereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeForfattereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
