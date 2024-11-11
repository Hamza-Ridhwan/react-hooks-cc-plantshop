import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plants data from the backend
  useEffect(() => {
    fetch("https://react-hooks-cc-plantshop-h11u.onrender.com/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Filter plants based on the search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search setSearchQuery={setSearchQuery} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
