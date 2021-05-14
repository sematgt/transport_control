import EmployeesList from '../EmployeesList';

function TransportControl(props) {
    return (
        <section className="transportControl">
            <h1>Настройки</h1>
            <div className="employeeLists">
                <EmployeesList
                    employeesData={props.drivers}
                ></EmployeesList>
                <hr></hr>
                <EmployeesList
                    employeesData={props.conductors}
                ></EmployeesList>
            </div>
        </section>
    );
}

export default TransportControl;