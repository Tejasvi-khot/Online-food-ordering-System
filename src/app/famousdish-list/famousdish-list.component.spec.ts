import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousdishListComponent } from './famousdish-list.component';

describe('FamousdishListComponent', () => {
  let component: FamousdishListComponent;
  let fixture: ComponentFixture<FamousdishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousdishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousdishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
