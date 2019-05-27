import { useState, useCallback } from 'react';

// Ref https://levelup.gitconnected.com/two-simple-reusable-custom-hooks-for-your-react-apps-a0275724f8ab
// TODO credit T. Blackwell from above article

const useToggle = initial => {
  const [open, setOpen] = useState(initial);

  return [open, useCallback(() => setOpen(status => !status))];
};

export default useToggle;
