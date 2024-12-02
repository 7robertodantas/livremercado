'use client';

import LandingProducts from '@/components/LandingProducts';
import { useSearchParams } from 'next/navigation';

export default function PageComponent() {
  const searchParams = useSearchParams();
  
  const page = parseInt(searchParams.get('page') || '0', 10);
  const size = parseInt(searchParams.get('size') || '5', 10);
  const search = searchParams.get('search') || '';

  return (
    <LandingProducts page={page} size={size} search={search} />
  );
}