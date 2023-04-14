import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CORPOSITORY INSIGHT';


  display = true;

  HideShow() {
    this.display = !this.display
  }

  public ngOnInit() {
    // 
    $("#toggleside").click(function () {
      $(".sidebar").toggleClass("close");
      $("#toggleside").toggleClass("change");
      $(".text").toggleClass('displayBlock')
    });

    var select_designatfirst = $('#select_designatfirst'),
      empSearch = $('#empSearch');

    select_designatfirst.on('change', function () {
      empSearch.attr('placeholder', 'Search ' + select_designatfirst.find(':selected').text());
    });


  }
}

