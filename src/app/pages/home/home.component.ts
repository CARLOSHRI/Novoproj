import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { CardComponent } from "../../components/small/small-card/card.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {





}
