import styles from './WtsButton.module.css';

import Image from 'next/image';
import wtsImage from '../../../public/icons/wts-logo.png';
import { useMediaQueries } from '@/Hooks/MediaQuery';

export const WtsButton = () => {
    const { isMobile } = useMediaQueries();

    const handleWtsButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        window.open('https://wa.me/5515991440815?text=Olá!%20:)%20me%20fale%20mais%20sobre%20Israel?', '_blank');
    }

    return (
        <div className={styles.buttonWts} onClick={handleWtsButton}>
            {!isMobile ? (
                <Image src={wtsImage} alt="" width={30} height={20}/>
            ) : (
                <Image src={wtsImage} alt="" width={20} height={10}/>
            )}
            <h3>
                Whats App
            </h3>
        </div>
    )
}