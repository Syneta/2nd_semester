'use client'
import Image from 'next/image';
import './/globals.css'
import { title } from 'process';
import { useState, Fragment, useCallback } from 'react';
import GameReviews from './GameReviews';


export default function Home() {
  return (
    <GameReviews/>
  );
}
