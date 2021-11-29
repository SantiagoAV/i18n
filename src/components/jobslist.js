import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Job from "./job";

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      views: 3540,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      views: 1250,
      date: "2019-03-27",
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      views: 134,
      city: "Cali, Colombia",
      date: "2019-03-28",
    },
  ]);

  const theme = () => {
    var selected;
    navigator.language.startsWith('es')? selected='thead-light' : selected='thead-dark';

    return selected
  }

  return (
    <div>
      <table className="table">
        <thead className={theme()}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Company"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Salary"/> 
            </th>
            <th scope="col">
              <FormattedMessage id="City"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Views"/>
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
