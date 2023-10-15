import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppDogsListComponent } from './app-dogs-list.component';

describe('AppDogsListComponent', () => {
  let component: AppDogsListComponent;
  let fixture: ComponentFixture<AppDogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDogsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppDogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
