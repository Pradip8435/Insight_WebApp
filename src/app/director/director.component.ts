import { AfterViewInit,Component,ViewChild,OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent {
  dataTable: any;

  ngAfterViewInit(): void{
    var table = $('#example').DataTable( {
      responsive: true,
  });
  }
  ngOnInit(): void {
    
  }
}