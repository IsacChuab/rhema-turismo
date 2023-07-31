import Image from 'next/image';
import styles from './Equip.module.css';
import tiagoSchneider from '../../../public/images/tiagoSchneider.jpeg';
import ingridSchneider from '../../../public/images/ingridSchneider.jpeg';
import prMarceloCintra from '../../../public/images/prMarceloCintra.png';

import { useMediaQueries } from '@/Hooks/MediaQuery';

export const Equip = () => {
    const { isMobile, isTablet } = useMediaQueries();

    return (
        <div className={styles.boxEquip}>
            <h1>Nossa Equipe</h1>

            <div className={styles.people}>
                <div className={styles.peopleGrid}>
                    {!isMobile && !isTablet ? (
                        <Image 
                            src={tiagoSchneider} 
                            alt='Tiago Schneider' 
                            height={500}
                            style={{
                                borderRadius: '15px'
                            }} 
                        />
                    ) : (
                        <Image 
                            src={tiagoSchneider} 
                            alt='Tiago Schneider' 
                            height={400}
                            style={{
                                borderRadius: '15px'
                            }} 
                        />
                    )}
                    <div className={styles.peopleDescription}>
                        <h2>Tiago Schneider</h2>
                        <h3>
                            Advogado, já visitou diversos países e estados brasileiros. 
                            Morou 2 anos na Espanha, onde adquiriu a proficiência em Espanhol. 
                            O especialista nos trâmites legais é o responsável pela área 
                            jurídica e financeira da Rhema Turismo.
                        </h3>
                    </div>
                </div>
                
                <div className={styles.peopleGridInverse}>
                    <div className={styles.peopleDescription}>
                        <h2>Ingrid Schneider</h2>
                        <h3>
                            Formada em Direito e Influencer de Viagens, já visitou diversos 
                            países ao redor do mundo compartilhando dicas de viagem, 
                            gastronomia e hospedagem. Fluente em Inglês, fala 4 idiomas, 
                            e é a responsável pela elaboração de etinerários, atendimento ao 
                            cliente, tramitação de todos os pacotes oferecidos, marketing, 
                            vídeo e criação de conteúdo das viagens.
                        </h3>
                    </div>

                    {!isMobile && !isTablet ? (
                        <Image 
                            src={ingridSchneider} 
                            alt='Ingrid Schneider' 
                            height={500}
                            style={{
                                borderRadius: '15px'
                            }} 
                        />
                    ) : (
                        <Image 
                            src={ingridSchneider} 
                            alt='Ingrid Schneider'
                            height={400}
                            style={{
                                borderRadius: '15px'
                            }} 
                        />
                    )}
                </div>

                <div className={styles.peopleGrid}>
                    {!isMobile && !isTablet ? (
                        <Image 
                            src={prMarceloCintra} 
                            alt='Pr. Marcelo Cintra' 
                            height={500}
                            style={{
                                borderRadius: '15px'
                            }} 
                        />
                    ) : (
                        <Image 
                            src={prMarceloCintra} 
                            alt='Pr. Marcelo Cintra'
                            height={350} 
                            style={{
                                borderRadius: '15px'
                            }} 
                        />
                    )}
                    <div className={styles.peopleDescription}>
                        <h2>Marcelo Cintra</h2>
                        <h3>
                            Formação em Teologia e Lider religioso, especialista na 
                            história hebraica e literatura sagrada e mais de 6 anos 
                            de experiência em expedições em grupo para o Oriente Médio. 
                            É o responsavel pela adequação de roteiros, vendas, 
                            tramitação corporativa e será o Guia Religioso da expedição 
                            para a Terra Santa.
                        </h3>
                    </div>
                </div>
            </div>            
        </div>
    )
}