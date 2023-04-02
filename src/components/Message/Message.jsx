import PropTypes from 'prop-types';
import { Text, Wrapper } from './Message.styled';

export function Message() {
  return (
    <Wrapper>
      <Text>Contact list is empty.</Text>
    </Wrapper>
  );
}

Message.propTypes = {
  text: PropTypes.string,
};
