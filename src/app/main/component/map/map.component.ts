import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {HomeTapeComponent} from "../../../shared/shared-components/home-tape/home-tape.component";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    standalone: true,
    imports: [TranslateModule, HomeTapeComponent]
})
export class MapComponent {
  constructor(
    private _translate: TranslateService
  ){}
}
