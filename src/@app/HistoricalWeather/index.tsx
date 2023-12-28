import HeaderHW from "./HeaderHW";
import SectionHW from "./SectionHW";
import DayPickerHW from "./DayPickerHW";
import "./css/styles.css";
import { useAppSelector } from "../../@core/hooks";
const HistoricalWeather = ({ foreCastData, dailyData }) => {
  return (
    <div className="basis-full h-full bg-blue-200 px-24 py-16">
      <HeaderHW data={foreCastData}/>
      <SectionHW data={foreCastData} />
      <DayPickerHW data={dailyData} />
    </div>
  );
};
export default HistoricalWeather;
