import {
  Section,
  Container,
  Content,
  Title,
  Message,
  Description,
  StyledLink,
} from './styles/NotFound.style'

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Title>404</Title>
          <Message>Something&apos;s missing.</Message>
          <Description>
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </Description>
          <StyledLink to={'/'}>Back to Homepage</StyledLink>
        </Content>
      </Container>
    </Section>
  )
}

export default NotFound
