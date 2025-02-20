import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeBrugereComponent } from './se-brugere.component';

describe('SeBrugereComponent', () => {
  let component: SeBrugereComponent;
  let fixture: ComponentFixture<SeBrugereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeBrugereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeBrugereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
