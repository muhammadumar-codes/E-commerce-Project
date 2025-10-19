import { useContext, useMemo } from "react";
import { countContext, type } from "../../context/count";
import Child from "../../components/child/child";

export default function About() {
  const { state, dispatch } = useContext(countContext);
  console.log("Parent is rendering right now");

  // ✅ useMemo makes sure this object reference doesn’t change
  // const user = useMemo(() => ({ names: "Muhammad umar" }), []);
  const user =useMemo(()=>({names:"Muhammad Umar"}),[state.count])

  return (
    <>
      <h1 className="heading bg-blue-700 text-white text-center font-bold">
        Reducer with Api Context
      </h1>

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 ">
        <div className="flex flex-col items-center gap-5 p-8 bg-white/10 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-2xl text-white w-96">
          <h1 className="text-3xl font-extrabold tracking-wide mb-2">
            Count: <span className="text-amber-400">{state.count}</span>
          </h1>

          <div className="flex flex-col gap-3 w-full">
            <button
              className="w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => dispatch({ type: type.INCREMENT })}
            >
              Increase
            </button>

            <button
              className="w-full py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => dispatch({ type: type.DECREMENT })}
            >
              Decrease
            </button>

            <button
              className="w-full py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => dispatch({ type: type.RESET })}
            >
              Reset
            </button>

            <button
              className="w-full py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => dispatch({ type: type.CUSTOM, payload: 20 })}
            >
              Custom (20)
            </button>
          </div>
        </div>
      </div>

      {/* ✅ This object is now stable */}
      <Child names={user} />
    </>
  );
}
