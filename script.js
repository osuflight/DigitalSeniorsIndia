/* Mobile navigation */
.menu-toggle {
    display: none;
    background-color: #ffcc00;
    border: none;
    color: #333;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 5px;
    margin: 10px;
}

@media (max-width: 768px) {
    nav ul {
        display: none;
        flex-direction: column;
        background-color: #333;
        position: absolute;
        top: 60px;
        width: 100%;
        left: 0;
        padding: 10px 0;
    }
    
    nav ul.show-menu {
        display: flex;
    }

    nav li {
        margin: 10px 0;
    }
    
    .menu-toggle {
        display: block;
    }
}
