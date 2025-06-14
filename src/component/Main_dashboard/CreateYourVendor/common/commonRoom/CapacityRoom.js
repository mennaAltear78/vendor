import Counter from "../Counter";

const CapacityRoom = ({ label, icon, valueHandler }) => {
  return (
    <div className="mb-[-20px] flex items-center justify-between">
      <div className="flex items-center justify-center gap-[10px]">
        <img src={icon} alt={label} height="20px" />
        <p>{label}</p>
      </div>
      <Counter
        big={true}
        frame={true}
        CounterNmberHandeler={valueHandler}
      />
    </div>
  );
};

export default CapacityRoom;
