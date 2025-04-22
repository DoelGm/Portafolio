import { Component } from '@angular/core';
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ToolsCardComponent } from "../../components/tools-card/tools-card.component";

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, ToolsCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
