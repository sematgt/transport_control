import './FormDialog.css';

function ModalForm(props) {
    return (
        <form className="modalForm">
            <label>
                Id:
                <input type="text" id="id" value={props.id} onChange={handleChange}></input>
            </label>
            <br></br>
            <label>
                Имя:
                <input type="text" id="name" value={props.employeeName || ''} onChange={handleChange}></input>
            </label>
            <br></br>
            <label>
                В отпуске:
                <input type="checkbox" id="inVacation" checked={props.inVacation || false}></input>
            </label>
            <br></br>
            {
                props.category === 'Водители' &&
                <>
                    <label>
                        Нужен кондуктор:
                        <input type="checkbox" id="needsConductor" checked={props.needsConductor || false}></input>
                    </label>
                    <br></br>
                </>
            }
            <input type="button" id="cancel" value="Отменить"></input>
            <input type="button" id="save" value="Сохранить"></input>
        </form>
    );

    function handleChange() {
        return
    }
}

export default ModalForm;