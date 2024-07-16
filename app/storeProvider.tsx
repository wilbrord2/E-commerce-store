'use client';
import { Provider } from 'react-redux';
import { Store } from '@/lib/store';
import { ReactNode } from 'react';

const ClientProvider = ({ children }: { children: ReactNode }) => {

  return <Provider store={Store}> {children} </Provider>;
};

export default ClientProvider;
