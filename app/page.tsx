"use client";

import Image from "next/image";
import styled from "styled-components";

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #111827 100%);
  color: #f8fafc;
`;

const Card = styled.section`
  max-width: 720px;
  width: 100%;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.45);
`;

const Eyebrow = styled.p`
  margin: 0 0 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a5b4fc;
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.05;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #cbd5e1;
  max-width: 52ch;
`;

export default function Home() {
  return (
    <Page>
      <Card>
        <Eyebrow>Next.js + styled-components</Eyebrow>
        <Title>App läuft wieder.</Title>
        <Text>
          Tailwind wurde entfernt und durch styled-components ersetzt. Die App ist jetzt
          auf dem aktuellen Next.js-Setup mit dem richtigen App-Router-Registry konfiguriert.
        </Text>
      </Card>
    </Page>
  );
}
