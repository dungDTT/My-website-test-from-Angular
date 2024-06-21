import { ComponentFixture, TestBed } from '@angular/core/testing';

import { testformComponent } from './test-form.component';

describe('testformComponent', () => {
  let component: testformComponent;
  let fixture: ComponentFixture<testformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [testformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(testformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
