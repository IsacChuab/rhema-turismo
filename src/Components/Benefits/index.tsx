import { FlightOutlined, PlaylistAddCheck, RecordVoiceOver, Business, DirectionsCar } from '@material-ui/icons';
import styles from './Benefits.module.css';
import { useMediaQueries } from '@/Hooks/MediaQuery';

export const Benefits = () => {
    const { isMobile } = useMediaQueries();

    return (
        <div className={styles.boxBenefits}>
            <div className={styles.containerBenefits}>
                <h1>
                        Nossas Vantagens
                </h1>

                <div className={styles.fstLineBenefits}>
                        <h2>
                            {!isMobile ? (
                                <FlightOutlined fontSize="large" style={{ marginRight: '1rem' }} />
                            ) : (
                                <FlightOutlined fontSize="small" style={{ marginRight: '0.1rem' }} />
                            )}
                                Passagem aérea
                        </h2>
                        <h2>
                            {!isMobile ? (
                                <DirectionsCar fontSize="large" style={{ marginRight: '1rem' }} />
                            ) : (
                                <DirectionsCar fontSize="small" style={{ marginRight: '0.1rem' }} />
                            )}
                            Translado
                        </h2>

                        <h2>
                            {!isMobile ? (
                                <Business fontSize="large" style={{ marginRight: '1rem' }} />
                            ) : (
                                <Business fontSize="small" style={{ marginRight: '0.1rem' }} />
                            )}
                        Hospedagem
                    </h2>
                </div>
                <div className={styles.sndLineBenefits}>
                    <h2>
                        {!isMobile ? (
                                <RecordVoiceOver fontSize="large" style={{ marginRight: '1rem' }} />
                            ) : (
                                <RecordVoiceOver fontSize="small" style={{ marginRight: '0.1rem' }} />
                            )}
                        Guia turístico em português
                    </h2>
                    
                    <h2>
                            {!isMobile ? (
                                <PlaylistAddCheck fontSize="large" style={{ marginRight: '1rem' }} />
                            ) : (
                                <PlaylistAddCheck fontSize="small" style={{ marginRight: '0.1rem' }} />
                            )}
                            Todos os passeios inclusos
                        </h2>
                </div>
            </div>
        </div>
    )
}