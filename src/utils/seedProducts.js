import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  { name: "Digital Yamaha Dm7", img: "https://i.imgur.com/BUNbqDT.png", category: "console", description: "Potente mezclador digital que brinda control preciso y calidad de sonido excepcional para producción musical avanzada",brand: "Yamaha", price: 32990, stock: 10 },
  { name: "FULUODE AX-80", img: "https://i.imgur.com/ApDKhDF.png", category: "console", description: "Mezclador de audio digital con prestaciones avanzadas para ofrecer un sonido excepcional y versatilidad en su uso",brand: "Mizisnr", price: 108, stock: 40 },
  { name: "ATH-M30x", img: "https://i.imgur.com/kkOUDzr.png", category: "headphones", description: "Sonido nítido, cómodos y precisos para un disfrute auditivo superior en un diseño ergonómico y resistente",brand: "Amazon renewed", price: 76, stock: 47 },
  { name: "Shure Sm7db", img: "https://i.imgur.com/cbVgNTU.png", category: "microphone", description: "Fiabilidad y calidad de audio superior, perfecto para aplicaciones vocales y grabaciones profesionales de alta gama",brand: "Shure", price: 799, stock: 10 },
  { name: "Auriculares Sennheiser", img: "https://i.imgur.com/Fgo7W23.png", category: "headphones", description: "Experiencia sonora incomparable con comodidad superior, diseñados para entregarte lo mejor en audio en cualquier entorno",brand: "Sennheiser", price: 79, stock: 35 },
  { name: "Digital Midas M32", img: "https://i.imgur.com/ccY3oDo.png", category: "console", description: "Mezclador profesional con características avanzadas para producciones exigentes y un rendimiento de audio excepcional en vivo",brand: "Midas", price: 5999, stock: 15 },
  { name: "HyperX QuadCast", img: "https://i.imgur.com/6TsnR8i.png", category: "microphone", description: "Rendimiento excepcional y diseño elegante, ideal para streaming, podcasting o grabaciones con calidad profesional",brand: "HyperX", price: 189, stock: 70 },
  { name: "Shure SM7B", img: "https://i.imgur.com/pR9PEgU.png", category: "microphone", description: "Excelencia en captura vocal, versátil y duradero, ideal para estudio o grabaciones profesionales de alta calidad",brand: "Shure", price: 399, stock: 30 },
  { name: "Tonor Condensador", img: "https://i.imgur.com/NKofxVw.png", category: "microphones", description: "Captura de audio clara y nítida, versátil y fácil de usar para grabaciones de voz o instrumentos musicales",brand: "Tonor", price: 90, stock: 100 },
  { name: "DT 990 PRO", img: "https://i.imgur.com/KSSCQIu.png", category: "headphones", description: "Calidad de sonido excepcional, comodidad superior y detalles precisos para una experiencia auditiva envolvente y profesional",brand: "Beyerdynamic", price: 159, stock: 20 }
];

export const seedProducts = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};
