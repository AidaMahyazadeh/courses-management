import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyModalComponent } from './modify-modal.component';

describe('ModifyModalComponent', () => {
  let component: ModifyModalComponent;
  let fixture: ComponentFixture<ModifyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyModalComponent]
    });
    fixture = TestBed.createComponent(ModifyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
