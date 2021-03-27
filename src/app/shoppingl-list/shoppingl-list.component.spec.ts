import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglListComponent } from './shoppingl-list.component';

describe('ShoppinglListComponent', () => {
  let component: ShoppinglListComponent;
  let fixture: ComponentFixture<ShoppinglListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppinglListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinglListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
