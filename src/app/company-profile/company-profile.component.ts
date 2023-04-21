import { Component , OnInit} from '@angular/core';
declare var bootstrap: any;
import * as $ from 'jquery'

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  public ngOnInit() {
    $('.browse-btn').click(function(){
      $('.my-file').click();
  });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })  



    
    $('#select_all').click(function(){
        $('.check').prop('checked' , $(this).prop('checked'))
    })

    
  }

  
}
