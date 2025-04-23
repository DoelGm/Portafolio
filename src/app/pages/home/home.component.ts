import { Component } from '@angular/core';
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ToolsCardComponent } from "../../components/tools-card/tools-card.component";
import { WorkComponent } from "../../components/work/work.component";
import { ContactMeComponent } from "../../components/contact-me/contact-me.component";

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, ToolsCardComponent, WorkComponent, ContactMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
