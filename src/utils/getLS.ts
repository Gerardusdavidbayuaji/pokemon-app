const getDataFromLS = () => {
  const data = localStorage.getItem("myPokemon");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default getDataFromLS;
