import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {

  public ngOnInit() {
    $('a[data-bs-toggle="collapse"]').click(function () {
      $(this).find('.bi').toggleClass('bi bi-dash-square bi bi-dash-square');
      // $(this).closest("tr").find('i').toggleClass('bi bi-dash-square bi bi-dash-square');
    });

  }
}