import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './Card/Card';

export default function App() {
  return (
    <div>
      <Card
      imagem= 'Minecraftcapa.png'
      titulo = 'Minecraft'
      genero = 'Sandbox'
      desenvolvedor = 'Mojang Studios'
      plataforma = 'Multiplataforma'
      descricao = 'Construa e explore mundos gerados aleatoriamente.'
      />
      <Card
      imagem='GodOfWarCapa.png'
      titulo='God of War'
      genero='Ação/Aventura'
      desenvolvedor='Santa Monica Studio'
      plataforma='PlayStation 4'
      descricao='Acompanhe Kratos e seu filho Atreus em uma jornada épica pela mitologia nórdica.'
/>
    </div>
  );
}


