import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string[];
  imgSrc: string;
  imgAlt: string;
  iconSrc: string;
  iconAlt: string;
  role: string; // backend/frontend role info
  bgLight?: boolean; // opcional, para el fondo claro en imagen
}
@Component({
  selector: 'app-work',
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
projects: Project[] = [
    {
      title: 'Ecomers De Papel de Regalo',
      role: 'Backend Developer',
      description: [
        'Ocupé el rol de desarrollador backend, utilizando tecnologías como Node.js. Estuve a cargo del diseño y desarrollo de múltiples APIs clave para el funcionamiento del sitio web.',
        'Además, implementé un sistema de autenticación y autorización de usuarios, asegurando la protección de datos sensibles y la privacidad de los usuarios.'
      ],
      imgSrc: 'assets/imgs/Captura de pantalla 2025-04-22 161457.png',
      imgAlt: 'Ecomers De Papel de Regalo',
      iconSrc: '/assets/icons/pc-svgrepo-com.svg',
      iconAlt: 'Backend icon',
      bgLight: true
    },
    {
      title: 'Hidrobladers',
      role: 'Frontend Developer',
      description: [
        'Participé en el desarrollo frontend con Angular, utilizando HTML, CSS y Bootstrap para interfaces responsivas.'
      ],
      imgSrc: 'assets/imgs/Captura de pantalla 2025-04-22 145112.png',
      imgAlt: 'Hidrobladers',
      iconSrc: '/assets/icons/pc-svgrepo-com.svg',
      iconAlt: 'Frontend icon',
      bgLight: true
    },
    {
      title: 'The Luxor',
      role: 'Frontend Developer',
      description: [
        'Proyecto de página web de presentación desarrollado con Angular, Bootstrap, CSS y HTML. El objetivo principal fue crear una plataforma elegante y moderna para dar a conocer la marca y sus servicios, con un diseño responsivo y una experiencia de usuario optimizada en diferentes dispositivos.'
      ],
      imgSrc: 'assets/imgs/screencapture-the-luxor-vercel-app-2025-05-20-23_10_38.png',
      imgAlt: 'The Luxor',
      iconSrc: '/assets/icons/pc-svgrepo-com.svg',
      iconAlt: 'Frontend icon',
      bgLight: true
    },
    {
      title: 'CapsVille',
      role: 'Full Stack Developer',
      description: [
        'Desarrollo integral de un catálogo de productos y sitio corporativo para una empresa, utilizando Laravel en el backend con MySQL como base de datos, y Angular junto con Bootstrap en el frontend. Además, el sitio incluye un blog para generar contenido y mejorar el posicionamiento digital, garantizando una gestión eficiente y una experiencia de usuario fluida.'
      ],
      imgSrc: 'assets/imgs/screencapture-caps-ville-vercel-app-2025-05-25-16_22_26.png',
      imgAlt: 'CapsVille',
      iconSrc: '/assets/icons/pc-svgrepo-com.svg',
      iconAlt: 'Frontend icon',
      bgLight: true
    },
    {
      title: 'Plantilla de WordPress',
      role: 'Frontend Developer',
      description: [
        'Diseño y desarrollo de una plantilla personalizada para WordPress, creada para ofrecer una solución flexible y adaptable a diferentes tipos de sitios web. La plantilla está optimizada para rendimiento y facilidad de uso, permitiendo una gestión sencilla de contenidos y una presentación visual profesional.'
      ],
      imgSrc: 'assets/imgs/screencapture-localhost-wordpress-2025-05-25-15_38_36.png',
      imgAlt: 'Plantilla WordPress',
      iconSrc: '/assets/icons/pc-svgrepo-com.svg',
      iconAlt: 'Frontend icon',
      bgLight: true
    }
  ];
}
