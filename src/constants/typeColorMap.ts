import { TypeColorEnum, TypeEnum } from '../enums/typeEnum';

const typeColorMap: Record<TypeEnum, TypeColorEnum> = {
  [TypeEnum.NORMAL]: TypeColorEnum.NORMAL,
  [TypeEnum.FIRE]: TypeColorEnum.FIRE,
  [TypeEnum.WATER]: TypeColorEnum.WATER,
  [TypeEnum.ELECTRIC]: TypeColorEnum.ELECTRIC,
  [TypeEnum.GRASS]: TypeColorEnum.GRASS,
  [TypeEnum.ICE]: TypeColorEnum.ICE,
  [TypeEnum.FIGHTING]: TypeColorEnum.FIGHTING,
  [TypeEnum.POISON]: TypeColorEnum.POISON,
  [TypeEnum.GROUND]: TypeColorEnum.GROUND,
  [TypeEnum.FLYING]: TypeColorEnum.FLYING,
  [TypeEnum.PSYCHIC]: TypeColorEnum.PSYCHIC,
  [TypeEnum.BUG]: TypeColorEnum.BUG,
  [TypeEnum.ROCK]: TypeColorEnum.ROCK,
  [TypeEnum.GHOST]: TypeColorEnum.GHOST,
  [TypeEnum.DRAGON]: TypeColorEnum.DRAGON,
  [TypeEnum.DARK]: TypeColorEnum.DARK,
  [TypeEnum.STEEL]: TypeColorEnum.STEEL,
  [TypeEnum.FAIRY]: TypeColorEnum.FAIRY,
  [TypeEnum.UNKNOWN]: TypeColorEnum.UNKNOWN,
  [TypeEnum.SHADOW]: TypeColorEnum.SHADOW,
};

export default typeColorMap;
