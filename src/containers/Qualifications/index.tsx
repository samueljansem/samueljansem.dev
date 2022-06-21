import { ContainerTitle } from '../../components';
import { Container, Head, QualificationItem, QualificationWrapper, Wrapper } from './styles';

import { BiBriefcase, BiBookBookmark, BiCalendarAlt } from 'react-icons/bi';

export function Qualifications() {
    return (
        <Container>
            <ContainerTitle>Qualificações</ContainerTitle>
            <Wrapper>
                <Head>
                    <BiBriefcase size={24} />
                    <h3>Experiências</h3>
                </Head>
                <QualificationItem>
                    <strong>Desenvolvedor Pleno</strong>
                    <QualificationWrapper>
                        <span>Pense Open</span>
                        <span>
                            <BiCalendarAlt />
                            Dez 2020 - atual
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
                <QualificationItem>
                    <strong>Desenvolvedor Junior</strong>
                    <QualificationWrapper>
                        <span>Sinqia</span>
                        <span>
                            <BiCalendarAlt />
                            Abr 2020 - Nov 2020
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
                <QualificationItem>
                    <strong>Estágiário Desenvolvimento</strong>
                    <QualificationWrapper>
                        <span>Jabil</span>
                        <span>
                            <BiCalendarAlt />
                            Jul 2019 - Abr 2020
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
            </Wrapper>
            <Wrapper>
                <Head>
                    <BiBookBookmark size={24} />
                    <h3>Educação</h3>
                </Head>
                <QualificationItem>
                    <strong>Bacharelado em Sistemas de Informação</strong>
                    <QualificationWrapper>
                        <span>Pontifícia Universidade Católica de Minas Gerais (PUC&nbsp;MG)</span>
                        <span>
                            <BiCalendarAlt />
                            Fev 2019 - Jul 2023
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
                <QualificationItem>
                    <strong>Técnico em Automação Industrial</strong>
                    <QualificationWrapper>
                        <span>
                            Instituo Federal de Educação, Ciência e Tecnologia de Minas Gerais
                            (IFMG)
                        </span>
                        <span>
                            <BiCalendarAlt />
                            Mar 2014 - Dez 2018
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
            </Wrapper>
        </Container>
    );
}
