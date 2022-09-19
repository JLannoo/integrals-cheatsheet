import React from "react";
import './Footer.css';

export default function Footer(){
    let print;
    React.useEffect(() => {
        print = window.print;
    }, []);

    return (
        <footer className="footer no-print">
            <button onClick={() => print()}>Print (or use <kbd>Ctrl+P</kbd>)</button>
        </footer>
    )
}