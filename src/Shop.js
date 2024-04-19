import { useEffect, useState } from "react";
function Shop() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [timerId, setTimerId] = useState();
useEffect(()=>{
	setTimerId(
		setTimeout(() => {
			clearTimeout(timerId);
			fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((res) =>
			setData(
				res.products.filter((e) =>
				e.title.trim().toLowerCase().startsWith(text.trim().toLowerCase())
			)
		)
	);
}, 2000)
);
},[text])
  return (
    <div className=" p-10 flex flex-wrap gap-10">
      <input
        type="text"
        className=" w-1/6 h-10 bg-slate-500 text-white"
        onChange={(val) => setText(val.target.value)}
      />
      {data.map((e) => {
        return (
          <div class="card">
            <div class="info">
              <img src={e.images[0]} className="" />
              <h4 class="title">{e.title}</h4>
              <p class="price">$ {e.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
