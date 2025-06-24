import { useState, useEffect } from 'react'
import AppRouter from './Routes/Routes'
import AOS from 'aos'
import './App.css'

function App() {
  
  useEffect(() => {
  const allDivs = document.querySelectorAll('div'); // Ou qualquer seletor que quiser
  allDivs.forEach(div => {
    div.setAttribute('data-aos', 'fade-up');
  });

  AOS.refresh(); // Para forçar o AOS a reconhecer os novos elementos
}, []);

  return (
    <>
     <AppRouter/>
    </>
  )
}

export default App
