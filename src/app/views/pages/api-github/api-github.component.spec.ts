import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGithubComponent } from './api-github.component';

describe('ApiGithubComponent', () => {
  let component: ApiGithubComponent;
  let fixture: ComponentFixture<ApiGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
