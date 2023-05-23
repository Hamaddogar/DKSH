import { toast } from 'react-toastify';









export const Toaster = (type, error) => {

    switch (type) {
      case 'loading':
        toast.loading('Loading...', {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true
        });
        break;
      case 'success':
        toast.success('Loaded', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true
        });
        break;
      case 'error':
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true
        });
        break;
  
      default:
        break;
    }
  
  
  
  
  
  
  
  
  }