const DayPickerHW = ({ data }) => {
  return (
    <div className="flex flex-row place-content-evenly h-2/6">
      {data.map((item, index) => {
        return(
            <div className="flex flex-col justify-center items-center" key={index}>
                <div>{item.time}</div>
                <div className="text-4xl">{Math.floor(item.temperature2mMax)}<sup>o</sup></div>
                <div>MAX</div>
            </div>
        )
      })}
    </div>
  );
};
export default DayPickerHW;
