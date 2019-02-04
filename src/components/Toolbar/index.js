import React from 'react';
import styled from '@emotion/styled';

const Title = styled('h1')`
  margin: 0 16px;
  text-align: center;
  font-size: 24px;
`;

const Container = styled('div')`
  color: #eee;
  background: #222;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserContainer = styled('div')`
  margin: 0 16px;
`;

export default () => (
  <Container>
    <Title>FAKE</Title>
    <UserContainer>Anonymous User</UserContainer>
  </Container>
);
