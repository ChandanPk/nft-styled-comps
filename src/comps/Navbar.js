// import { Button, styled } from "@mui/material";
import Login from './Login'
import { useState } from "react";
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const NavButton = styled(Button)({
    //     backgroundColor: "#555",
    //     display: "inline-block",
    //     height: "100%"',
    //     "&:hover": {
    //         backgroundColor: "#fff",
    //         color: "#111"
    //     }
    // })

    return (
        <div className={styles.navContainer}>
            <div className={styles.rightNavItems}>
                <Link class="links" to="/"><div className={styles.navItem}>Home</div></Link>
                <Link class="links" to="/street"><div className={styles.navItem}>Street NFT</div></Link>
                <Link class="links" to="/music"><div className={styles.navItem}>MUSIC NFT</div></Link>
            </div>

            <div className={styles.rightNavItems}>
                <Link to="/score" className="links"><div className={styles.navItem}>SHA POINTS</div></Link>
                <div className={styles.navItem} onClick={handleOpen}>STREET SHA TOKENS</div>
            </div>
            <Login handleClose={handleClose} open={open} />
        </div>

    );
}

export default Navbar;
