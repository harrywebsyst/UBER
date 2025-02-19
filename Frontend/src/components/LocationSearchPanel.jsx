import React from "react";

const LocationSearchPanel = (props) => { 

  const locations = [
    "St No. 10 , Near Gravity Institute, Websyst Coding School",
    "St No. 10 , Near Gravity Institute, Websyst Coding School",
    "St No. 10 , Near Gravity Institute, Websyst Coding School",
    "St No. 10 , Near Gravity Institute, Websyst Coding School",
    "St No. 10 , Near Gravity Institute, Websyst Coding School",
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div key={idx} onClick={() => {
            props.setVehiclePanelOpen(true); props.setPanelOpen(false)
          }} className="gap-4 border-gray-100 border-2 active:border-black p-3 rounded-xl flex items-center justify-start my-2">
            <h2 className="bg-[#eee] rounded-full h-10 w-16 flex items-center justify-center">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
