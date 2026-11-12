// Los 14 alérgenos de declaración obligatoria en la UE (Reglamento 1169/2011, anexo II).
// El id es el que se usa en menu.json (plato.alergenos).
import wheat from 'lucide-static/icons/wheat.svg?raw';
import shell from 'lucide-static/icons/shell.svg?raw';
import egg from 'lucide-static/icons/egg.svg?raw';
import fish from 'lucide-static/icons/fish.svg?raw';
import nut from 'lucide-static/icons/nut.svg?raw';
import bean from 'lucide-static/icons/bean.svg?raw';
import milk from 'lucide-static/icons/milk.svg?raw';
import squirrel from 'lucide-static/icons/squirrel.svg?raw';
import leafy from 'lucide-static/icons/leafy-green.svg?raw';
import flower2 from 'lucide-static/icons/flower-2.svg?raw';
import grip from 'lucide-static/icons/grip.svg?raw';
import wine from 'lucide-static/icons/wine.svg?raw';
import flower from 'lucide-static/icons/flower.svg?raw';
import snail from 'lucide-static/icons/snail.svg?raw';

export const ALERGENOS = [
  { id: 'gluten', nombre: 'Gluten', en: 'Gluten', ca: 'Gluten', icono: wheat },
  { id: 'crustaceos', nombre: 'Crustáceos', en: 'Crustaceans', ca: 'Crustacis', icono: shell },
  { id: 'huevo', nombre: 'Huevo', en: 'Egg', ca: 'Ou', icono: egg },
  { id: 'pescado', nombre: 'Pescado', en: 'Fish', ca: 'Peix', icono: fish },
  { id: 'cacahuetes', nombre: 'Cacahuetes', en: 'Peanuts', ca: 'Cacauets', icono: nut },
  { id: 'soja', nombre: 'Soja', en: 'Soy', ca: 'Soja', icono: bean },
  { id: 'leche', nombre: 'Leche', en: 'Milk', ca: 'Llet', icono: milk },
  { id: 'frutos_cascara', nombre: 'Frutos de cáscara', en: 'Tree nuts', ca: 'Fruits de closca', icono: squirrel },
  { id: 'apio', nombre: 'Apio', en: 'Celery', ca: 'Api', icono: leafy },
  { id: 'mostaza', nombre: 'Mostaza', en: 'Mustard', ca: 'Mostassa', icono: flower2 },
  { id: 'sesamo', nombre: 'Sésamo', en: 'Sesame', ca: 'Sèsam', icono: grip },
  { id: 'sulfitos', nombre: 'Sulfitos', en: 'Sulphites', ca: 'Sulfits', icono: wine },
  { id: 'altramuces', nombre: 'Altramuces', en: 'Lupin', ca: 'Tramussos', icono: flower },
  { id: 'moluscos', nombre: 'Moluscos', en: 'Molluscs', ca: 'Mol·luscs', icono: snail },
];

// Nombre del alérgeno en el idioma pedido (español si falta).
export const nombreAlergeno = (a, lang) => (lang && lang !== 'es' && a[lang]) || a.nombre;

export const ALERGENO = Object.fromEntries(ALERGENOS.map((a) => [a.id, a]));
