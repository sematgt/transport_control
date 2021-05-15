import './EditPanel.css';
import edit from '../assets/edit.png';
import del from '../assets/delete.png';

function EditPanel(props) {
    return (
        <>
            <td>
                <img src={edit} alt="Edit" width="14px" height="16px"></img>
            </td>
            <td>
                <img src={del} alt="Delete" width="16px" height="22px"></img>
            </td>
        </>
    );
}

export default EditPanel;