import { Container, Content } from './styles';
import { ThemeSwitch } from '../../components';

export function Header() {
    return (
        <Container>
            <Content>
                <h2>{'<Samuel Jansem/>'}</h2>
                <ThemeSwitch />
            </Content>
        </Container>
    );
}
