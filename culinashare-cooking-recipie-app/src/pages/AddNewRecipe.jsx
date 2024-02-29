import React, { useEffect } from "react";

// COMPONENTS IMPORTS
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function AddNewRecipe() {
  // STATES AND VARIABLES
  const navigate = useNavigate();

  // FUNCTIONS
  const handleSubmit = () => {
    navigate("/");
  }

  // useEffects
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (!auth) navigate("/register");
  }, [])

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-lightGreen flex justify-center items-center">
        <form
          action=""
          onSubmit={handleSubmit}
          className="p-8 bg-white flex flex-col justify-evenly items-center h-4/5 w-2/5 rounded-lg"
        >
          <div className="text-3xl font-bold cursor-pointer flex justify-center items-center">
            CulinaShare - Contribute Us
          </div>
          <Input
            type="text"
            placeholder="Dish Name"
            key={103}
            name="name"
          />
          <Input
            type="text"
            placeholder="Ingrediants"
            key={104}
            name="Ingrediants"
          />
          <Input
            type="text"
            placeholder="Instriction"
            key={105}
            name="Instriction"
          />
          <Input
            type="text"
            placeholder="Place Image url"
            key={107}
            name="imgUrl"
          />
          <Input
            type="text"
            placeholder="Place Video Link"
            key={106}
            name="videoUrl"
          />
          <button
            className="bg-green text-white p-3 font-semibold w-full rounded-lg hover:text-green hover:bg-white border-green border-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNewRecipe;
