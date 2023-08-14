import Image from 'next/image';
import styles from './Galery.module.css';
import fstPhoto from '../../../public/images/photo-3.jpeg';
import sndPhoto from '../../../public/images/photo-4.jpg';
import { useMediaQueries } from '@/Hooks/MediaQuery';
import { ModalGalery } from '../ModalGalery';
import { useState } from 'react';
import { GaleryAllPhotos } from '../GaleryAllPhotos';

export const Galery = () => {
    const { isMobile, isTablet } = useMediaQueries();

    const [ modalOpen, setModalIsOpen ] = useState(false);

    return (
        <div className={styles.boxGalery}>
           <ModalGalery isOpen={modalOpen} setIsOpen={setModalIsOpen} id='modal'>
                <GaleryAllPhotos />
            </ModalGalery>
           

            <div className={styles.title}>
                <h1>
                    Galeria
                </h1>
                <a 
                    onClick={() => {
                        setModalIsOpen(true)
                    }}>
                    Ver todas as fotos  -&gt;
                </a>
            </div>

            <div className={styles.photos}>
                {!isMobile && !isTablet ? (
                    <>
                        <Image 
                            src={fstPhoto} 
                            alt='Hotel em Israel' 
                            style={{ 
                                borderRadius: '15px',
                                width: '45%',
                            }}
                        />
                        <Image 
                            src={sndPhoto} 
                            alt='Hotel em Israel' 
                            style={{ 
                                borderRadius: '15px',
                                width: '45%',
                            }}
                        />
                    </>
                ) : (
                    <>
                        <Image 
                            src={fstPhoto} 
                            alt='Israel' 
                            style={{
                                borderRadius: '15px',
                                height: '375px',
                                width: '375px',
                                objectFit:'cover',
                                marginBottom: '1rem'
                            }} 
                        />
                        <Image 
                            src={sndPhoto} 
                            alt='Israel' 
                            style={{
                                borderRadius: '15px',
                                height: '375px',
                                width: '375px',
                                objectFit:'cover',
                                marginBottom: '1rem'
                            }} 
                        />
                    </>
                )}
            </div>
        </div>
    )
}