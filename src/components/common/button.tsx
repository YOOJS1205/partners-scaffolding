import { Button } from '@components/ui/button';
import React from 'react';

const CommonButton = () => {
  return (
    <Button variant="outline" onClick={() => alert('공통버튼')}>
      공통 버튼
    </Button>
  );
};

export default CommonButton;
