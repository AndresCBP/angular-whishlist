import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Whishlist with Angular';

  agregar(titulo: HTMLInputElement)	{
    console.log(titulo.value);
  }
}
