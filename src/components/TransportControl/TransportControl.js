import './TransportControl.css';
import EmployeesList from '../EmployeesList';

function TransportControl(props) {
    return (
        <section className="transportControl">
            <h1>Настройки</h1>
            <div className="employeeLists">
                <EmployeesList
                    employeesData={props.drivers}
                    title="Водители"
                    ></EmployeesList>
                <hr></hr>
                <EmployeesList
                    employeesData={props.conductors}
                    title="Кондукторы"
                ></EmployeesList>
            </div>
        </section>
    );
}

export default TransportControl;