import { useEffect, useRef } from 'react';
import Clipboard from 'clipboard';
import { toast } from "react-hot-toast";

const CopyToClipboard = ({ textToCopy, children }) => {
  const copyRef = useRef(null);

  useEffect(() => {
    const clipboard = new Clipboard(copyRef.current, {
      text: () => textToCopy,
    });

    const handleSuccess = () => {
      toast.success('Text copied successfully!');
    };

    const handleError = () => {
      toast.error('Failed to copy text!');
    };

    clipboard.on('success', handleSuccess);
    clipboard.on('error', handleError);

    return () => {
      clipboard.destroy();
    };
  }, [textToCopy]);

  return (
    <span ref={copyRef}>
      {children}
    </span>
  );
};

export default CopyToClipboard;
