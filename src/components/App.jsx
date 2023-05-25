import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Searchbar, ImageGallery } from 'components';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getNewQuery = newQuery => {
    if (newQuery === searchQuery) {
      toast.warn('Enter a new search query', {
        theme: 'colored',
      });
      return;
    }
    setSearchQuery(newQuery);
  };

  return (
    <>
      <ToastContainer />
      <Searchbar onSubmit={getNewQuery} />
      <ImageGallery searchQuery={searchQuery} />
    </>
  );
};
