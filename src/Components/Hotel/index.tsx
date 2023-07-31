import Image from 'next/image';
import styles from './Hotel.module.css';
import hotelPhoto from '../../../public/images/hotel.jpg';
import gastronomy from '../../../public/images/gastronomia.jpg';
import passport from '../../../public/images/passaporte.jpg';
import tour from '../../../public/images/tour.png';
import { useMediaQueries } from '@/Hooks/MediaQuery';

export const Hotel = () => {
    const { isMobile, isTablet } = useMediaQueries();

    return (
        <div className={styles.boxHotelAndMore}>
                <h1>Hotel e Mais</h1>

            <div className={styles.content}>
                <div className={styles.contentGrid}>
                    {!isMobile && !isTablet ? (
                        <Image 
                            src={hotelPhoto} 
                            alt='nameHotel' 
                            width={800} 
                            height={510}
                            style={{
                                borderRadius: '15px'
                            }} 
                        />
                    ) : (
                        <Image 
                            src={hotelPhoto} 
                            alt='nameHotel' 
                            style={{
                                borderRadius: '15px',
                                height: '320px',
                                width: '450px'
                            }} 
                        />
                    )}
                    <div className={styles.contentDescription}>
                        <h2>Hotel de luxo e Resort</h2>
                        <h3>
                            Nossa localização é privilegiada à beira-mar, estamos estrategicamente 
                            situados próximos a pontos turísticos históricos e culturais de Israel. 
                            Explore cidades antigas, sítios arqueológicos fascinantes e descubra as 
                            tradições e histórias únicas desta terra sagrada.
                        </h3>
                    </div>
                </div>
                
                <div className={styles.contentGridInverse}>
                    <div className={styles.contentDescription}>
                        <h2>Gastronomia</h2>
                        <h3>
                            Prepare seu paladar para uma verdadeira experiência culinária! 
                            Nosso chef talentoso e sua equipe criativa estão comprometidos 
                            em oferecer uma gastronomia de classe mundial. Delicie-se com um 
                            café da manhã farto e diversificado, com iguarias locais e pratos 
                            internacionais. À noite, o jantar será uma experiência inesquecível, 
                            com menus cuidadosamente preparados, explorando a riqueza de sabores 
                            da culinária israelense, ingredientes frescos e pratos inspirados em 
                            todo o mundo.
                        </h3>
                    </div>

                    {!isMobile && !isTablet ? (
                        <Image 
                            src={gastronomy} 
                            alt='nameHotel' 
                            width={800} 
                            height={510}
                            style={{
                                borderRadius: '15px'
                            }} 
                        />
                    ) : (
                        <Image 
                            src={gastronomy} 
                            alt='nameHotel' 
                            style={{
                                borderRadius: '15px',
                                height: '320px',
                                width: '450px'
                            }} 
                        />
                    )}
                </div>

                <div className={styles.bellowContent}>
                    <div className={styles.smallContent}>
                        {!isMobile && !isTablet ? (
                            <Image 
                                src={passport} 
                                alt='nameHotel' 
                                width={205} 
                                height={205}
                                style={{borderRadius: '15px'}}
                            />
                        ) : (
                            <Image 
                                src={passport} 
                                alt='nameHotel' 
                                style={{
                                    borderRadius: '15px',
                                    height: '150px',
                                    width: '150px'
                                }} 
                            />
                        )}

                        <div className={styles.smallContentDescription}>
                            <h2>Passagens e Transportes</h2>
                            <h3>
                                A sua viagem já está garantida assim como todas as rotas 
                                por onde seu tour irá passar.
                            </h3>
                        </div>
                    </div>
                    
                    <div className={styles.smallContent}>
                        {!isMobile && !isTablet ? (
                                <Image 
                                    src={tour} 
                                    alt='nameHotel' 
                                    width={205} 
                                    height={205}
                                    style={{borderRadius: '15px'}} 
                                />
                            ) : (
                                <Image 
                                    src={tour} 
                                    alt='nameHotel' 
                                    style={{
                                        borderRadius: '15px',
                                        height: '150px',
                                        width: '150px'
                                    }}  
                                />
                            )}

                        <div className={styles.smallContentDescription}>
                            <h2>Tour</h2>
                            <h3>
                                Todo tour na língua portuguesa e referênciando cada ponto com 
                                versículos bíblicos trazendo mais riqueza de conhecimento e 
                                experienciação inesquecível.
                            </h3>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}