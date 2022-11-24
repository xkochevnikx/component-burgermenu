import { useState } from "react";
import "./App.css";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import { ReactComponent as BurgerImg } from "./Components/img/burger_icon.svg";
import ModalWindow from "./Components/ModalWindow/ModalWindow";

function App() {
  const [active, setActive] = useState(false);
  const [activeModal, setActiveModal] = useState(false);

  const items = [
    { value: "Главная", href: "/main" },
    { value: "О нас", href: "/info" },
    { value: "Творчество", href: "/job" },
  ];
  return (
    <>
      <div className="container">
        <nav>
          <div className="nav_box">
            <BurgerImg
              className="BurgerImg"
              onClick={() => setActive(!active)}
            />
            <button onClick={() => setActiveModal(!activeModal)}>
              ModalWindow
            </button>
          </div>
        </nav>
        <main>
          <div className="main_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              dolore recusandae maiores fugit tenetur officiis nihil quis
              distinctio quasi ratione, qui alias harum sunt atque quidem
              nesciunt mollitia repellendus accusantium, corrupti cum soluta,
              temporibus ipsum! Veritatis sequi blanditiis, accusamus illo rerum
              tenetur maxime omnis corrupti pariatur quia qui nihil similique?
            </p>
            <p>
              Nihil id eos, modi debitis soluta quos? Praesentium nihil sequi
              consequatur odio iusto vero dolorum! Vero ipsam laboriosam unde
              labore consequuntur deleniti sapiente ratione nihil dolores
              laborum, delectus autem laudantium id? Itaque saepe necessitatibus
              fuga architecto ullam voluptas molestiae corrupti modi nisi optio
              laboriosam beatae explicabo, deserunt perspiciatis officiis illum.
            </p>
            <p>
              Non, unde? Debitis tempora magni repellat ipsam cumque iusto quod
              id, atque distinctio tenetur assumenda. Et animi id ipsam hic
              ratione assumenda, eius harum reprehenderit facilis odio
              praesentium autem architecto aspernatur at deserunt quibusdam
              saepe a consectetur odit quam. Voluptatum ducimus velit vel
              assumenda quam aspernatur eveniet architecto nostrum voluptate?
            </p>
            <p>
              Aspernatur, hic incidunt saepe ex doloremque dolores assumenda et
              error ipsam distinctio nam! Voluptatum et dolorem excepturi
              tempora impedit rerum, consequatur modi doloribus nemo molestiae
              alias facere sunt ea optio molestias vel nobis, aliquid sint nam
              magni sequi ex quam illum. Ipsum vitae reiciendis, eveniet
              blanditiis neque soluta dolorum quisquam?
            </p>
            <p>
              Corrupti quibusdam tempora modi voluptates, sit suscipit
              voluptatibus quos eligendi dicta, harum magni ea quo, dolor
              placeat hic ut! Aliquid sit maxime perspiciatis, reiciendis quod,
              sint velit accusamus nostrum eos error quibusdam impedit
              distinctio incidunt hic adipisci eum officia earum. Odit, quia
              accusantium veritatis temporibus nobis eum animi tempore optio.
            </p>
          </div>
        </main>
        <BurgerMenu
          active={active}
          setActive={setActive}
          header={"Бургер меню"}
          items={items}
        />
        <ModalWindow
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          items={items}
        />
      </div>
    </>
  );
}

export default App;
