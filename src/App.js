import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import TransportControl from './components/TransportControl/TransportControl';
import FormDialog from './components/TransportControl/FormDialog';

function App() {
  // state
  const [drivers, setDrivers] = useState([
    {
      id: 100111,
      name: 'Антонов Иван Иванович',
      inVacation: false,
      needsConductor: true, 
    },
    {
      id: 100112,
      name: 'Иванов Сергей Иванович',
      inVacation: true,
      needsConductor: false, 
    },
    {
      id: 100113,
      name: 'Петров Петр Иванович',
      inVacation: false,
      needsConductor: true, 
    },
    {
      id: 100114,
      name: 'Семенов Сергей Иванович',
      inVacation: false,
      needsConductor: false, 
    },
    {
      id: 100115,
      name: 'Иванов Иван Иванович',
      inVacation: true,
      needsConductor: false, 
    },
    {
      id: 100116,
      name: 'Антонов Антон Иванович',
      inVacation: true,
      needsConductor: false, 
    },
    {
      id: 100117,
      name: 'Иванов Сергей Иванович',
      inVacation: true,
      needsConductor: false, 
    },
    {
      id: 100118,
      name: 'Иванов Петр Иванович',
      inVacation: false,
      needsConductor: false, 
    },
  ]); // drivers data
  const [conductors, setConductors] = useState([
    {
      id: 101111,
      name: 'Семенов Иван Иванович',
      inVacation: true,
    },
    {
      id: 101112,
      name: 'Антонов Антон Иванович',
      inVacation: false,
    },
    {
      id: 101113,
      name: 'Семенов Петр Иванович',
      inVacation: false,
    },
    {
      id: 101114,
      name: 'Иванов Сергей Иванович',
      inVacation: false,
    },
    {
      id: 101115,
      name: 'Петров Петр Иванович',
      inVacation: true,
    },
  ]); // conductors data
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentData, setCurrentData] = useState({});

  // calculatable consts
  const navLinks = ['Маршруты', 'План графики', 'Расписание', 'Контроль']; // ссылки для панели навигации
  const pageTitle = 'КОНТРОЛЬ ТРАНСПОРТА'; // заголовок страницы

  function createEmployee(category, id, data) {
    if (category === 'Водители') {
      let driversData = drivers.slice();
      driversData.push({...{
        id: id
      }, ...data});
      setDrivers(driversData);
    }

    if (category === 'Кондукторы') {
      let conductorsData = conductors.slice();
      conductorsData.push({...{
        id: id
      }, ...data});
      setConductors(conductorsData);
    }
  }

  function editEmployee(category, id, data) {
    if (category === 'Водители') {
      let driversData = drivers.slice();
      driversData[driversData.findIndex(driver => driver.id === id)] = {...driversData.find(driver => driver.id === id), ...data}; // merging current driver data with new
      setDrivers(driversData);
    }
    
    if (category === 'Кондукторы') {
      let conductorsData = conductors.slice();
      conductorsData[conductorsData.findIndex(conductor => conductor.id === id)] = {...conductorsData.find(conductor => conductor.id === id), ...data}; // merging current conductor data with new
      setConductors(conductorsData);
    }
  }
  
  function deleteEmployee(category, id) {
    if (category === 'Водители') {
      let driversData = drivers.slice();
      driversData.splice(driversData.findIndex(driver => driver.id === id), 1)
      setDrivers(driversData);
    }
    
    if (category === 'Кондукторы') {
      let conductorsData = conductors.slice();
      conductorsData.splice(conductorsData.findIndex(conductor => conductor.id === id), 1)
      setConductors(conductorsData);
    }
  }

  function getEmployeeDataObj(id) { // returns category`s data object by id
    for (let employeeCategory of [drivers, conductors]) {
      if (employeeCategory.find(employee => employee.id === id)) {
        return employeeCategory;
      } 
    }
  }

  function openModal(category, id) {
    setModalIsOpen(true);
    if (id) { // edit
      setCurrentData({
        category,
        id: id,
        employeeName: getEmployeeDataObj(id).find(employee => employee.id === id).name,
        inVacation: getEmployeeDataObj(id).find(employee => employee.id === id).inVacation,
        needsConductor: getEmployeeDataObj(id).find(employee => employee.id === id).needsConductor 
      });
    }
    else { // add new
      setCurrentData({
        category,
        id: getNewId(category)
      })
    }
  }

  function closeModal() {
    setCurrentData({});
    setModalIsOpen(false);
  }

  function handleEditClick(category, id) {
    openModal(category, id);
  }

  function handleAddClick(category) {
    openModal(category);
  }

  function handleDeleteClick(category, id) {
    closeModal();
    deleteEmployee(category, id);
  }

  function handleFormSubmit(mode, category, id, data) {
    if (mode === 'add') {
      createEmployee(category, id, data);
    }

    if (mode === 'edit') {
      editEmployee(category, id, data);
    }
  }

  // helpers
  function getNewId(category) {
    if (category === 'Водители') {
      return drivers.reduce((maxId, driver) => driver.id > maxId ? driver.id : maxId, 1) + 1;
    }
    
    if (category === 'Кондукторы') {
      return conductors.reduce((maxId, driver) => driver.id > maxId ? driver.id : maxId, 1) + 1;
    }
  }

  return (
    <>
      <Header pageTitle={pageTitle}></Header>
      <Navigation links={navLinks}></Navigation>
      <TransportControl 
        employees={[{
          data: drivers,
          title: 'Водители'
        }, 
        {
          data: conductors,
          title: 'Кондукторы'
        }]} 
        handleEditClick={handleEditClick} 
        handleDeleteClick={handleDeleteClick} 
        handleAddClick={handleAddClick} 
      >
      </TransportControl>
      {
        modalIsOpen && <FormDialog
          category = {currentData.category}
          employeeName = {currentData.employeeName || ''}
          id = {currentData.id}
          inVacation = {currentData.inVacation || false}
          needsConductor = {currentData.needsConductor || false}
          handleCloseModal = {closeModal}
          handleSubmit = {handleFormSubmit}
        ></FormDialog>
      }
    </>
  );
}

export default App;