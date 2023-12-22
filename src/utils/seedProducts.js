import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  { name: "Digital Yamaha Dm7", img: "https://f.fcdn.app/imgs/99e210/www.palaciodelamusica.com.uy/pmusuy/de94/webp/catalogo/DM7-DM7_1/2000-2000/consola-digital-yamaha-dm7-consola-digital-yamaha-dm7.jpg", category: "console", description: "El DM7 es una consola de mezcla digital versátil equipada con Dante, que ofrece una calidad de sonido incomparable, facilidad de operación y alta confiabilidad, lo que la hace perfecta para una amplia variedad de aplicaciones. El DM7 está configurado con 24 + 4 faders y una pantalla táctil multi-touch de 2 x 12” + 1 x 7",brand: "Yamaha", price: 32990, stock: 10 },
  { name: "FULUODE AX-80", img: "https://q7g5k9w5.rocketcdn.me/wp-content/uploads/2023/05/51uQ518zcZL._AC_.jpg", category: "console", description: "nterfaz de audio FULUODE AX-80, mezclador digital, USB, Bluetooth, entrada MP3, consola de mezclas, 8 canales, 48 V, Phantom Power, reverberación de música para PC, estudio de escenario, controlador de sonido estéreo, DJ, controlador de sonido, mezclador analógico",brand: "Mizisnr", price: 108, stock: 40 },
  { name: "ATH-M30x", img: "https://f.fcdn.app/imgs/f63bc4/woofer.com.uy/woofuy/7904/webp/catalogo/ATHM30X-ATHM30X_1/2000-2000/auricular-audio-technica-athm30x-auricular-audio-technica-athm30x.jpg", category: "headphones", description: "Audífonos para monitor de estudio profesional Audio-Technica ATH-M30x",brand: "Amazon renewed", price: 76, stock: 47 },
  { name: "Shure Sm7db", img: "https://f.fcdn.app/imgs/cd50dd/www.palaciodelamusica.com.uy/pmusuy/e110/webp/catalogo/SM7DB-SM7DB_1/2000-2000/microfono-shure-sm7db-microfono-shure-sm7db.jpg", category: "microphone", description: "El SM7dB es un micrófono vocal dinámico con preamplificador integrado que ofrece hasta +28 dB de bajo ruido, ganancia plana y transparente.",brand: "Shure", price: 799, stock: 10 },
  { name: "Auriculares Sennheiser", img: "https://d1aeri3ty3izns.cloudfront.net/media/64/644189/1200/preview.jpg", category: "headphones", description: "Auriculares de monitorización supraaurales Sennheiser Professional HD 280 PRO",brand: "Sennheiser", price: 79, stock: 35 },
  { name: "Digital Midas M32", img: "https://http2.mlstatic.com/D_NQ_NP_999467-MLU51327225308_082022-O.webp", category: "console", description: "Una mirada cercana a M32 LIVE revela que el estilo es completamente nuevo en todos los sentidos de la palabra. Los elementos de diseño inspirados en el automóvil de Rajesh Kutty se combinan perfectamente con una firma Midas reconocible, lo que diferencia al M32 LIVE de cualquier otra consola. Su factor de forma bellamente aerodinámico y elegante revoluciona por completo la experiencia de la mezcla en vivo.",brand: "Midas", price: 5999, stock: 15 },
  { name: "HyperX QuadCast", img: "https://cdn.cs.1worldsync.com/c6/0c/c60cd731-9bfa-4320-890e-7e9fa212f874.jpg", category: "microphone", description: "Micrófono de condensador para juegos HyperX QuadCast USB para PC, PS4 y Mac",brand: "HyperX", price: 189, stock: 70 },
  { name: "Shure SM7B", img: "https://http2.mlstatic.com/D_NQ_NP_915963-MLU44462604898_122020-O.webp", category: "microphone", description: "Micrófono dinámico vocal Shure SM7B para transmisión, podcast y grabación.",brand: "Shure", price: 399, stock: 30 },
  { name: "Tonor Condensador", img: "https://http2.mlstatic.com/D_NQ_NP_897671-MLU49538019642_032022-O.webp", category: "microphones", description: "Micrófono USB para Juegos, PC, Podcast Condensador",brand: "Tonor", price: 90, stock: 100 },
  { name: "DT 990 PRO", img: "https://m.media-amazon.com/images/I/71k0eQamF7L.__AC_SX300_SY300_QL70_ML2_.jpg", category: "headphones", description: "Auriculares supraaurales Beyerdynamic DT 990 PRO para monitor de estudio, construcción estéreo abierta, con cable",brand: "Beyerdynamic", price: 159, stock: 20 }
];

export const seedProducts = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};
