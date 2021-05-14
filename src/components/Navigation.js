function Navigation(props) {
    return (
        <nav>
            <section class="layers"></section>
            <section class="links">
                {
                    props.links.map(link => <a href="#" class="link" key={link}>{link}</a>)
                }
            </section>
        </nav>
    );
}

export default Navigation;