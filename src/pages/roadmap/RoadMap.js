import React from "react";

function RoadMap(props) {
  return (
    <section id="RoadMap">
      <h1>ROADMAP</h1>
      <div className="roadMap_lineWrapper">
        <div className="road_line_1">
          <div className="road_circle">X1</div>
        </div>
        <div className="road_line_2">
          <div className="road_circle">X2</div>
        </div>
        <div className="road_line_3">
          <div className="road_circle">X3</div>
        </div>
        <div className="road_line_4">
          <div className="road_circle">X4</div>
        </div>
        <div className="road_line_5">
          <div className="road_circle">X5</div>
        </div>

        {/* roadmap content */}
        <div className="roadmap_content">
          <div className="content_item_1">
            <h2>LAUNCH : Q4 2021</h2>
            <p>First generation Warriors are avaiable to mint and stake</p>
          </div>
          <div className="content_item_2">
            <h2>ARENA : Q1 2022</h2>
            <p>
              Arena mode in which warriors are able to battle each other and put
              SILVER on the line{" "}
            </p>
          </div>
          <div className="content_item_3">
            <h2>NEW WARRIORS : Q2 2022</h2>
            <p>
              NEW warrior types with different and varying abilities and
              attributes
            </p>
          </div>
          <div className="content_item_4">
            <h2>TBA</h2>
          </div>
          <div className="content_item_5">
            <h2>TBA</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
