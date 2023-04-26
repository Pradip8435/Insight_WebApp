import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'CORPOSITORY INSIGHT';
  jConveyorTicker: any;

  
  public ngOnInit() {
    // 
    $("#toggleside").click(function () {
      $(".sidebar").toggleClass("close");
      $("#toggleside").toggleClass("change");
      $(".text").toggleClass('d-block')
    });

    var select_designatfirst = $('#select_designatfirst'),
      empSearch = $('#empSearch');

    select_designatfirst.on('change', function () {
      empSearch.attr('placeholder', 'Search ' + select_designatfirst.find(':selected').text());
    });
    

  }
}