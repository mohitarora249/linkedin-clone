import { useState } from 'react';

const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedText(text);
        })
        .catch((error) => {
          console.error('Failed to copy to clipboard:', error);
        });
    } else {
      // Fallback for browsers that do not support the Clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedText(text);
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
      }
      document.body.removeChild(textArea);
    }
  };

  return [copiedText, copyToClipboard];
}

export default useCopyToClipboard;
