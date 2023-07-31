import Image from 'next/image';
import styles from './Attractions.module.css';
import fstAttractionImage from '../../../public/images/temple_jerusalem.jpeg';
import scdAttractionImage from '../../../public/images/wastern-wall.jpg';
import trdAttractionImage from '../../../public/images/piremide.jpg';
import { useMediaQueries } from '@/Hooks/MediaQuery';


export const Attractions = () => {
    const { isMobile, isTablet } = useMediaQueries();

    return (
        <div className={styles.boxAttractions}>
            <h1>Pontos Turísticos</h1>

            <div className={styles.content}>
                <div className={styles.attractionsImagesBox}>
                    {!isMobile && !isTablet ? (
                        <Image 
                            src={fstAttractionImage} 
                            alt="Templo de Jerualém" 
                            style={{ 
                                height: "450px",
                                width: "320px",
                                borderRadius: '15px'
                            }} 
                        />
                    ) : (
                        <Image 
                            src={fstAttractionImage} 
                            alt="Templo de Jerualém" 
                            style={{ 
                                height: "410px", 
                                width: "300px", 
                                borderRadius: '15px'
                            }} 
                        />
                    )}
                    <p className={styles.titleAttraction}>Templo de Jerualém</p>
                </div>
                <div className={styles.attractionsImagesBox}>
                    {!isMobile && !isTablet ? (
                        <Image 
                            src={scdAttractionImage} 
                            alt="Muro das Lamentações" 
                            style={{ 
                                height: "450px", 
                                width: "320px", 
                                borderRadius: '15px'
                            }}
                        />
                    ) : (
                        <Image 
                            src={scdAttractionImage} 
                            alt="Muro das Lamentações" 
                            style={{ 
                                height: "410px", 
                                width: "300px", 
                                borderRadius: '15px'
                            }}
                        />
                    )}
                    
                    <p className={styles.titleAttraction}>Muro das Lamentações</p>
                </div>
                <div className={styles.attractionsImagesBox}>
                    {!isMobile && !isTablet ? (
                        <Image 
                            src={trdAttractionImage} 
                            alt="Piramides" 
                            style={{ 
                                height: "450px",
                                width: "320px", 
                                borderRadius: '15px'
                            }} 
                        />
                    ) : (
                        <Image 
                            src={trdAttractionImage} 
                            alt="Piramides" 
                            style={{ 
                                height: "410px",
                                width: "300px", 
                                borderRadius: '15px'
                            }} 
                        />
                    )}
                    <p className={styles.titleAttraction}>Pirâmides do Egito</p>
                </div>
            </div>
        </div>
    )
}