import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkRandomComponent } from './drink-random.component';

describe('DrinkRandomComponent', () => {
  let component: DrinkRandomComponent;
  let fixture: ComponentFixture<DrinkRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
