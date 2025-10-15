import React from "react";
import Navbar from "../../components/Petspace/Navbar";
import ProductCard from "../../components/Petspace/ProductCard";
import { Footer } from "../../components/Petspace/Footer";

export const products = [
  { id: 1, name: "CrunchyBites", image: "", priceKg: 3, amountKg: 12, description: "Croquetas crujientes y nutritivas, ideales para perros adultos de todas las razas. Contienen vitaminas y minerales esenciales para mantenerlos activos y saludables." },
  { id: 2, name: "HappyPaws", image: "", priceKg: 3.5, amountKg: 10, halfStar: true, description: "Alimento que promueve la felicidad y el bienestar de tu mascota. Rico en proteínas y con ingredientes naturales que cuidan su digestión." },
  { id: 3, name: "TailTreats", image: "", priceKg: 4, amountKg: 12, description: "Snacks y croquetas especiales para perros con energía alta. Sabor irresistible y textura crujiente que hará que muevan la cola de alegría." },
  { id: 4, name: "FurFeast", image: "", priceKg: 5, amountKg: 5, description: "Alimento premium gourmet para mascotas exigentes. Con ingredientes de alta calidad que promueven un pelaje brillante y una salud óptima." }
];

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-blue-100 rounded-b-3xl shadow-sm">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-4xl font-bold leading-tight">
            Todo lo que tu mascota necesita, en un solo lugar 🐾
          </h2>
          <p className="text-lg text-gray-600">
            Alimentos, juguetes y accesorios con envío rápido y precios
            increíbles.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition-colors">
            Ver productos
          </button>
        </div>
        <img
          src="" //TODO: Imagen de perro feliz o algo asi
          alt="Happy Dog"
          className="w-80 md:w-96 mt-10 md:mt-0 drop-shadow-lg"
        />
      </section>

      {/* Featured Products */}
      <section className="px-10 py-14">
        <h3 className="text-2xl font-semibold mb-8">Productos destacados</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(p =>{
            return <ProductCard key={p.id} product={p} />
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
