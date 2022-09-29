import {Component, Input, OnInit} from '@angular/core';
import {ElementEntity} from '../../../entities/element.entity';

@Component({
  selector: 'app-element-settings',
  templateUrl: './element-settings.component.html',
  styleUrls: ['./element-settings.component.css']
})
export class ElementSettingsComponent implements OnInit {

  @Input() element = new ElementEntity();
  @Input() header = 'General';
  @Input() propertiesToShow = [];

  constructor() { }

  ngOnInit(): void {
  }

}
