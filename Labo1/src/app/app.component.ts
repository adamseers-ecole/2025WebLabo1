import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Towel } from './models/Towel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Labo1';

  myWisdom : string = "bomboclaat"
  n = 8

  bruh(params:number): string {
    return "Bruh."
  }

  equalToN(params:number) : string {
    return params == this.n ? "Identique" : "Différent"
  }

  serviette : Towel = new Towel("blanche", 1.8, "pngtree-white-bath-towel-shower-cotton-towel-png-image_6088366.jpg")
}
