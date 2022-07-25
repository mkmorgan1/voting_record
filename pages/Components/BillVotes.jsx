import DropDown from "./DropDown";
import TitleValueTag from "./TitleValueTag.jsx";

export default function BillVotes({ id, vote }) {
  return (
    <>
      <DropDown
        id={id}
        title={<h6>Vote:</h6>}
        body={<BillVoteBody id={id} vote={vote} />}
      />
    </>
  );
}

function BillVoteBody({ id, vote }) {
  const GetVoters = (positions) => {
    const yeys = [];
    const neys = [];
    const others = [];
    for (let voter of positions) {
      if (voter.vote_position == "Yes") {
        yeys.push(voter);
      } else if (voter.vote_position == "No") {
        neys.push(voter);
      } else {
        others.push(voter);
      }
    }
    return [yeys, neys, others];
  };
  let results = GetVoters(vote.positions);
  return (
    <>
      <VoteByParty id={id + "total"} title={"Total:"} partyVote={vote.total} />
      <VoteByParty
        id={id + "dem_party"}
        title={"Democrats:"}
        partyVote={vote.democratic}
      />
      <VoteByParty
        id={id + "rep_party"}
        title={"Republicans:"}
        partyVote={vote.republican}
      />
      <VoteByParty
        id={id + "ind_party"}
        title={"Independants:"}
        partyVote={vote.independent}
      />
      <VotePositions id={id + "yes"} title={"Yes"} positions={results[0]} />
      <VotePositions id={id + "no"} title={"No"} positions={results[1]} />
      <VotePositions
        id={id + "not_voting"}
        title={"Not Voting"}
        positions={results[2]}
      />
    </>
  );
}

function VoteByParty({ id, title, partyVote }) {
  return (
    <>
      <DropDown
        id={id}
        title={title}
        body={
          <>
            <TitleValueTag title={"Yes"} value={partyVote.yes} />
            <TitleValueTag title={"No"} value={partyVote.no} />
            <TitleValueTag title={"Present"} value={partyVote.present} />
            <TitleValueTag title={"Not Voting"} value={partyVote.not_voting} />
          </>
        }
      />
    </>
  );
}

function VotePositions({ id, title, positions }) {
  return (
    <DropDown
      id={id}
      title={title}
      body={<Positions id={id} positions={positions} />}
    />
  );
}

function Positions({ key, positions }) {
  return positions.map((member) => {
    return (
      <p key={key + member.member_id}>
        {`${member.name} ${member.party} ${member.state} ${member.district} `}
      </p>
    );
  });
}
