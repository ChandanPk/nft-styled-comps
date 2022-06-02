// import { Button, styled } from "@mui/material";
import Login from './Login'
import { useState } from "react";
import styles from '../styles/Navbar.module.css'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const NavButton = styled(Button)({
    //     backgroundColor: "#555",
    //     display: "inline-block",
    //     height: "100%",
    //     "&:hover": {
    //         backgroundColor: "#fff",
    //         color: "#111"
    //     }
    // })

    return (
        <div className={styles.navContainer}>
            <div className={styles.rightNavItems}>
                <div className={styles.navItem}>BUY NFT</div>
                <div className={styles.navItem}>MUSIC NFT</div>
            </div>
            
            <div className={styles.rightNavItems}>
                <div className={styles.navItem}>SHA POINTS</div>
                <div className={styles.navItem} onClick={handleOpen}>STREET SHA TOKENS</div>
            </div>
            <Login handleClose={handleClose} open={open} />
        </div >

    );
}

export default Navbar;
