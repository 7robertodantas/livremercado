'use client';

import { useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function PageComponent() {
  const router = useRouter();

  useEffect(() => {
    router.push('/products?page=0');
  }, [router]);
}