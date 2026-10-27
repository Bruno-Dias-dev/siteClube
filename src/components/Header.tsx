import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <a href="#inicio" className="brand"><span className="brand-mark">◒</span><span><b>CLUBE DE</b><br/><strong>BENEFÍCIOS</strong></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a href="#sobre" onClick={closeMenu}>Por que você precisa?</a><a href="#beneficios" onClick={closeMenu}>Benefícios</a><a href="#planos" onClick={closeMenu}>Planos</a><a href="#duvidas" onClick={closeMenu}>Dúvidas</a><a href="#rodape" onClick={closeMenu}>Central de uso</a>
      </nav>
      <a className="phone-pill" href="tel:08005910716"><Phone size={15}/> Fale Conosco <b>0800 591 0716</b></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
  );
}
