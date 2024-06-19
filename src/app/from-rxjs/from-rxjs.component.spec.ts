import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromRxjsComponent } from './from-rxjs.component';

describe('FromRxjsComponent', () => {
  let component: FromRxjsComponent;
  let fixture: ComponentFixture<FromRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
