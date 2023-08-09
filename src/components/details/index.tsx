import React, { ReactElement } from 'react';

import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import classes from './details.module.css';
import tableConfig from '../../constants/tableConfig';
import typeColorMap from '../../constants/typeColorMap';
import { TypeEnum } from '../../enums/typeEnum';

type Props = {
  selectedPokemon: any;
};

export default function Details({ selectedPokemon }: Props): ReactElement {
  return (
    <div className={classes.root}>
      <img className={classes.avatar} src={selectedPokemon.avatar} alt="Pokemon avatar" />
      <div className={classes.name}>{`${capitalizeFirstLetter(selectedPokemon.name)} #${(
        selectedPokemon.id + ''
      ).padStart(3, '0')}`}</div>
      <table className={classes.table}>
        <tbody>
          {tableConfig.map(({ key, value }) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                {key === 'Type'
                  ? selectedPokemon[value].map((item: any) => {
                      const { name } = item.type;
                      return (
                        <div
                          key={name}
                          style={{ backgroundColor: typeColorMap[name as TypeEnum] }}
                          className={classes.type}
                        >
                          {capitalizeFirstLetter(name)}
                        </div>
                      );
                    })
                  : selectedPokemon[value]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
