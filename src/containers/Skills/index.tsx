import { BsCheck2Circle } from 'react-icons/bs';
import { ContainerTitle } from '../../components';
import { Container, SkillAreaTitle, SkillItem, SkillsArea, SkillsList, Wrapper } from './styles';

export function Skills() {
    return (
        <Container>
            <ContainerTitle>Habilidades</ContainerTitle>
            <Wrapper>
                <SkillsArea>
                    <SkillAreaTitle>Backend</SkillAreaTitle>
                    <SkillsList>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>.NET</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>NodeJS</strong>
                                <span>Intermediário</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Typescript</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>SQL</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>NoSQL</strong>
                                <span>Intermediário</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Docker</strong>
                                <span>Básico</span>
                            </div>
                        </SkillItem>
                    </SkillsList>
                </SkillsArea>
                <SkillsArea>
                    <SkillAreaTitle>Frontend</SkillAreaTitle>
                    <SkillsList>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>HTML</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>CSS</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Javascript</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>ReactJS</strong>
                                <span>Intermediário</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>NextJS</strong>
                                <span>Intermediário</span>
                            </div>
                        </SkillItem>
                    </SkillsList>
                </SkillsArea>
                <SkillsArea>
                    <SkillAreaTitle>DevOps</SkillAreaTitle>
                    <SkillsList>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Azure</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>CI/CD</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Microserviços</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Infra as code</strong>
                                <span>Intermediário</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Cloud</strong>
                                <span>Intermediário</span>
                            </div>
                        </SkillItem>
                    </SkillsList>
                </SkillsArea>
            </Wrapper>
        </Container>
    );
}
