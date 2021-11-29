import React from "react";
import { FormattedDate, FormattedNumber} from "react-intl";

const Job = (props) => {

  const million = () => {
    var mill;
    if (navigator.language.startsWith('es'))
      props.offer.salary === 1? mill='millón' : mill="millones";
    else{
      mill = 'million'
    }
    return mill
  }

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary + " " + million()}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedNumber 
          value ={props.offer.views}
        />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
    </tr>
  );
};

export default Job;
