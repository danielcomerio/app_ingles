import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //função decorator importada do CORE do Angular
  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit() {
  }

}
