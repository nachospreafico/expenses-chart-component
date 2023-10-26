import { useEffect } from "react";
import "./styles/ChartContainer.css";
import { useState } from "react";

const ChartContainer = () => {
  const [heights, setHeights] = useState([]);
  const [weekday, setWeekday] = useState(0);
  const [isHovered, setIsHovered] = useState({
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
  });

  useEffect(() => {
    getRandomHeights();
  }, []);

  useEffect(() => {
    getRandomHeights();
    getWeekDay();
  }, []);

  function getWeekDay() {
    let date = new Date();
    let day = date.getDay();
    setWeekday(day);
  }

  function getRandomHeights() {
    let randomHeights = [];
    for (let i = 1; i <= 7; i++) {
      let randomNumber = parseInt(Math.random() * 100);
      if (randomNumber < 10) {
        randomNumber = 10;
      }
      randomHeights.push(randomNumber);
    }
    setHeights(randomHeights);
  }

  return (
    <div className="chart-container">
      <h2 className="chart-title">Spending - Last 7 days</h2>
      <div id="chart" className="chart-graph">
        <div className="chart-bar-container">
          <div
            className={`chart-bar ${weekday === 1 ? "today" : ""}`}
            style={{ height: `${heights[0]}%` }}
            onMouseEnter={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  mon: true,
                };
              })
            }
            onMouseLeave={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  mon: false,
                };
              })
            }
          >
            <div className={`chart-val ${isHovered.mon ? "" : "hidden"}`}>
              ${heights[0]}
            </div>
          </div>
        </div>
        <div className="chart-bar-container">
          <div
            className={`chart-bar ${weekday === 2 ? "today" : ""}`}
            style={{ height: `${heights[1]}%` }}
            onMouseEnter={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  tue: true,
                };
              })
            }
            onMouseLeave={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  tue: false,
                };
              })
            }
          >
            <div className={`chart-val ${isHovered.tue ? "" : "hidden"}`}>
              ${heights[1]}
            </div>
          </div>
        </div>
        <div className="chart-bar-container">
          <div
            className={`chart-bar ${weekday === 3 ? "today" : ""}`}
            style={{ height: `${heights[2]}%` }}
            onMouseEnter={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  wed: true,
                };
              })
            }
            onMouseLeave={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  wed: false,
                };
              })
            }
          >
            <div className={`chart-val ${isHovered.wed ? "" : "hidden"}`}>
              ${heights[2]}
            </div>
          </div>
        </div>
        <div className="chart-bar-container">
          <div
            className={`chart-bar ${weekday === 4 ? "today" : ""}`}
            style={{ height: `${heights[3]}%` }}
            onMouseEnter={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  thu: true,
                };
              })
            }
            onMouseLeave={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  thu: false,
                };
              })
            }
          >
            <div className={`chart-val ${isHovered.thu ? "" : "hidden"}`}>
              ${heights[3]}
            </div>
          </div>
        </div>
        <div className="chart-bar-container">
          <div
            className={`chart-bar ${weekday === 5 ? "today" : ""}`}
            style={{ height: `${heights[4]}%` }}
            onMouseEnter={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  fri: true,
                };
              })
            }
            onMouseLeave={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  fri: false,
                };
              })
            }
          >
            <div className={`chart-val ${isHovered.fri ? "" : "hidden"}`}>
              ${heights[4]}
            </div>
          </div>
        </div>
        <div className="chart-bar-container">
          <div
            className={`chart-bar ${weekday === 6 ? "today" : ""}`}
            style={{ height: `${heights[5]}%` }}
            onMouseEnter={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  sat: true,
                };
              })
            }
            onMouseLeave={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  sat: false,
                };
              })
            }
          >
            <div className={`chart-val ${isHovered.sat ? "" : "hidden"}`}>
              ${heights[5]}
            </div>
          </div>
        </div>
        <div className="chart-bar-container">
          <div
            className={`chart-bar ${weekday === 0 ? "today" : ""}`}
            style={{ height: `${heights[6]}%` }}
            onMouseEnter={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  sun: true,
                };
              })
            }
            onMouseLeave={() =>
              setIsHovered((prevState) => {
                return {
                  ...prevState,
                  sun: false,
                };
              })
            }
          >
            <div className={`chart-val ${isHovered.sun ? "" : "hidden"}`}>
              ${heights[6]}
            </div>
          </div>
        </div>

        <div className="chart-label">mon</div>
        <div className="chart-label">tue</div>
        <div className="chart-label">wed</div>
        <div className="chart-label">thu</div>
        <div className="chart-label">fri</div>
        <div className="chart-label">sat</div>
        <div className="chart-label">sun</div>
      </div>
      <div className="chart-spacer"></div>
      <div className="chart-details">
        <div>
          <p className="total-text">Total this month</p>
          <p className="total-qty">$478</p>
        </div>
        <div>
          <p className="avg-qty">+2.4%</p>
          <p className="avg-text">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
