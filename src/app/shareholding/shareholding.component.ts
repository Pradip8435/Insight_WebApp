import { Component, AfterViewInit,ViewChild, OnInit } from '@angular/core';
declare var bootstrap: any;
declare const $: any;

@Component({
  selector: 'app-shareholding',
  templateUrl: './shareholding.component.html',
  styleUrls: ['./shareholding.component.css']
})
export class ShareholdingComponent {
  dataTable: any;

  ngAfterViewInit(): void{
    var table = $('.shareAllowtment').DataTable( {
      responsive: true,
      paging: false,
      searching: false,
      info:false,
      ordering: false
    });

    // /tooltip ts
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    }) ;
    
    $('#nav-preference-tab').click(function(){
      $('.shareholding-equity-part').hide();
      $('.shareholding-tabs').addClass('col-md-12');
    });
    $('#nav-equity-tab').click(function(){
      $('.shareholding-equity-part').show();
      $('.shareholding-tabs').removeClass('col-md-12');
    })
  }
  ngOnInit(): void {
    
  }
}
