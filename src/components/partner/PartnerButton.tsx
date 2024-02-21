import { Button } from '@components/ui/button';

const PartnerButton = () => {
  return (
    <Button variant="outline" onClick={() => alert('파트너')}>
      파트너
    </Button>
  );
};

export default PartnerButton;
