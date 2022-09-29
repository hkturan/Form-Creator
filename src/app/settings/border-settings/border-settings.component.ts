import {Component, Input, OnInit} from '@angular/core';
import {BorderEntity} from '../../../entities/border.entity';
import {EnumBorderStyle} from '../../../enums/enum-border-style';

@Component({
  selector: 'app-border-settings',
  templateUrl: './border-settings.component.html',
  styleUrls: ['./border-settings.component.css']
})
export class BorderSettingsComponent implements OnInit {

  @Input() border = new BorderEntity();
  listEnumBorderStyle = EnumBorderStyle.values();

  constructor() {
  }

  ngOnInit(): void {
    // document.getElementById('dropDownFixWidth').style.width = 'calc(100% - 60px)';
    // const list = document.getElementsByClassName('p-inputwrapper-filled');
    // for (let i = 0; i < list.length; i++) {
    //   (list[i] as HTMLElement).style.width = 'calc(100% - 60px)';
    // }
  }

}
