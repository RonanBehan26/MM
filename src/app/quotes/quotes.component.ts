import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quotes',
  standalone: true,
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  quotes: string[] = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait; the time will never be 'just right'. Start where you stand.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The best way to predict the future is to invent it."
  ];
  currentQuote: string = this.quotes[0];

  @Output() quoteChanged = new EventEmitter<string>();  // Emit event on quote change

  getNewQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomIndex];
    this.quoteChanged.emit();  // Emit event
  }
}
