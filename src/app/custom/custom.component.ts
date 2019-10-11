import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change(){
    var button = document.getElementById("btnCustom");

    if (button.innerHTML == "More +") {
      this.showMore();
    } else {
      this.showLess();
    }
  }

  showMore(){
    var open = document.getElementById("moreCustom");
    var button = document.getElementById("btnCustom");

    open.innerHTML = 
    `
    We can offer any combination of the following: <br><br>
    Shells: Clear, Atomic Purple, Ice Blue, Jungle Green, SNES, NES, White, Black, Yellow, Blue, Violet, Green, Pink.<br>
    Buttons: Famicom, White, Yellow, Chrome Gold, Blue, Violet, Red, Pink.
    `
    button.innerHTML = "Less -"
  }

  showLess(){
    var open = document.getElementById("moreCustom");
    var button = document.getElementById("btnCustom");

    open.innerHTML = "";
    button.innerHTML = "More +"
  }
}
