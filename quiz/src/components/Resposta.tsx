import RespostaModel from "@/model/resposta"
import styles from "@/styles/Resposta.module.css"

interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Resposta(props: RespostaProps) {
    const resposta = props.valor
    return (
        <div className={styles.resposta}>
            <div className={styles.conteudoResposta} onClick={() => props.respostaFornecida(props.indice)}>
                <div className={styles.frente}>
                    <div className={styles.letra} style={{ background: props.corLetra, color: '#ffff' }}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>
                    {resposta.certa ? (
                        <div className={styles.certa}>
                            <div>A resposta certa é...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    ) : (
                        <div className={styles.errada}>
                            <div>A resposta errada é...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}