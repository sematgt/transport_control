import EditPanel from './EditPanel';
import './EmployeesList.css';

function EmployeesList(props) {
    return (
        <section className="employeesList">
            <table>
                <tbody>
                    {props.employeesData.map(employee => {
                        return (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td className={employee.inVacation ? "active" : ""}>отпуск</td>
                            {employee.needsConductor !== undefined &&
                                <td className={employee.needsConductor ? "active" : ""}>нужен кондуктор</td>
                            }
                            <EditPanel></EditPanel>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
}

export default EmployeesList;