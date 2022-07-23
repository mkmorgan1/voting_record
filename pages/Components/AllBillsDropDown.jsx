import { useState, useEffect } from "react";
import axios from "axios";
import { dumbyData, API_KEY } from "../../data/data.js";
import Bills from "./Bills.jsx";

export default function AllBillsDropDown({ congress, status, title, titleId }) {
  const [bills, setBills] = useState(dumbyData);
  useEffect(() => {
    // getBills()
  }, []);

  const getBills = () => {
    axios
      .get(
        `https://api.propublica.org/congress/v1/117/${congress}/bills/${status}.json`,
        {
          headers: { "X-API-Key": API_KEY },
        }
      )
      .then((data) => {
        setBills(data.data.results[0].bills);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card">
        <h3
          className="card-header"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${titleId}`}
          aria-expanded="false"
          aria-controls={titleId}
        >
          {title}
        </h3>
        <div className="collapse" id={titleId}>
          <div className="card card-body">
            <Bills bills={bills} />
          </div>
        </div>
      </div>
    </>
  );
}
