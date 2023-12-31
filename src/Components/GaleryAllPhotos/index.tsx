import Image from 'next/image';
import styles from './GaleryAllPhotos.module.css';
import { useMediaQueries } from '@/Hooks/MediaQuery';
import photoOne from '../../../public/images/photo-1.jpg';
import photoTwo from '../../../public/images/photo-2.jpg';
import photoThree from '../../../public/images/photo-3.jpeg';
import photoFour from '../../../public/images/photo-4.jpg';
import photoFive from '../../../public/images/photo-5.jpg';
import photoSix from '../../../public/images/photo-6.jpg';
import photoSeven from '../../../public/images/photo-7.jpg';
import photoEight from '../../../public/images/photo-8.jpg';
import photoNine from '../../../public/images/photo-9.jpeg';
import photoTen from '../../../public/images/photo-10.jpeg';


export const GaleryAllPhotos = () => {
    const { isMobile, isTablet } = useMediaQueries();

    const photos = [
        { id: photoOne },
        { id: photoTwo },
        { id: photoThree },
        { id: photoFour },
        { id: photoFive },
        { id: photoSix },
        { id: photoSeven },
        { id: photoEight },
        { id: photoNine },
        { id: photoTen }
    ];

    return (
        <div className={styles.boxModalGalery}>
            <div className={styles.title}>
                <h1>
                    Galeria
                </h1>
            </div>

            <div className={styles.photos}>
                {photos.map((item: any, i: number) => 
                    !isMobile && !isTablet ? (
                        <Image
                            key={i}
                            className={styles.img}
                            src={item.id} 
                            alt='Galeria de fotos' 
                            style={{ 
                                borderRadius: '15px',
                                height: '15.5rem',
                                width: '15.5rem',
                            }}
                        />
                    ) : (
                        <Image
                            key={i}
                            src={item.id} 
                            alt='Galeria de fotos' 
                            style={{
                                borderRadius: '15px',
                                height: '375px',
                                width: '375px',
                                objectFit:'cover',
                                marginBottom: '1rem'
                            }} 
                        />
                    )
                )}
            </div>
        </div>
    )
}