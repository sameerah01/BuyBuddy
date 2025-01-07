'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export function ScriptLoader() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    const companyName = searchParams.get('name');
    
    // If no company name, stop loading immediately
    if (!companyName) {
      setIsLoading(false);
      return;
    }

    fetch(`/api/hello?name=${companyName}`)
      .then(res => res.json())
      .then(data => {
        if (!data.script) {
          setIsLoading(false);
          return;
        }

        const script = document.createElement('script');
        script.src = data.script;
        script.async = true;
        
        script.onload = () => {
          const interval = setInterval(() => {
            const chatWidget = document.querySelector('molin-shop-ai');
            if (chatWidget?.shadowRoot) {
              const firstShadow = chatWidget.shadowRoot.querySelector('mw-chat');
              const bubble = chatWidget.shadowRoot.querySelector('mw-bubble');
              if (bubble) {
                (bubble as HTMLElement).click();
              }
              if (firstShadow?.shadowRoot) {
                const secondShadow = firstShadow.shadowRoot.querySelector('mw-powered-by');
                if (secondShadow?.shadowRoot) {
                  (secondShadow as HTMLElement).style.display = 'none';
                  clearInterval(interval);
                  setTimeout(() => setIsLoading(false), 500);
                  console.log('Successfully hidden powered-by element');
                }
              }
            }
          }, 100);

          // Timeout as fallback
          setTimeout(() => {
            clearInterval(interval);
            setIsLoading(false);
          }, 5000);
        };

        script.onerror = () => {
          setHasError(true);
          setIsLoading(false);
        };

        document.body.appendChild(script);
      })
      .catch(error => {
        console.error('Error loading script:', error);
        setHasError(true);
        setIsLoading(false);
      });
  }, [searchParams]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
      {hasError ? (
        <div className="text-red-600">Failed to load chat widget</div>
      ) : (
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
      )}
    </div>
  );
}