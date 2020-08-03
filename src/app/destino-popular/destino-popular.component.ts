import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destino-popular',
  templateUrl: './destino-popular.component.html',
  styleUrls: ['./destino-popular.component.css']
})
export class DestinoPopularComponent implements OnInit {
  @Input() destinoPopular :string[];
  constructor() {
  }

  ngOnInit(): void {
  }

}
