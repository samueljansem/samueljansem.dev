import { Header } from '../../components';
import { Content } from './styles';
import { Presentation, Qualifications, Skills } from '../../containers';

export function Home() {
    return (
        <>
            <Header />
            <Content>
                <Presentation />
                <Skills />
                <Qualifications />
            </Content>
        </>
    );
}
