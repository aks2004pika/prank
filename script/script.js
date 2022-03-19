const mainBlock = document.querySelector(".dynamicBlock");
const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const block3 = document.querySelector(".block3");
const block4 = document.querySelector(".block4");
const block5 = document.querySelector(".block5");
const shadowBlock = document.querySelectorAll(".boxShadow");
const block1Yes = document.querySelector(".block1Btn2");
const block1No = document.querySelector(".block1Btn1");
const block2Yes = document.querySelector(".block2Btn2");
const block2No = document.querySelector(".block2Btn1");

const mainBlockAnims = [
  {
    animation: "mainBlockAnim 4s ease-in-out .1s forwards",
  },
  {
    animation: "mainBlockCloseAnim 1s ease-in-out 2.7s forwards",
  },
];

const shadowAnim = {
  animation: "shadowAnim 1.7s ease-out 1.8s forwards",
};

const block1ToBlock2 = [
  {
    animation: "block1ToBlock2Anim1 1.6s ease-out 1.2s forwards",
  },
  {
    animation: "block1ToBlock2Anim2 1.6s ease-out 1.2s forwards",
  },
];

block1Yes.onclick = () => {
  Object.assign(mainBlock.style, mainBlockAnims[0]);
  Object.assign(block1.style, block1ToBlock2[0]);
  Object.assign(block2.style, block1ToBlock2[1]);
  Object.assign(shadowBlock[0].style, shadowAnim);
  Object.assign(shadowBlock[1].style, shadowAnim);
  Object.assign(shadowBlock[2].style, shadowAnim);
  Object.assign(shadowBlock[3].style, shadowAnim);
};

const block2No1 = document.querySelector(".block2btn3");
const block2No2 = document.querySelector(".block2btn4");
const block2No3 = document.querySelector(".block2btn5");
const block2No4 = document.querySelector(".block2btn6");

block2No.onclick = () => {
  block2No.style.display = "none";
  block2No1.style.display = "flex";
};

block2No1.onclick = () => {
  block2No1.style.display = "none";
  block2No2.style.display = "flex";
};

block2No2.onclick = () => {
  block2No2.style.display = "none";
  block2No3.style.display = "flex";
};

block2No3.onclick = () => {
  block2No3.style.display = "none";
  block2No4.style.display = "flex";
};

block2No4.onclick = () => {
  block2No4.style.display = "none";
  block2No.style.display = "flex";
};
