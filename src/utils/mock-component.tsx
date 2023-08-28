import {MemoryHistory, createMemoryHistory} from 'history';
import HistoryRouter from '../components/history-route/history-route';
import {HelmetProvider} from 'react-helmet-async';
import React from 'react';

export function withHistory(component: React.JSX.Element, history?: MemoryHistory) {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
}
