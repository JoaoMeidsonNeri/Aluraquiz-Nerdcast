/* eslint-disable react/prop-types */
import db from '../../db.json';
import QuizScreen from '../../src/screens/Quiz';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export default function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  );
}