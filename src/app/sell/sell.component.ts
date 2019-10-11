import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change() {
    var button = document.getElementById("btnTrade");

    if (button.innerHTML == "More +") {
      this.showMore();
    } else {
      this.showLess();
    }
  }

  showMore() {
    var open = document.getElementById("moreTrade");
    var button = document.getElementById("btnTrade");

    open.innerHTML = `For conventional repairs, such as drifting and broken 
    buttons, repairs cost a flat rate of $30.00 per
    Joy Con. More complicated repairs, such as water damage and wireless issues, are be priced on a
    case-by-case basis.`
    button.innerHTML = "Less -"
  }

  showLess() {
    var open = document.getElementById("moreTrade");
    var button = document.getElementById("btnTrade");

    open.innerHTML = "";
    button.innerHTML = "More +"
  }
}
