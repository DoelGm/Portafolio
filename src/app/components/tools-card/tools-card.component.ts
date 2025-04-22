import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-card',
  imports: [CommonModule],
  templateUrl: './tools-card.component.html',
  styleUrl: './tools-card.component.css'
})
export class ToolsCardComponent {
  herramientas = [
    { nombre: 'HTML5', imagen: 'assets/icons/html-5-svgrepo-com.svg' },
    { nombre: 'CSS3', imagen: 'assets/icons/css-3-svgrepo-com.svg' },
    { nombre: 'JavaScript', imagen: 'assets/icons/js-svgrepo-com.svg' },
    { nombre: 'Angular', imagen: 'assets/icons/angular-svgrepo-com.svg' },
    { nombre: 'Node.js', imagen: 'assets/icons/node-js-svgrepo-com.svg' },
    { nombre: 'PHP', imagen: 'assets/icons/php-svgrepo-com.svg' },
    { nombre: 'Git', imagen: 'assets/icons/git-svgrepo-com.svg' },
    { nombre: 'TypeScript', imagen: 'assets/icons/typescript-official-svgrepo-com.svg' },
    
  ];
}
