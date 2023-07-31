import styles from './Banner.module.css';

import Image from 'next/image';
import bannerImg from '../../../public/images/israel-banner.jpg';
import { useMediaQueries } from '@/Hooks/MediaQuery';
import { Link } from 'react-scroll/modules';

export const Banner = () => {
    const { isMobile } = useMediaQueries();

    return (
        <div className={styles.boxBanner}>
            <div className={styles.containerBanner}>
                <div className={styles.bannerText}>
                    <h1>
                        Explore a Terra Santa
                    </h1>

                    <h2>
                        Uma experiência única para
                        alimentar sua alma e <br />
                        enriquecer sua vida
                    </h2>

                    <Link
                        activeClass='active' 
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                        style={!isMobile ? { 
                            color: '#FFF', 
                            border: '2px solid #FFFFFF',
                            width:'200px',
                            borderRadius: '50px',
                            position: 'initial',
                            padding: '0.5rem',
                            textAlign: 'center',
                            cursor:'pointer'                         
                        }: {
                            color: '#FFF', 
                            border: '2px solid #FFFFFF',
                            width:'100px',
                            borderRadius: '50px',
                            position: 'initial',
                            fontSize: '10px',
                            padding: '0.2rem',
                            textAlign: 'center',
                            cursor:'pointer'   
                        }}
                    >
                        Contate-me
                    </Link>
                </div>
                
                <div className={styles.bannerImage}>
                    {!isMobile ? (
                        <Image 
                            src={bannerImg} 
                            alt="Logo Rhema Turísmo" 
                            width={600} height={600} 
                            style={{ borderRadius:'10px' }}
                            objectFit="cover"
                        />
                    ) : (
                        <Image 
                            src={bannerImg} 
                            alt="Logo Rhema Turísmo" 
                            style={{ 
                                borderRadius:'10px',
                                width: '180px',
                                height: '170px',
                                objectFit:'cover'
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}