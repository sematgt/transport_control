import React from 'react';
import './TransportControl.css';
import EmployeesList from '../EmployeesList/EmployeesList';

function TransportControl(props) {
    return (
        <section className="transportControl">
            <h1>Настройки</h1>
            <div className="employeeLists">
                {
                    props.employees.map((employeeType, index) => {
                        return (
                            <React.Fragment key={employeeType.title}>
                                <EmployeesList
                                    employeesData={employeeType.data}
                                    title={employeeType.title}
                                    handleEditClick={props.handleEditClick}
                                    handleDeleteClick={props.handleDeleteClick}
                                    handleAddClick={props.handleAddClick}
                                ></EmployeesList>
                                {index !== props.employees.length - 1 && <hr></hr>} {/* add <hr> between employee lists except last element*/}
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default TransportControl;