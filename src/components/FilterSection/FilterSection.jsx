import { useState } from "react";
import AreaCard from "../Card/Card";
import CustomCarousel from "../Carousel/carousel";
import BasicTabs from "../BasicTabs/BasicTabs";
// import { CircularProgress } from "@mui/material";
export const FilteredSection = ({
  type,
  title,
  filteredData,
  handleIndexChange,
  toggle = true,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);


  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

//   
return (
    <div className="container">
      <div className="header">
        <h3>{title}</h3>
        <button className="toggle-button" onClick={toggleExpanded}>
          {toggle ? (isExpanded ? "Collapse" : "Show all") : <></>}
        </button>
      </div>
  
      <BasicTabs handleChangeIndex={handleIndexChange} />
  
        {!toggle ? (
          <CustomCarousel
          data={filteredData}
          renderCardItem={(item) => (
            <AreaCard data={item} type={type} />
          )}
        />
        ) : (
          (isExpanded ? (
            <div className="wrapper grid-layout">
              {filteredData?.map((song, index) => (
                <AreaCard data={song} type={type} key={song.id || index} />
              ))}
            </div>
          ) : (
            <CustomCarousel
              data={filteredData}
              renderCardItem={(item) => (
                <AreaCard data={item} type={type}/>
              )}
            />
          ))
        )}
        
 
    </div>
  );
};

