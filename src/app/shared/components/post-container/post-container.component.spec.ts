import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostCcontainerComponent } from "./post-container.component";

describe("PostCcontainerComponent", () => {
  let component: PostCcontainerComponent;
  let fixture: ComponentFixture<PostCcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCcontainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
