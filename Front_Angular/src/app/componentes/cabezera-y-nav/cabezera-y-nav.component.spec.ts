import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraYNavComponent } from './cabezera-y-nav.component';

describe('CabezeraYNavComponent', () => {
  let component: CabezeraYNavComponent;
  let fixture: ComponentFixture<CabezeraYNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabezeraYNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabezeraYNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
