import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  change() {
    var button = document.getElementById("btnAccessories");

    if (button.innerHTML == "More +") {
      this.showMore();
    } else {
      this.showLess();
    }
  }

  showMore() {
    var open = document.getElementById("moreAccessories");
    var button = document.getElementById("btnAccessories");

    open.innerHTML = 
    `<ul>
      <li>Thumbgrips</li>
      <li>Carrying Cases</li>
    </ul>`
    button.innerHTML = "Less -"
  }

  showLess() {
    var open = document.getElementById("moreAccessories");
    var button = document.getElementById("btnAccessories");

    open.innerHTML = "";
    button.innerHTML = "More +"
  }
}
