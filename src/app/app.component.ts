import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JapaneseArtComponent } from './japanese-art/japanese-art.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuotesComponent, HeaderComponent, FooterComponent, JapaneseArtComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(JapaneseArtComponent) japaneseArtComponent!: JapaneseArtComponent;

  onQuoteChange() {
    this.japaneseArtComponent.showNextArtwork();  // Change artwork when quote changes
  }
}
