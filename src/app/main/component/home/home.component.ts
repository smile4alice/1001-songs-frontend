import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Homepage} from "../../../core/constants/constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected readonly HomepageShare = Homepage;
  protected readonly HomepageDonate = Homepage;
  constructor(private _translate: TranslateService){}


}
