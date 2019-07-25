import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchadvanceComponent } from "./searchadvance.component";

describe("SearchadvanceComponent", () => {
  let component: SearchadvanceComponent;
  let fixture: ComponentFixture<SearchadvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchadvanceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchadvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
