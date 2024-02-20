import { Button } from '@components/ui/button';

const AdminButton = () => {
  return (
    <Button variant="outline" onClick={() => alert('관리자')}>
      관리자
    </Button>
  );
};

export default AdminButton;
