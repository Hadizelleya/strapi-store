import { Fragment, useContext } from "react";
import "./Categories.css";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import Checkbox from "./Checkbox";
import StoreContext from "../../hooks/StoreContext";
function Categories() {
  const { categories, setCategories } = useContext(StoreContext);
  const { data, loading, error } = useFetch("/categories?populate=*");
  useEffect(() => {
    data && setCategories(data);
    console.log(data);
  }, [data]);

  return (
    <div className="check-container">
      {loading
        ? "Categories are loading"
        : categories.map((category) => {
            return (
              <Fragment key={category.id}>
                <Checkbox category={category} />
              </Fragment>
            );
          })}
    </div>
  );
}

export default Categories;
