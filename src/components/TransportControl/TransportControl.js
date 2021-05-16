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
                            <>
                                <EmployeesList
                                    employeesData={employeeType.data}
                                    title={employeeType.title}
                                    handleEditClick={props.handleEditClick}
                                    handleDeleteClick={props.handleDeleteClick}
                                    handleAddClick={props.handleAddClick}
                                ></EmployeesList>
                                {index !== props.employees.length - 1 && <hr></hr>}
                            </>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default TransportControl;