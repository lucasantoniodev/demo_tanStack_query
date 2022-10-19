import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { QueryProvider } from './QueryProvider';
import { router } from './routes';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryProvider>
		<RouterProvider router={router} />
		</QueryProvider>
	</React.StrictMode>
);
