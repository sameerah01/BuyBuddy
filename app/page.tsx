import { ScriptLoader } from '@/components/script-loader';
import { MessageCircle, ArrowRight, Store } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScriptLoader />
      <div className="demo-container">
        <div className="demo-content">
          <div className="demo-header">
            <Store className="text-blue-600" size={40} />
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
              Welcome to BuyBuddy Demo
            </h1>
          </div>
          
          <div className="demo-steps">
            <div className="step">
              <div className="step-number">1</div>
              <p>Look for the chat icon in the bottom right corner</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <p>Click the icon to open the chat interface</p>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <p>Start asking questions about products, services, or support</p>
            </div>
          </div>

          <div className="chat-indicator">
            <ArrowRight className="text-blue-600 animate-pulse" size={48} />
          </div>
        </div>
      </div>
    </main>
  );
}