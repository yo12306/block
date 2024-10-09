import { Component } from '@angular/core';
import { PanelComponent } from "./panel/panel.component";

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [PanelComponent],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.css'
})
export class FrameComponent {

}
