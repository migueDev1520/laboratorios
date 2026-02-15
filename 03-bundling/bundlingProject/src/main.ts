import styles from "./style.module.css";

console.log(import.meta.env.VITE_APP_MESSAGE);

const titlePage = document.querySelector<HTMLDivElement>("#app");

if (titlePage) {
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Bundling Project 🚀 🤖";

  pageTitle.style = styles.title;

  titlePage.appendChild(pageTitle);
}
