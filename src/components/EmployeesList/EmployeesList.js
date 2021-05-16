import EditPanel from './EditPanel';
import './EmployeesList.css';
import add from '../../assets/plus.png';

function EmployeesList(props) {
    return (
        <section className="employeesList" key={props.title}>
            <div className="addMenu">
                <h2>{props.title}</h2>
                <img src={add} className="addEmployee" onClick={e => props.handleAddClick(props.title)} alt={"Add"+props.title} width="16px" height="16px"></img>
            </div>
            <table>
                <tbody>
                    {props.employeesData.map(employee => {
                        return (
                        <tr key={employee.id}>
                            <td className="employeeID">{employee.id}</td>
                            <td className="employeeName">{employee.name}</td>
                            <td className={employee.inVacation ? "active" : ""}><span>отпуск</span></td>
                            {employee.needsConductor !== undefined &&
                                <td className={employee.needsConductor ? "active" : ""}><span>нужен кондуктор</span></td>
                            }
                            <EditPanel
                                category={props.title}
                                employeeId={employee.id}
                                handleEditClick={props.handleEditClick}
                                handleDeleteClick={props.handleDeleteClick}
                            ></EditPanel>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
}

export default EmployeesList;