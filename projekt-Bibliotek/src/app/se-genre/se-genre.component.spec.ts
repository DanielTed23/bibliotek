import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeGenreComponent } from './se-genre.component';

describe('SeGenreComponent', () => {
  let component: SeGenreComponent;
  let fixture: ComponentFixture<SeGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeGenreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
