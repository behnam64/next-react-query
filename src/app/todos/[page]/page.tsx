'use server';
import React from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import Todos from '@/app/components/todos';
import { getTodosQueryOptions } from '@/app/api/todos';

export async function generateStaticParams() {
  return [1, 2, 3].map((page) => ({
    page: page.toString(),
  }));
}

export default async function Page({
  params: { page },
}: {
  params: { page: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getTodosQueryOptions(page, '20'));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Todos />
    </HydrationBoundary>
  );
}
