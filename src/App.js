import './App.css';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import TransportControl from './components/TransportControl/TransportControl';

function App() {
  const employees = {
    drivers: [
    {
      id: '100111',
      name: 'Антонов Иван Иванович',
      inVacation: false,
      needsConductor: true, 
    },
    {
      id: '100112',
      name: 'Иванов Сергей Иванович',
      inVacation: true,
      needsConductor: false, 
    },
    {
      id: '100113',
      name: 'Петров Петр Иванович',
      inVacation: false,
      needsConductor: true, 
    },
    {
      id: '100114',
      name: 'Семенов Сергей Иванович',
      inVacation: false,
      needsConductor: false, 
    },
    {
      id: '100115',
      name: 'Иванов Иван Иванович',
      inVacation: true,
      needsConductor: false, 
    },
    {
      id: '100116',
      name: 'Антонов Антон Иванович',
      inVacation: true,
      needsConductor: false, 
    },
    {
      id: '100117',
      name: 'Иванов Сергей Иванович',
      inVacation: true,
      needsConductor: false, 
    },
    {
      id: '100118',
      name: 'Иванов Петр Иванович',
      inVacation: false,
      needsConductor: false, 
    },
  ],
    conductors: [
    {
      id: '101111',
      name: 'Семенов Иван Иванович',
      inVacation: true,
    },
    {
      id: '101112',
      name: 'Антонов Антон Иванович',
      inVacation: false,
    },
    {
      id: '101113',
      name: 'Семенов Петр Иванович',
      inVacation: false,
    },
    {
      id: '101114',
      name: 'Иванов Сергей Иванович',
      inVacation: false,
    },
    {
      id: '101115',
      name: 'Петров Петр Иванович',
      inVacation: true,
    },
  ]};
  const links = ['Маршруты', 'План графики', 'Расписание', 'Контроль']; // ссылки для панели навигации; постоянная величина для каждой страницы
  return (
    <>
      <Header pageTitle='КОНТРОЛЬ ТРАНСПОРТА'></Header>
      <Navigation links={links}></Navigation>
      <TransportControl drivers={employees.drivers} conductors={employees.conductors}></TransportControl>
    </>
  );
}

export default App;
