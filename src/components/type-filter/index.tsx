import React, { ReactElement } from 'react';

import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import classes from './type-filter.module.css';

type Props = {
  types: string[];
  handleChange: (e: unknown) => void;
};

export default function TypeFilter({ types, handleChange }: Props): ReactElement {
  return (
    <div className={classes.root}>
      <label htmlFor="type-select" className={classes.selectLabel}>
        Choose a type:
      </label>
      <select className={classes.select} name="types" id="type-select" onChange={handleChange}>
        <option className={classes.option} value="">
          All
        </option>
        {types.map((type) => (
          <option key={type} className={classes.option} value={type}>
            {capitalizeFirstLetter(type)}
          </option>
        ))}
      </select>
    </div>
  );
}
