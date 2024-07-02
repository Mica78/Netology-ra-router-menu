import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import DriftPage from "./DriftPage";
import TimeAttackPage from "./TimeAttackPage";
import ForzaPage from "./ForzaPage";

export default function Menu() {
  const classNameIsActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? 'menu__item menu__item-active' : 'menu__item';

  return (
    <BrowserRouter>
      <nav className="menu">
        <NavLink className={classNameIsActive} to="/">Главная</NavLink>
        <NavLink className={classNameIsActive} to="/drift">Дрифт-такси</NavLink>
        <NavLink className={classNameIsActive} to="/timeattack">Тайм-атака</NavLink>
        <NavLink className={classNameIsActive} to="/forza">Forza Karting</NavLink>
      </nav>
      <div className="page">
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}
