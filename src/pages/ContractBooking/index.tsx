import SubHeader from "../../components/SubHeader"

interface ContractProps {
  height?: number;
}


const ContractBooking = ({ height }: ContractProps) => {

  return (
    <>
      <div style={{ height: `${height}rem`, overflow: 'auto' }}>
        <SubHeader title="Contract Booking"/>
      </div>
    </>
  );
}

export default ContractBooking;
