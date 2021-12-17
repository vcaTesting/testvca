import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.scss']
})
export class AdminlayoutComponent implements OnInit {
  selected:any
  showSidebar:boolean=false
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public elementRef: ElementRef,
    private renderer: Renderer2,

  ) { }

  ngOnInit(): void {
  }
   toggleSidebar(){
     this.showSidebar = !this.showSidebar
   
  }
  
}
