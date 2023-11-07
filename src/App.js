import React, { useState, useRef } from "react";
import Content from "./components/Content/Content";
import Deliver from "./components/Content/Deliver/Deliver";
import PizzaCard from "./components/Content/PizzaCard/PizzaCard";
import SimpleSlider from "./components/Content/Slider/Slider";
import WaterCard from "./components/Content/WaterCard/WaterCard";
import AboutUs from "./components/Content/AboutUs/AboutUs";
import FilterText from "./components/FilterText/FilterText";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
    // burger menu
    const useOnClickOutside = (ref, handler) => {
        React.useEffect(() => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) return;
                handler(event);
            };
            document.addEventListener("mousedown", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
            };
        }, [ref, handler]);
    };

    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    useOnClickOutside(node, () => setOpen(false));

    // filter text
    const [isActiveFilter, setisActiveFilter] = useState(false);
    const [isActiveFilterTextPizza, setisActiveFilterTextPizza] =
        useState(true);
    const [isActiveFilterTextWater, setisActiveFilterTextWater] =
        useState(true);

    // handle scroll
    const deliverRef = useRef(null);
    const pizzasRef = useRef(null);
    return (
        <div
            className='container'
            ref={node}
        >
            <Header
                open={open}
                setOpen={setOpen}
                deliverRef={deliverRef}
                pizzasRef={pizzasRef}
            />
            <Menu
                open={open}
                setOpen={setOpen}
            />
            <Content>
                <SimpleSlider />
                <FilterText
                    isActiveFilter={isActiveFilter}
                    setisActiveFilter={setisActiveFilter}
                    isActiveFilterTextPizza={isActiveFilterTextPizza}
                    setisActiveFilterTextPizza={setisActiveFilterTextPizza}
                    isActiveFilterTextWater={isActiveFilterTextWater}
                    setisActiveFilterTextWater={setisActiveFilterTextWater}
                />
                {!isActiveFilter ? (
                    <PizzaCard pizzasRef={pizzasRef} />
                ) : (
                    <WaterCard />
                )}
                <Deliver deliverRef={deliverRef} />
                <AboutUs />
            </Content>
            <Footer />
        </div>
    );
}

export default App;
