function Navigation(props) {
    return (
        <nav>
            <section className="layers"></section>
            <section className="links">
                {
                    props.links.map(link => <button className="link" key={link}>{link}</button>)
                }
            </section>
        </nav>
    );
}

export default Navigation;