import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpwComponent } from './dpw.component';

describe('DpwComponent', () => {
  let component: DpwComponent;
  let fixture: ComponentFixture<DpwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
