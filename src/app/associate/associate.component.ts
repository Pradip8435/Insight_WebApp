import { Component } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent {
  dataTable: any;

  ngAfterViewInit(): void{
    var table = $('#relatedpartiestable').DataTable( {
      responsive: true,
      paging: false,
      searching: false,
      info:false
  });
  }
  ngOnInit(): void {
    
  }
}
