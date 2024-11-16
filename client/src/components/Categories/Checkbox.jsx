import { useContext, useEffect, useState } from "react";
import "./Checkbox.css";
import qs from "qs";
import StoreContext from "../../hooks/StoreContext";
function Checkbox({ category }) {
  const { setFiltered, selectedCategories, setSelectedCategories } =
    useContext(StoreContext);

  useEffect(() => {
    const query = qs.stringify({
      filters: {
        categories: {
          id: {
            $in: selectedCategories,
          },
        },
      },
    });
    setFiltered(import.meta.env.VITE_API_URL + "/products?populate=*&" + query);
  }, [selectedCategories]);

  const handleFilterCategory = (event) => {
    const selectedId = event.target.dataset.category;
    const isChecked = event.target.checked;

    setSelectedCategories((selectedCategories) => {
      if (isChecked) return [...selectedCategories, selectedId];
      return selectedCategories.filter((id) => id !== selectedId);
    });
  };

  return (
    <div className="check-box">
      <div className="checkbox-wrapper-25">
        <input
          type="checkbox"
          data-category={category.id}
          name={category.title}
          onChange={handleFilterCategory}
        />
      </div>
      <h4>{category.title}</h4>
    </div>
  );
}

export default Checkbox;
