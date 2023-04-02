import PropTypes from 'prop-types';
import { Container, Title } from './Layout.styled';

export function Layout({ children, title }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
};
