import { Component } from '@angular/core';
import { ButtonComponent } from "../components/button/button.component";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
