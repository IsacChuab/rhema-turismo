import styles from './Depositions.module.css';

export const Depositions = () => {
    return (
        <div className={styles.boxDepositions}>
            <h1>Depoimentos</h1>

            <div className={styles.gridDeposition}>
                <div className={styles.depositionDescription}>
                    <h3>
                        &quot;Incrível! Israel é um destino único que combina história, 
                            espiritualidade e paisagens deslumbrantes.&quot;
                    </h3>
                    <h3 className={styles.author}>
                        Lucas S.
                    </h3>
                </div>

                <div className={styles.depositionDescription}>
                    <h3>
                        &quot;Israel me encantou! Descobri um país cheio de vida, 
                        cultura e uma energia contagiante.&quot;
                    </h3>
                    <h3 className={styles.author}>
                        Maria R.
                    </h3>
                </div>

                <div className={styles.depositionDescription}>
                    <h3>
                        &quot;Uma viagem a Israel é uma experiência transformadora.
                        Emocionante do começo ao fim!&quot;
                    </h3>
                    <h3 className={styles.author}>
                        Rafael M.
                    </h3>
                </div>
            </div>
        </div>
    )
}
