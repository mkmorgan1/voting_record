import DropDown from "./DropDown.jsx";

export default function Bills({ bills }) {
  return bills.map((bill) => {
    return <Bill bill={bill} />;
  });
}

function Bill({ bill }) {
  return (
    <>
      <div key={bill.bill_id}>
        <h5>{bill.short_title}</h5>
        <br />
        <DropDown id={bill.bill_id} title={"Summary"} body={bill.summary} />
        <br />
        <a href={bill.congressdotgov_url}>More Info:</a>
      </div>
    </>
  );
}
