const Navbar = () => {
    const links = [
        {
            title: 'Guide',
            href: '#'
        },
        {
            title: 'pricing',
            href: '#'
        },
        {
            title: 'Contact',
            href: '#'
        }
    ];
    return (
        <div className="nav_root">
            <div>Navbar</div>
            <div className="right_nav">
                {links.map((linkk) => (
                    <a className="nav_item" key={linkk.title} href={linkk.href}>
                        {linkk.title}
                    </a>
                ))}
                <button className="button">Start</button>
            </div>
        </div>
    );
};

export default Navbar;
