import './FormDialog.css';
import React, { useState } from 'react';

function ModalForm(props) {
    const [name, setName] = useState(props.employeeName || '');

    function handleNameChange(e) {
        document.getElementById("name").style.borderColor = "inherit";
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (name === '') { // form validation
            document.getElementById("name").style.borderColor = "#d9534f";
            return;
        }

        let data = {
            id: props.id,
            name, 
            inVacation: document.getElementById('inVacation').checked
        };
        if (props.category === 'Водители') {
            data.needsConductor = document.getElementById('needsConductor').checked;
        }
        if (props.employeeName === '') { // no employee name in props means that this is "add" form
                props.handleSubmit('add', props.category, props.id, data);
        } else { // edit form
            props.handleSubmit('edit', props.category, props.id, data);
        }
        props.handleCloseModal();
    }

    return (
        <form className="modalForm" onSubmit={handleSubmit}>
            {
                props.employeeName === '' && // no employee name in props means that this is "add" form
                <h2>Добавить сотрудника</h2>
            }
            {
                props.employeeName !== '' && // no employee name in props means that this is "add" form
                <h2>Редактировать сотрудника</h2>
            }
            <section className="inputGroup">
                <span className="label">Id:</span>
                <input type="text" id="id" value={props.id} readOnly></input>
            </section>
            <br></br>
            <section className="inputGroup">
                <span className="label">Имя:</span>
                <input type="text" id="name" value={name} onChange={handleNameChange}></input>
            </section>
            <br></br>
            <section className="inputGroup">
                <span className="label">В отпуске:</span>
                <input type="checkbox" id="inVacation" defaultChecked={props.inVacation || false}></input>
            </section>
            <br></br>
            {
                props.category === 'Водители' &&
                <>
                    <section className="inputGroup">
                        <span className="label">Нужен кондуктор:</span>
                        <input type="checkbox" id="needsConductor" defaultChecked={props.needsConductor || false}></input>
                    </section>
                    <br></br>
                </>
            }
            <fieldset className="buttonsPanel">
                <input type="button" id="cancel" value="Отменить" onClick={props.handleCloseModal}></input>
                <input type="submit" id="save" value="Сохранить"></input>
            </fieldset>
        </form>
    );
}

export default ModalForm;