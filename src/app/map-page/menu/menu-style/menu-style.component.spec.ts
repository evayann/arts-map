import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStyleComponent } from './menu-style.component';

describe('MenuStyleComponent', () => {
  let component: MenuStyleComponent;
  let fixture: ComponentFixture<MenuStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
