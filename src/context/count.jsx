import { useReducer } from "react";
import { createContext } from "react";
export const countContext = createContext();

// actions
export const type = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  CUSTOM: "CUSTOM",
};

// pure funtionn for reducer
export function reducer(state, action) {
  switch (action.type) {
    case type.INCREMENT:
      return { count: state.count + 1 };
    case type.DECREMENT:
      return { count: state.count > 0 ? state.count - 1 : state.count };
    case type.CUSTOM:
      return { count: state.count + action.payload };
    case type.RESET:
      return { count: 0 };                                         
  }
}

// context provider

export default function CountContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { count: 0,});
  return (
    <>
      <countContext.Provider value={{ state, dispatch }}>
        {children}
      </countContext.Provider>
    </>
  );
}
