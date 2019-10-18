import * as React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { Appointment, SectionTitle } from './components';

const DATA = [
  {
    title: '17 октября',
    data: [
      {
        time: '15:30',
        active: true,
        diagnosis: 'пульпит',
        user: {
          fullname: 'Максим Максаков',
          avatar: 'https://sun9-70.userapi.com/c852124/v852124111/b7b76/jdS_fJoAi-s.jpg'
        }
      },
      {
        time: '18:00',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Алексей Калюжный',
          avatar: 'https://sun9-55.userapi.com/c852224/v852224328/67b60/H_wuyzJeZr0.jpg'
        }
      }
    ]
  },
  {
    title: '18 октября',
    data: [
      {
        time: '11:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Анатолий Кучин',
          avatar: 'https://sun9-16.userapi.com/c824411/v824411735/13de79/AEpd71COOKM.jpg?ava=1'
        }
      },
      {
        time: '13:20',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Павел Дуров',
          avatar: 'https://sun9-16.userapi.com/c824411/v824411735/13de79/AEpd71COOKM.jpg?ava=1'
        }
      }
    ]
  }
]

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} /> }
        renderSectionHeader={({ section: { title }}) => (
          <SectionTitle>{ title }</SectionTitle>
        )}
      />
      <PlusButton>
        <Ionicons name='ios-add' size={36} color='white' />
      </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2A86FF;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.7;
  shadow-radius: 3.5;
  elevation: 4;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
  padding: 0 20px;
`;