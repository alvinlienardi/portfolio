import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Languages from "./Languages";

function Header() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 300);
    }, []);

    return(
        <header className={`header ${visible ? 'visible' : ''}`}>
            <Navbar />
            {/* <Languages /> */}
        </header>
    );
}

export default Header;