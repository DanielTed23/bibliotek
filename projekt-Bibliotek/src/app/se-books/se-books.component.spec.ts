import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeBooksComponent } from './se-books.component';

describe('SeBooksComponent', () => {
  let component: SeBooksComponent;
  let fixture: ComponentFixture<SeBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
