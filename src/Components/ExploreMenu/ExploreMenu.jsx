import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  console.log(category)
  return (
    <div>
      <div className="py-14">
        <h3 className="text-2xl font-bold font-outfit">Explore our menu</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
          soluta maiores tenetur nesciunt et accusantium libero aliquid
          veritatis debitis perspiciatis ducimus nihil porro molestiae eum
          temporibus non cupiditate quibusdam sint.
        </p>
        <div className="flex flex-row m-auto mt-7 gap-3 justify-center">
          {menu_list.map((value, index) => (
            <div key={index} onClick={()=>setCategory(value)}>
              <img
                src={value.menu_image}
                alt={value}
                className="mx-2 m-auto"
              />
              <div className="text-center mt-3">{value.menu_name}</div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
