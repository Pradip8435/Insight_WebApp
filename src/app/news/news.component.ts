import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
   public ngOnInit(){
    $(".custom-select-dropdown li a").click(function(){
      $(".custom-select").html($(this).text()+' <i class="bi bi-chevron-down"></i>');
      
    });
   }
}
