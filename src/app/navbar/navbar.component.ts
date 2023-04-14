import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public ngOnInit() {
    $(".searchToggle").click(function(){
      $("form").toggle()
    })
  }
}
