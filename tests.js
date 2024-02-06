window.addEventListener("load", () => {
  const ol = document.createElement("ol");
  document.body.appendChild(ol);
  const urlParams = new URLSearchParams(window.location.search);
  const runSolutions = urlParams.get("debug") || false;

  const createLI = (task, selector, requirements, solution) => {
    if (runSolutions) {
      solution();
    }
    const li = document.createElement("li");
    li.innerHTML = task;
    ol.appendChild(li);
    (function () {
      if (document.querySelectorAll(selector).length === requirements) {
        li.style.textDecoration = "line-through";
      }
    })();
  };
  function test0() {
    createLI(
      "Give the element with the class <code>start_here</code> the class <code>app</code>",
      ".app",
      1,
      () => {
        document.querySelector(".start_here").classList.add("app");
      }
    );
  }

  function test1() {
    createLI(
      "Remove all break tags (querySelectorAll + forEach + remove)",
      "br",
      0,
      () => {
        const all = document.querySelectorAll("br");
        all.forEach((a) => {
          a.remove();
        });
      }
    );
  }

  function test2() {
    createLI(
      "Give all sections the class 'filled' (querySelectorAll + forEach + classList)",
      "section.filled",
      24,
      () => {
        const all = document.querySelectorAll("section");
        all.forEach((a) => {
          a.classList.add("filled");
        });
      }
    );
  }

  function test3() {
    createLI(
      "Remove all elements that come before a section (querySelectorAll + forEach + previousElementSibling + remove)",
      ".app>div",
      76,
      () => {
        const all = document.querySelectorAll("section");

        all.forEach((a) => {
          a.previousElementSibling.remove();
        });
      }
    );
  }
  [test0, test1, test2, test2, test3].forEach((t) => t());
});
