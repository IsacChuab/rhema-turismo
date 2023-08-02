import styles from './Menu.module.css';
import { WtsButton } from "../WtsButton";
import Image from 'next/image';
import rhemaTurismoLogo from '../../../public/images/rhemaTurismoLogo.jpeg';
import { useMediaQueries } from '@/Hooks/MediaQuery';
import { MenuOutlined } from '@material-ui/icons';
import { Link } from 'react-scroll/modules';
import { Button, MenuItem } from '@material-ui/core';
import Menu from '@mui/material/Menu';
import { useState } from 'react';

export const NavBar = () => {
    const { isMobile, isTablet } = useMediaQueries();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div className={styles.top}>
            <div className={styles.contentTop}>
                <div className='rhemaLogo'>
                {!isMobile ? (
                        <Image src={rhemaTurismoLogo} alt="Logo Rhema Turísmo" width={100} height={100} />
                ) : (
                        <Image src={rhemaTurismoLogo} alt="Logo Rhema Turísmo" width={50} height={50} />
                )}
                </div>

                {!isMobile && !isTablet ? (
                    <div className={styles.menuList}>
                        <div className={styles.menuItem}>
                            <Link 
                                activeClass='active' 
                                to='benefits'
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                style={{ 
                                    cursor: 'pointer' 
                                }}
                            >
                                Vantagens
                            </Link>
                        </div>

                        <div className={styles.menuItem}>
                            <Link 
                                activeClass='active' 
                                to='attractions'
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={500}
                                style={{ 
                                    cursor: 'pointer' 
                                }}
                            >
                                Pontos Turísticos
                            </Link>
                        </div>
                        <div className={styles.menuItem}>
                            <Link 
                                activeClass='active' 
                                to='galery'
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={500}
                                style={{ 
                                    cursor: 'pointer' 
                                }}
                            >
                                Galeria
                            </Link>
                        </div>

                        <div className={styles.menuItem}>
                            <Link 
                                activeClass='active' 
                                to='hotelAndMore'
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={500}
                                style={{ 
                                    cursor: 'pointer' 
                                }}
                            >
                                Estadia
                            </Link>
                        </div>
                        
                        <div className={styles.menuItem}>
                            <Link 
                                activeClass='active' 
                                to='depositions'
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={500}
                                style={{ 
                                    cursor: 'pointer' 
                                }}
                            >
                                Depoimentos
                            </Link>
                        </div>

                        <div className={styles.menuItem}>
                            <Link 
                                activeClass='active' 
                                to='contact'
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={500}
                                style={{ 
                                    cursor: 'pointer' 
                                }}
                            >
                                Contate-me
                            </Link>
                        </div>

                        <div className={styles.menuItem}>
                            <Link 
                                activeClass='active' 
                                to='equip'
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={500}
                                style={{ 
                                    cursor: 'pointer' 
                                }}
                            >
                                Nossa Equipe
                            </Link>
                        </div>

                        <WtsButton />
                    </div>
                ) : (
                    <div className={styles.menuListMobile}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuOutlined 
                                fontSize="large" 
                                style={{ color: '#FFF' }}
                            />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem>
                                <Link 
                                    activeClass='active' 
                                    to='benefits'
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onClick={handleClose}
                                    style={{ 
                                        cursor: 'pointer' 
                                    }}
                                >
                                    Vantagens
                                </Link>
                            </MenuItem>
                            
                            <MenuItem>
                                <Link 
                                    activeClass='active' 
                                    to='attractions'
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={handleClose}
                                    style={{ 
                                        cursor: 'pointer' 
                                    }}
                                >
                                    Pontos Turísticos
                                </Link>
                            </MenuItem>

                            <MenuItem>
                                <Link 
                                    activeClass='active' 
                                    to='galery'
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={handleClose}
                                    style={{ 
                                        cursor: 'pointer' 
                                    }}
                                >
                                    Galeria
                                </Link>
                            </MenuItem>

                            <MenuItem>
                                <Link 
                                    activeClass='active' 
                                    to='hotelAndMore'
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={handleClose}
                                    style={{ 
                                        cursor: 'pointer' 
                                    }}
                                >
                                    Estadia
                                </Link>
                            </MenuItem>

                            <MenuItem>
                                <Link 
                                    activeClass='active' 
                                    to='depositions'
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={handleClose}
                                    style={{ 
                                        cursor: 'pointer' 
                                    }}
                                >
                                    Depoimentos
                                </Link>
                            </MenuItem>

                            <MenuItem>
                                <Link 
                                    activeClass='active' 
                                    to='contact'
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    onClick={handleClose}
                                    style={{ 
                                        cursor: 'pointer',
                                    }}
                                >
                                    Contate-me
                                </Link>
                            </MenuItem>

                            <MenuItem>
                                <Link 
                                    activeClass='active' 
                                    to='equip'
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                    style={{ 
                                        cursor: 'pointer' 
                                    }}
                                >
                                    Nossa Equipe
                                </Link>
                            </MenuItem>
                        </Menu>
                        
                        <WtsButton />
                    </div>
                )}
            </div>
        </div>
    )
}