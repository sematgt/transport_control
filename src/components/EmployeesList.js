import EditPanel from './EditPanel';
import './EmployeesList.css';
import add from '../assets/plus.png';

function EmployeesList(props) {
    return (
        <section className="employeesList">
            <div className="addMenu">
                <h2>{props.title}</h2>
                <img src={add} alt={"Add"+props.title} width="16px" height="16px"></img>
            </div>
            <table>
                <tbody>
                    {props.employeesData.map(employee => {
                        return (
                        <tr key={employee.id}>
                            <td className="employeeID">{employee.id}</td>
                            <td className="employeeName">{employee.name}</td>
                            <td className={"employeeInVacation" + employee.inVacation ? "active" : ""}><span>отпуск</span></td>
                            {employee.needsConductor !== undefined &&
                                <td className={"employeeNeedsConductor" + employee.needsConductor ? "active" : ""}><span>нужен кондуктор</span></td>
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