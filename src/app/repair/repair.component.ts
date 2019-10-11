import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change(){
    var button = document.getElementById("btnRepair");

    if (button.innerHTML == "More +") {
      this.showMore();
    } else {
      this.showLess();
    }
  }

  showMore(){
    var open = document.getElementById("moreRepair");
    var button = document.getElementById("btnRepair");

    open.innerHTML = `For conventional repairs, such as drifting and broken 
    buttons, repairs cost a flat rate of $30.00 per
    Joy Con. More complicated repairs, such as water damage and wireless issues, are be priced on a
    case-by-case basis.`
    button.innerHTML = "Less -"
  }

  showLess(){
    var open = document.getElementById("moreRepair");
    var button = document.getElementById("btnRepair");

    open.innerHTML = "";
    button.innerHTML = "More +"
  }
}
