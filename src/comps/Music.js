import styles from '../styles/MusicPage.module.css'
import musicImg from '../assests/tabtxt.png'

const Music = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.musicImgContainer}>
                    <img className={styles.imgTag} src={musicImg} alt="test" />
                </div>
            </div>
        </>
    );
}

export default Music;