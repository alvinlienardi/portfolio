import { useState, useEffect } from 'react';

const navbarOptions = [{
    name: "Top",
    link: "#top"
}, {
    name: "Projects",
    link: "#projects"
}, {
    name: "Contact",
    link: "#contact"
}];

function Navbar() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    }

    useEffect(() => {
        const handleScroll = () => {
            setSelectedOption(null);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <nav>
            <div>
                <ul>
                    {navbarOptions.map((option) => (
                        <li 
                        key={option.name}
                        className={selectedOption === option ? "active" : ""}
                        onClick={() => handleOptionClick(option)}
                        >
                            <a href={option.link}>{option.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;