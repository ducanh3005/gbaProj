'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import GameCard from '@/components/card';
import SearchBar from '@/components/search';
import { Home } from '@/components/home';

export default function HomePage() {
  const roms = [
    {
      title: 'Pokemon - Emerald Version',
      imageUrl: 'https://gba-proj-rom.vercel.app/images/a169.webp', // Update with correct path
      downloadNumber: 123
    },
    {
      title: 'Pokemon - Fire Red Version',
      imageUrl: 'https://gba-proj-rom.vercel.app/images/a169.webp', // Update with correct path
      downloadNumber: 123
    },
    {
      title: 'Pokemon Ultra Violet (1.22) LSA',
      imageUrl: 'https://gba-proj-rom.vercel.app/images/a169.webp', // Update with correct path
      downloadNumber: 123
    },
    {
      title: 'Pokemon - Ruby Version',
      imageUrl: 'https://gba-proj-rom.vercel.app/images/a169.webp', // Update with correct path
      downloadNumber: 123
    },
  ];

  return (
    <>
      <Home />
    </>
  );
}
