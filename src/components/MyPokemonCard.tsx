import { Pokemon } from "@/utils/pokemon";
import { Link } from "react-router-dom";

type Props = {
  data: Pokemon;
  nickname: string;
};

const PokemonCard = (props: Props) => {
  const { data, nickname } = props;

  return (
    <Link to={`/detail-pokemon/${data.id}`}>
      <div className="w-full h-fit bg-white border shadow-lg rounded-lg flex flex-col items-center justify-between py-4">
        <figure>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt={data.name}
            className="w-auto h-[8rem]"
          />
        </figure>
        <div className="">
          <p className="text-center text-lg font-black capitalize">
            {data.name}
          </p>
          <p className="text-center text-lg font-black">({nickname})</p>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
