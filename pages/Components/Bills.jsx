import { useEffect, useState } from "react";
import DropDown from "./DropDown.jsx";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Bills({ bills }) {
  return bills.map((bill) => {
    return (
      <>
        <Bill key={bill.bill_id} bill={bill} />
        <hr />
      </>
    );
  });
}

function Bill({ bill }) {
  return (
    <DropDown
      id={bill.bill_id}
      title={<h5>{bill.short_title}</h5>}
      body={<BillDropDown bill={bill} />}
    />
  );
}

function BillDropDown({ bill }) {
  return (
    <>
      <BillStatus bill={bill} />
      <BillSummary bill={bill} />
      <BillLinks bill={bill} />
    </>
  );
}

function BillSummary({ bill }) {
  return (
    <DropDown
      id={bill.bill_id + "Summary"}
      title={<h6>Summary:</h6>}
      body={bill.summary ? bill.summary : "Missing summary information"}
    />
  );
}

function BillStatus({ bill }) {
  const getPassed = (date) => {
    if (date) {
      return `Passed ${date}`;
    } else if (bill.active) {
      return "Not passed yet";
    } else {
      return "Was not passed";
    }
  };
  return (
    <>
      <DropDown
        id={bill.bill_id + "status"}
        title={<h6>Status:</h6>}
        body={
          <>
            <TitleValueTag
              title={"Active"}
              value={capitalizeFirstLetter(String(bill.active))}
            />
            <TitleValueTag
              title={"House"}
              value={getPassed(bill.house_passage)}
            />
            <TitleValueTag
              title={"Senate"}
              value={getPassed(bill.senate_passage)}
            />
          </>
        }
      />
    </>
  );
}
function BillLinks({ bill }) {
  return (
    <>
      <DropDown
        id={bill.bill_id + "links"}
        title={<h6>More info:</h6>}
        body={
          <>
            <MakeLink name={"congress.gov"} link={bill.congressdotgov_url} />
            <MakeLink name={"govtrack.us"} link={bill.govtrack_url} />
          </>
        }
      />
    </>
  );
}

function MakeLink({ name, link }) {
  return link ? (
    <a href={link} target="_blank">
      {name}
    </a>
  ) : (
    <></>
  );
}

function TitleValueTag({ title, value }) {
  return (
    <>
      <h6>
        <b>{title}: </b>
        {value}
      </h6>
    </>
  );
}
