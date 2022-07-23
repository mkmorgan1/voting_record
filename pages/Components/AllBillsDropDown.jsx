import { useState, useEffect } from "react";
import axios from "axios";
import { dumbyData, API_KEY } from "../../data/data.js";

export default function AllBillsDropDown({ congress, status, title, body }) {
  const [bills, setBills] = useState([dumbyData]);
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

  const titleString = title.split(" ").join("");
  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${titleString}`}
        aria-expanded="false"
        aria-controls={titleString}
      >
        {title}
      </button>
      <div className="collapse" id={titleString}>
        <div className="card card-body">
          {body}
          {bills.map((bill) => {
            return (
              <div key={bill.bill_id}>
                <h5>{bill.short_title}</h5>
                <br></br>
                <h6>Summary</h6>
                <q>{bill.summary}</q>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
