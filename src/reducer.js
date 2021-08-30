const initialState = {
    pocList: [
      {
        id: 1,
        name: "Selma",
        email: "srobinett0@columbia.edu",
        gender: "Female",
      },
      {
        id: 2,
        name: "Krista",
        email: "kbarson1@wikimedia.org",
        gender: "Female",
      },
      {
        id: 3,
        name: "Wilbert",
        email: "wmacpeake2@paginegialle.it",
        gender: "Others",
      },
      {
        id: 4,
        name: "Rakel",
        email: "rlammertz3@free.fr",
        gender: "Female",
      },
      {
        id: 5,
        name: "Nollie",
        email: "nlush4@addtoany.com",
        gender: "Others",
      },
      {
        id: 6,
        name: "Osbourn",
        email: "oscothern5@spiegel.de",
        gender: "Male",
      },
      {
        id: 7,
        name: "Mame",
        email: "mmahaffey6@forbes.com",
        gender: "Male",
      },
      {
        id: 8,
        name: "Lorens",
        email: "ljorge7@angelfire.com",
        gender: "Male",
      },
      {
        id: 9,
        name: "Lester",
        email: "lstanyland8@npr.org",
        gender: "Male",
      },
      {
        id: 10,
        name: "Tye",
        email: "trauprich9@wired.com",
        gender: "Female",
      },
    ],
  };
  
  function pocReducer(state = initialState, action) {
    switch (action.type) {
      case "SEARCH_DATA":
        const result = initialState.pocList.filter((obj) =>
          obj.name.toLowerCase().includes(action.data.toLowerCase())
        );
        return { ...state, pocList: result };
      case "FILTER_DATA":
        if (action.data) {
          const result = initialState.pocList.filter(
            (obj) => obj.gender === action.data
          );
          return { ...state, pocList: result };
        }
        return { ...state, pocList: initialState.pocList };
      default:
        return state;
    }
  }
  
  export default pocReducer;
  