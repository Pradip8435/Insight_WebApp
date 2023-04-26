import { Component, AfterViewInit, OnInit,ViewChild } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-director-details',
  templateUrl: './director-details.component.html',
  styleUrls: ['./director-details.component.css']
})
export class DirectorDetailsComponent {
  dataTable: any;

  ngAfterViewInit(): void{
  //   var table = $('#directordetailstable').DataTable( {
  //     responsive: true,
  //     paging: false,
  //     searching: false,
  //     info:false
  // });
  }
  ngOnInit(): void {

  }
    
}
