import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { NavegationComponent } from "./components/navegation/navegation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavegationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
