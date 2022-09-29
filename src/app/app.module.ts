import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TextboxComponent} from './components/textbox/textbox.component';
import {TextboxSettingsComponent} from './settings/textbox-settings/textbox-settings.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {RippleModule} from 'primeng/ripple';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogService} from 'primeng/dynamicdialog';
import {TableSettingsComponent} from './settings/table-settings/table-settings.component';
import {DragDropModule} from 'primeng/dragdrop';
import {ColorPickerModule} from 'primeng/colorpicker';
import {BadgeModule} from 'primeng/badge';
import { TableComponent } from './components/table/table.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {TooltipModule} from 'primeng/tooltip';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';
import { BorderSettingsComponent } from './settings/border-settings/border-settings.component';
import {PanelModule} from 'primeng/panel';
import { FontSettingsComponent } from './settings/font-settings/font-settings.component';
import { ElementSettingsComponent } from './settings/element-settings/element-settings.component';
import {DialogModule} from 'primeng/dialog';
import { DropdownSettingsComponent } from './settings/dropdown-settings/dropdown-settings.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {ChipModule} from 'primeng/chip';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxSettingsComponent } from './settings/checkbox-settings/checkbox-settings.component';
import { ButtonSettingsComponent } from './settings/button-settings/button-settings.component';
import { ButtonComponent } from './components/button/button.component';
import {SanitizeHtmlPipe} from '../helper/sanitize-html-pipe';
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    TextboxSettingsComponent,
    TableSettingsComponent,
    TableComponent,
    BorderSettingsComponent,
    FontSettingsComponent,
    ElementSettingsComponent,
    DropdownSettingsComponent,
    DropdownComponent,
    CheckboxComponent,
    CheckboxSettingsComponent,
    ButtonSettingsComponent,
    ButtonComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    FormsModule,
    RippleModule,
    CheckboxModule,
    DragDropModule,
    ColorPickerModule,
    BadgeModule,
    ConfirmDialogModule,
    TooltipModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    ChipModule,
    ContextMenuModule
  ],
  providers: [DialogService, ConfirmationService, MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
