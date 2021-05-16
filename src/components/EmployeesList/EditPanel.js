import './EditPanel.css';
import edit from '../../assets/edit.png';
import del from '../../assets/delete.png';

function EditPanel(props) {
    return (
        <>
            <td>
                <img className="editPanel" src={edit} onClick={e => props.handleEditClick(props.category, props.employeeId)} alt="Edit" width="14px" height="16px"></img>
            </td>
            <td>
                <img className="editPanel" src={del} onClick={e => props.handleDeleteClick(props.category, props.employeeId)} alt="Delete" width="16px" height="22px"></img>
            </td>
        </>
    );
}

export default EditPanel;