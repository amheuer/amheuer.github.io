import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AndrewImageComponent } from './andrew-image/andrew-image.component';
import { MainDescriptionComponent } from './main-description/main-description.component';
import { ExperianceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,AndrewImageComponent,MainDescriptionComponent,ExperianceComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personalsite';
}
