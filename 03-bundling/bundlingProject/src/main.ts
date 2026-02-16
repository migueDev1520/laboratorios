import styles from "./style.module.css";

console.log(import.meta.env.VITE_APP_MESSAGE);

const divH1 = document.querySelector<HTMLDivElement>("#app");

if (divH1) {
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Bundling Project 🚀 🤖";

  pageTitle.style = styles.title;

  divH1.appendChild(pageTitle);
}
