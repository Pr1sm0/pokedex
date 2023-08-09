import React, { ReactElement } from 'react';

import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import classes from './pokemon-item.module.css';
import typeColorMap from '../../constants/typeColorMap';
import { TypeEnum } from '../../enums/typeEnum';

type Props = {
  name: string;
  types: any[];
  avatarUrl: string;
  openDetails: () => void;
};

export default function PokemonItem({ name, types, avatarUrl, openDetails }: Props): ReactElement {
  return (
    <div className={classes.root} onClick={openDetails}>
      <img className={classes.avatar} src={avatarUrl} alt="Pokemon avatar" />
      <div className={classes.name}>{capitalizeFirstLetter(name)}</div>
      <div className={classes.typesWrapper}>
        {types.map(({ type }) => (
          <div
            key={type.name}
            style={{ backgroundColor: typeColorMap[type.name as TypeEnum] }}
            className={classes.type}
          >
            {capitalizeFirstLetter(type.name)}
          </div>
        ))}
      </div>
    </div>
  );
}
