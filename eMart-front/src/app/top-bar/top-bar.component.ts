import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  active=0;
  // @Output() show = new EventEmitter<boolean>();
  constructor(private router:Router) { }

  ngOnInit() {
  }

  // showNav(){
  //   this.show.emit(false);
  //   this.router.navigateByUrl("/login");
  // }


}
