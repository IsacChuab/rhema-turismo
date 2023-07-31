import { Button } from '@material-ui/core';
import styles from './ContactBox.module.css'
import { PhoneInput } from '../PhoneInput';
import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';

export interface IContactForm {
    name: string;
    email: string;
    phoneNumber: string;
    acceptTerm: boolean
}

export const ContactBox = () => {
    const [ formData, setForm ] = useState<IContactForm>({} as IContactForm);

    const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setForm({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }, [formData])

    const handleWtsButton = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        window.open('https://wa.me/5515991440815?text=Olá!%20:)%20me%20fale%20mais%20sobre%20Israel?', '_blank');
    }
    
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            'service_grvrr7a',
            'template_0whno26',
            { ...formData }, 
            'Ryq3_1iw8AVRu6vxr'
        ).then((resopnse) => {
            alert('Suas informações foram enviadas com sucesso');

            setForm({
                name: '',
                phoneNumber: '',
                email: '',
                acceptTerm: false
            })
        }, (err) => {
            alert('Algo deu errado, tente novamente mais tarde');
        });
    }

    return (
        <div className={styles.contactBox}>
            <div className={styles.containerContactBox}>
                <div className={styles.contactForm}>
                    <form onSubmit={submit} method='POST'>
                        <label>
                            Nome Completo:<br />
                            <input 
                                type='text' 
                                name='name' 
                                required
                                placeholder="Digite seu nome completo" 
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            E-mail: <br />
                            <input 
                                type='email'
                                name='email'
                                required
                                placeholder="example@example.com"
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Telefone com DDD: <br />
                            <PhoneInput
                                type='tel' 
                                name='phoneNumber' 
                                required
                                placeholder="(XX) XXXXX-XXXX" 
                                maxLength={11}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            <input 
                                type='checkbox' 
                                name='acceptTerm' 
                                required
                                onChange={handleChange} 
                            />
                            Eu aceito enviar minhas informações
                        </label>

                        <div className={styles.buttonContact}>
                            <Button
                                type='submit'
                                style={{ 
                                    color: 'var(--background-theme)', 
                                    border: '2px solid var(--background-theme)',
                                    width:'200px',
                                    borderRadius: '50px',
                                    position: 'initial'
                                }}>
                                Contate-me
                            </Button>
                        </div>
                    </form>
                </div>
                
                <div className={styles.contactMessage}>
                    <h2>Deixe seu Contato</h2>

                    <h3>Entraremos em contato em breve.</h3>
                        <h3>
                            Você também pode mandar mensagem em nosso <br />
                            <a onClick={handleWtsButton}>Whats App</a> (15) 99144-0815.
                        </h3>
                </div>
            </div>
        </div>
    )
}