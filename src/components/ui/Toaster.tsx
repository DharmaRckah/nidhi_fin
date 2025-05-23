import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, XCircleIcon, AlertCircleIcon, InfoIcon, XIcon } from 'lucide-react';
export const toastEventManager = {
  listeners: {},
  addListener: function (eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  },
  removeListener: function (eventName, callback) {
    if (this.listeners[eventName]) {
      this.listeners[eventName] = this.listeners[eventName].filter(listener => listener !== callback);
    }
  },
  emit: function (eventName, data) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach(callback => callback(data));
    }
  }
};
export const toast = {
  success: message => {
    toastEventManager.emit('toast', {
      type: 'success',
      message
    });
  },
  error: message => {
    toastEventManager.emit('toast', {
      type: 'error',
      message
    });
  },
  warning: message => {
    toastEventManager.emit('toast', {
      type: 'warning',
      message
    });
  },
  info: message => {
    toastEventManager.emit('toast', {
      type: 'info',
      message
    });
  }
};
export const Toaster = () => {
  const [toasts, setToasts] = useState([]);
  useEffect(() => {
    const handleToast = toast => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts(prevToasts => [...prevToasts, {
        ...toast,
        id
      }]);
      setTimeout(() => {
        setToasts(prevToasts => prevToasts.filter(t => t.id !== id));
      }, 3000);
    };
    toastEventManager.addListener('toast', handleToast);
    return () => {
      toastEventManager.removeListener('toast', handleToast);
    };
  }, []);
  const getToastIcon = type => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircleIcon className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <InfoIcon className="w-5 h-5 text-blue-500" />;
      default:
        return null;
    }
  };
  const getToastClass = type => {
    switch (type) {
      case 'success':
        return 'border-green-500 bg-green-50 dark:bg-green-900 dark:bg-opacity-20';
      case 'error':
        return 'border-red-500 bg-red-50 dark:bg-red-900 dark:bg-opacity-20';
      case 'warning':
        return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20';
      case 'info':
        return 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20';
      default:
        return 'border-gray-300 bg-white dark:bg-gray-800';
    }
  };
  return <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4 pointer-events-none">
      {toasts.map(toast => <div key={toast.id} className={`max-w-sm w-full pointer-events-auto overflow-hidden rounded-lg shadow-lg border-l-4 ${getToastClass(toast.type)} transform transition-all duration-500 ease-in-out animate-slide-in`}>
          <div className="p-4 flex items-start">
            <div className="flex-shrink-0">{getToastIcon(toast.type)}</div>
            <div className="ml-3 w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {toast.message}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button className="bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none" onClick={() => setToasts(prevToasts => prevToasts.filter(t => t.id !== toast.id))}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>)}
    </div>;
};