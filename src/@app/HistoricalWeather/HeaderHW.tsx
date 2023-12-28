const HeaderHW =({data}) =>{
    return(
        <div className="flex flex-row text-lg font-medium items-center">
            <div className="basis-1/2 text-left font-roboto">
                {data.timezone}
            </div>
            <div className="basis-1/2 text-right font-roboto">
              {data.time}
            </div>
        </div>
    )
}
export default HeaderHW;