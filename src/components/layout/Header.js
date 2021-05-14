import './Header.css';
import sandwich from '../../assets/sandwich.png';
import logo from '../../assets/logo.svg';
import help from '../../assets/help.png';
import settings from '../../assets/settings.png';
import weather from '../../assets/weather.png';

function Header(props) {
    return (
        <header>
            <section className="left">
                <menu className="sandwich">
                    <img src={sandwich} alt="Sandwich menu" width="18px" height="12px"></img>
                </menu>
                <section className="logo">
                    <img src={logo} alt="Logo" width="93.26px" height="40px"></img>
                </section>
                <section className="pageTitle">{props.pageTitle}</section>
            </section>
            <section className="right">
                <section className="dateTime">
                    <section className="time">23:00</section>
                    <section className="date">
                        <section className="day">четверг</section>
                        <section className="dmy">23.05.2019</section>
                    </section>
                </section>
                <section className="weather">
                    <img src={weather} alt="Weather" width="20px" height="18px"></img>
                    <section className="degree">22.8 °</section>
                </section>
                <section className="login">Войти</section>
                <section className="settings">
                    <img src={settings} alt="Settings" width="16px" height="16px"></img>
                </section>
                <section className="help">
                    <img src={help} alt="Help" width="17px" height="17px"></img>
                </section>
            </section>
        </header>
    );
}

export default Header;