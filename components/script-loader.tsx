'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function ScriptLoader() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const companyName = searchParams.get('name');
    
    if (companyName) {
      fetch(`/api/hello?name=${companyName}`)
        .then(res => res.json())
        .then(data => {
          if (data.script) {
            const script = document.createElement('script');
            script.src = data.script;
            script.async = true;
            document.body.appendChild(script);
          }
        })
        .catch(error => {
          console.error('Error loading script:', error);
        });
    }
  }, [searchParams]);

  return null;
}