import {
    AvatarWrapper,
    ButtonsWrapper,
    Container,
    Role,
    Socials,
    StyledDownloadIcon,
    Title,
    Welcome,
    Wrapper,
} from './styles';
import { Avatar, Button, DownloadButton } from '../../components';

import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

import img from '../../assets/img/profile-pic.jpg';

import cv from '../../assets/pdf/CV_Samuel-Jansem.pdf';

export function Presentation() {
    return (
        <Container>
            <Wrapper>
                <Welcome>👏 Olá, seja bem vind@!</Welcome>
                <Title>
                    <br /> Meu nome é <span>Samuel&nbsp;Jansem</span>
                </Title>
                <Role>Desenvolvedor Web</Role>
                <ButtonsWrapper>
                    <DownloadButton href={cv} download="CV - Samuel Jansem">
                        Download CV
                        <StyledDownloadIcon size={20} />
                    </DownloadButton>
                    <Button outlined>
                        <a href="https://wa.me/05531994851443" target="_blank">
                            <FaWhatsapp size={24} />
                        </a>
                    </Button>
                </ButtonsWrapper>
            </Wrapper>
            <AvatarWrapper>
                <Avatar image={img} alt="Samuel Jansem" fallback="SJ" />
                <Socials>
                    <a href="https://linkedin.com/in/samueljansem" target="_blank">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://github.com/samueljansem" target="_blank">
                        <FaGithub size={32} />
                    </a>
                </Socials>
            </AvatarWrapper>
        </Container>
    );
}
