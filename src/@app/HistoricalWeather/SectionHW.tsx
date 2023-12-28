import cloudy from "../../@core/assests/animate_icons/darksky/cloudy.svg";
import wind from "../../@core/assests/animate_icons/all/wind.svg";
import PartlyCloudyDay from "../../@core/assests/animate_icons/all/partly-cloudy-day.svg";

const SectionHW = ({ data }) => {
  return (
    <div className="flex items-center justify-center h-4/6">
      <div className="flex overflow-hidden items-center h-full">
        <div className="text-huge pe-4">
          {Math.floor(data.temperature2m)}
          <sup>o</sup>
        </div>
        <div className="text-xl ps-4 w-64">
          <div className="pb-3 flex items-center">
            <img src={PartlyCloudyDay} className="max-w-20" />
            <span>Cloudy</span>
          </div>
          <div className="pb-3 flex items-center">
            <img src={wind} className="max-w-20" />
            <span> {data.windSpeed10m.toFixed(1)} mph</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionHW;
