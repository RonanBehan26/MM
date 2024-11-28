import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-japanese-art',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './japanese-art.component.html',
  styleUrls: ['./japanese-art.component.css']
})
export class JapaneseArtComponent {
  // Sample array of Japanese art (URLs should be replaced with actual images)
  artworks = [
    {
      title: "The Great Wave off Kanagawa",
      artist: "Hokusai",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg',
      description: "The iconic Great Wave by Hokusai, symbolizing strength and beauty."
    },
    {
      title: 'Portrait of Miyamoto Musashi',
      artist: 'Ueno Shunri',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Miyamoto_Musashi_Self-Portrait.jpg',
      description: 'Historical portrait of the famous swordsman'
    }
  ];

    // Set currentArtwork to the first artwork in the array
    currentArtwork = this.artworks[0];
    private artworkIndex = 0;
  
    // Method to update the artwork on each change
    showNextArtwork() {
      this.artworkIndex = (this.artworkIndex + 1) % this.artworks.length;
      this.currentArtwork = this.artworks[this.artworkIndex];
    }
}
