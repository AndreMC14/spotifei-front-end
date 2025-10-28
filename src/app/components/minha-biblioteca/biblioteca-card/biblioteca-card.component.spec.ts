import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaCardComponent } from './biblioteca-card.component';

describe('BibliotecaCardComponent', () => {
  let component: BibliotecaCardComponent;
  let fixture: ComponentFixture<BibliotecaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibliotecaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
