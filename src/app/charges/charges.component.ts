import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent {
  // dataTable: any;

  ngAfterViewInit(): void {
    // var table = $('#chargedatatable').DataTable({
    //   responsive: true,
    //   paging: false,
    //   searching: false,
    //   info: false
    // });
    $('a[data-bs-toggle="collapse"]').click(function () {
      $(this).find('i').toggleClass('bi-dash-square bi-flag');
      $(this).closest("tr").find('i').toggleClass('bi bi-dash-square bi bi-dash-square');
    });
  }
  ngOnInit(): void {

  }
}
