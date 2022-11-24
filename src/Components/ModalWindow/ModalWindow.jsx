import React from "react";
import "./ModalWindow.css";

//? в пропсах можно передать children а так же принять их ниже в контентной части. И в родительском компоненте обернуть этих детей в компонент.
const ModalWindow = ({ activeModal, setActiveModal, items }) => {
  console.log(activeModal);
  return (
    <>
      <div
        className={activeModal ? "modal_active" : "modal"}
        onClick={() => setActiveModal(false)}>
        <div
          className={activeModal ? "modal_content_active" : "modal_content"}
          onClick={e => e.stopPropagation()}>
          <ul>
            {items.map(item => (
              <li>
                {item.value} - {item.href}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
