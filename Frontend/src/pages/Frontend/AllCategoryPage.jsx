import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../Services/FrontendServices/CategoryServices';

function AllCategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
      console.log(data);
    }
    fetchCategories();
  }, []);

  return (
    <>
      {categories.map((category) => (
        <div key={category.id}>
          <img src={category.image} alt={category.name} />
          <h2>{category.name}</h2>
        </div>
      ))}
    </>
  );
}

export default AllCategoryPage;
