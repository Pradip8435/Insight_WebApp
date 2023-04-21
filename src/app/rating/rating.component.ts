import { Component, AfterViewInit, ViewChild } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  dataTable: any;

  ngAfterViewInit(): void{
    var table = $('#ratingTable').DataTable( {
      responsive: true,
      paging: false,
      searching: false,
      info:false
  });
  }
  ngOnInit(): void {
    
  }
}
