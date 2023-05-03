import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacterComponent } from './list-character.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListCharacterComponent', () => {
  let component: ListCharacterComponent;
  let fixture: ComponentFixture<ListCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
