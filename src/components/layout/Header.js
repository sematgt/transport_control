function Header(props) {
    return (
        <header>
            <menu>меню</menu>
            <section className="logo">лого</section>
            <section className="pageTitle">{props.pageTitle}</section>
            <section className="dateTime">
                <section className="time">23:00</section>
                <section className="date">
                    <section className="day">четверг</section>
                    <section className="dmy">23.05.2019</section>
                </section>
            </section>
            <section className="weather">weather</section>
            <section className="login">Войти</section>
            <section className="settings">Настройки</section>
            <section className="help">Помощь</section>
        </header>
    );
}

export default Header;