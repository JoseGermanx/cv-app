import {
  ChartPieIcon,
  SparklesIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/24/outline';

import { ProjectItem } from '../../../types';

export const projects: ProjectItem[] = [
  { name: 'Habits Tracker', description: 'Apliación para el seguimiento de hábitos.', href: 'https://habitos.click', icon: ChartPieIcon },
  { name: 'AI Chat Learning Assistant', description: 'Aplicación Chat de IA creada con Google Gemini y React.', href: 'https://asistente-js.betacode.cl/', icon: SparklesIcon },
  { name: 'Code Tickets', description: 'Gestión de tickets para ingreso a eventos con sistema de qr.', href: 'https://codetickets.fun/', icon: ArrowsPointingInIcon },
  { name: 'Post It', description: 'Aplicación de notas adhesivas en línea.', href: 'https://post-it.jgxdev.com/', icon: ArrowsPointingInIcon },
  { name: 'Pic of a Day', description: 'Imagen del día, de la NASA, con React y consumo de API.', href: 'https://pic.jgxdev.com/', icon: ArrowsPointingInIcon },
];
