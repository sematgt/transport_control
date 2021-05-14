import './Navigation.css';
import arrowDown from '../../assets/arrowDown.png';

function Navigation(props) {
    return (
        <nav>
            <section className="layers">
                    <span>Слои</span>
                    <img src={arrowDown} width="8px" height="4px"></img>
            </section>
            <section className="links">
                {
                    props.links.map(link => <span className="link" key={link}>{link}</span>)
                }
            </section>
        </nav>
    );
}

export default Navigation;