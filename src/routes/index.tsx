// import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import CustomRoute from './CustomRoute';

import { Home } from '../pages/Home';
import { Game } from '../pages/Game';
import { Leaderboards } from '../pages/LeaderBoards';
import { Background } from '../components';
import { useAppSelector } from '../hooks';
import { selectPlayerName } from '../pages/Home/redux';

function Router() {
  const name = useAppSelector(selectPlayerName);
  return (
    <BrowserRouter>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={name ? <Game /> : <Navigate to="/" />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
