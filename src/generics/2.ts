type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}
type TypePick = Pick<AllType, "name" | "color" | "position" | "weight">;

function compare<T extends TypePick, U extends TypePick 
>(top: T, bottom: U): TypePick {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}