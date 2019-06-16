import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SampleComponent implements OnInit {

  constructor() { }

  @Input()
  data:{name:string};

  
  ngOnInit() {
  }

}
