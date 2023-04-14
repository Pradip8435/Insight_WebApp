import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  public ngOnInit() {
    const homeIcon = document.querySelector('.btn-desktop-group');

    $(window).resize (function(){
      if (window.innerWidth <= 991) homeIcon?.classList.add('dropdown-menu','pradip');
      else homeIcon?.classList.remove('dropdown-menu');
    })
  }
  
}
