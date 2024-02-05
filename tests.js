window.addEventListener("load", () => {
  const ol = document.createElement("ol");
  document.body.appendChild(ol);

  const createLI = (task, selector, requirements) => {
    const li = document.createElement("li");
    li.textContent = task;
    ol.appendChild(li);
    (function () {
      if (document.querySelectorAll(selector).length === requirements) {
        li.style.textDecoration = "line-through";
      }
    })();
  };
  function test1() {
    createLI(
      "Remove all break tags (querySelectorAll + forEach + remove)",
      "br",
      0
    );
  }
  function solution1() {
    const all = document.querySelectorAll("br");
    all.forEach((a) => {
      a.remove();
    });
  }
  function test2() {
    createLI(
      "Give all sections the class 'filled' (querySelectorAll + forEach + classList)",
      "section.filled",
      24
    );
  }
  function solution2() {
    const all = document.querySelectorAll("section");
    all.forEach((a) => {
      a.classList.add("filled");
    });
  }

  function test3() {
    createLI(
      "Remove all elements that come before a section (querySelectorAll + forEach + previousElementSibling + remove)",
      "#app>div",
      76
    );
  }
  function solution3() {
    const all = document.querySelectorAll("section");

    all.forEach((a) => {
      a.previousElementSibling.remove();
    });
  }

  //solution1();
  test1();
  //solution2();
  test2();
  //solution3();
  test3();
});
