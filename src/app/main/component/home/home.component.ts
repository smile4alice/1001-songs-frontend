import { Component } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {CommonModule} from "@angular/common";
import {Homepage} from "../../../shared/enums/icons.enum";
import {ErrorComponent} from "../../../shared/shared-components/error/error.component";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule, ErrorComponent]
})
export class HomeComponent {
  protected readonly homePageAssets = Homepage;

  constructor(
    private _translate: TranslateService){}

}
