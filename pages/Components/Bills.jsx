import DropDown from "./DropDown.jsx";

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
      body={bill.summary ? bill.summary : "MISSING INFO"}
    />
  );
}

function BillLinks({ bill }) {
  ``;
  const makeLink = (link, link_name) => {
    <a href={link}>{link_name}</a>;
  };
  const congressUrl = makeLink(bill.congressdotgov_url, "congress.gov");
  const govtrackUrl = makeLink(bill.govtrack_url, "govtrack.us");

  return (
    <>
      <DropDown
        id={bill.bill_id + "links"}
        title={<h6>More info:</h6>}
        body={
          <>
            {bill.congressdotgov_url ? congressUrl : ""}
            {bill.govtrack_url ? govtrackUrl : ""}
          </>
        }
      />
    </>
  );
}
