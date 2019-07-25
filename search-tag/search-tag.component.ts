import { Component, OnInit, HostListener, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { log } from "util";

@Component({
  selector: "app-search-tag",
  templateUrl: "./search-tag.component.html",
  styleUrls: ["./search-tag.component.css"]
})
export class SearchTagComponent implements OnInit {
  tags = [];
  text: String;
  load: boolean;
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  searchTag(text, idlast?) {
    if (this.text !== text && !idlast) {
      this.text = text;
      this.tags = [];
    }
    let link = "http://localhost:3002/public/book/searchtag/" + this.text;
    if (idlast) link = link + "?idlast=" + idlast;
    this.http.get(link).subscribe(result => {
      for (let index = 0; index < Object.keys(result).length; index++) {
        this.tags.push(result[index]);
      }
      this.load = true;
    });
  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll($event) {
    let MaxLi = document.querySelector(
      "body > app-root > app-search-tag > section > div > ul"
    ).lastElementChild as HTMLElement;
    let top = document.querySelector(
      "body > app-root > app-search-tag > section > div"
    ).scrollTop;
    let hieght = document.querySelector(
      "body > app-root > app-search-tag > section > div"
    ).scrollHeight;
    if (top == hieght - 300 && this.load == true) {
      let lastId = this.tags[this.tags.length - 1]._id;
      this.load = false;
      this.searchTag(this.text, lastId);
    }
  }
}
