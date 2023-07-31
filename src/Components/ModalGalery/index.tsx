import styles from './ModalGalery.module.css';

interface IProps {
    isOpen: boolean;
    setIsOpen: any;
    children: any;
    id: string;
}

export const ModalGalery = ({ children, isOpen, setIsOpen, id='modal' }: IProps) => {
    if(!isOpen) return;

    const handleCloseBackdrop = (e: any) => {
        e.preventDefault();
        if (e.target.id != id) return;
        setIsOpen(false)
    }

    return (
        <div id={id} className={styles.backdrop} onClick={handleCloseBackdrop}>
            <div className={styles.modal}>
                <button type="button" className={styles.modalClose} onClick={() => setIsOpen(false)}/>
                {children}
            </div>
        </div>
    )
}