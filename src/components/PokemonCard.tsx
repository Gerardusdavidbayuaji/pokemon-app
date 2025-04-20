interface PokemonCardProps {
  id: string | undefined;
  name: string;
}

const PokemonCard = ({ id, name }: PokemonCardProps) => {
  return (
    <div className="bg-[#0d1d23]/50 border-2 border-white/20 rounded-md shadow-md flex flex-col justify-center items-center transition-all duration-300 scale-100 hover:scale-[1.03] overflow-hidden cursor-pointer mb-1">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={name}
        className="m-2 h-52 w-[80%]"
      />
      <div className="w-full bg-[#f4f3f1] text-[#161514] py-2">
        <p className="text-lg font-black capitalize">{name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
