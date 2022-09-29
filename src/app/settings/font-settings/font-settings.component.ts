import {Component, Input, OnInit} from '@angular/core';
import {FontEntity} from '../../../entities/font.entity';

@Component({
  selector: 'app-font-settings',
  templateUrl: './font-settings.component.html',
  styleUrls: ['./font-settings.component.css']
})
export class FontSettingsComponent implements OnInit {

  @Input() font: FontEntity;

  constructor() {
  }

  ngOnInit(): void {
  }

}
