import EmployeesList from '../EmployeesList';

function TransportControl(props) {
    return (
        <section className="transportControl">
            <h1>Настройки</h1>
            <EmployeesList
                employeesData={props.drivers}
            ></EmployeesList>
            <EmployeesList
                employeesData={props.conductors}
            ></EmployeesList>
        </section>
    );
}

export default TransportControl;