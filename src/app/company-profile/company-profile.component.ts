import { Component , OnInit} from '@angular/core';
declare var bootstrap: any;
// import * as $ from 'jquery'
declare const $: any;


@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  dataTable: any;

  public ngOnInit() {
    $('.browse-btn').click(function(){
      $('.my-file').click();
  });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })  



    
    // $('#select_all').click(function(){
    //     $('.check').prop('checked' , $(this).prop('checked'))
    // })

    var table = $('#old-name').DataTable( {
      responsive: true,
      paging: false,
      searching: false,
      info:false
    });

    
  }

  
}
