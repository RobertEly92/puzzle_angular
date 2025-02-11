import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleListComponent } from './puzzle-list.component';

describe('PuzzleListComponent', () => {
  let component: PuzzleListComponent;
  let fixture: ComponentFixture<PuzzleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
