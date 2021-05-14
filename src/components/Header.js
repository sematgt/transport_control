function Header(props) {
    return (
        <header>
            <menu>меню</menu>
            <section class="logo">лого</section>
            <section class="pageTitle">{props.pageTitle}</section>
            <section class="dateTime">
                <section class="time">23:00</section>
                <section class="date">
                    <section class="day">четверг</section>
                    <section class="dmy">23.05.2019</section>
                </section>
            </section>
            <section class="weather">weather</section>
            <section class="login">Войти</section>
            <section class="settings">Настройки</section>
            <section class="help">Помощь</section>
        </header>
    );
}

export default Header;