import Image from 'next/image';
import { WtsButton } from '../WtsButton';
import styles from './Footer.module.css';
import rhemaTurismoLogo from '../../../public/images/rhemaTurismoLogo.jpeg';
import { useMediaQueries } from '@/Hooks/MediaQuery';

export const Footer = () => {
    const { isMobile, isTablet } = useMediaQueries();

    return (
        <div className={styles.boxFooter}>
            <div className={styles.containerFooter}>
                <div className={styles.title}>
                    {!isMobile && !isTablet ? (
                        <Image 
                            src={rhemaTurismoLogo} 
                            alt="Rhema Turísmo" 
                            width={100} 
                            height={100} 
                        />
                    ) : (
                        <Image 
                            src={rhemaTurismoLogo} 
                            alt="Rhema Turísmo" 
                            width={80} 
                            height={80} 
                        />
                    )}
                    <h1>Rhema Turísmo</h1>
                </div>

                <div className={styles.description}>
                    <h3>
                        Empresa especializada em expedições em grupo, nosso objetivo é 
                        ajudar aqueles que sonham em viajar mas por medo, falta de 
                        companhia ou por não saber como se planejar, deixam esse sonho 
                        de lado! Com a Rhema Turismo você tem toda a segurança, 
                        diversão e claro as melhores companhias para sua 
                        viagem dos sonhos.
                    </h3>
                </div>

                <div className={styles.button}>
                    <WtsButton />
                </div>

                <hr />
                <h5>
                    2023 Isac Chuab. All rights reserved.
                </h5>
            </div>
        </div>
    )
}
