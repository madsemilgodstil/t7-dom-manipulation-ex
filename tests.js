window.addEventListener("load", () => {
  const ol = document.createElement("ol");
  document.body.appendChild(ol);

  function test1() {
    const li = document.createElement("li");
    li.textContent = "Remove all break tags (querySelectorAll + forEach + remove)";
    ol.appendChild(li);
    (function() {
      if (document.querySelectorAll("br").length === 0) {
        li.style.textDecoration = "line-through";
      }
    })();
  }
  function solution1() {
    const all = document.querySelectorAll("br");
    all.forEach(a => {
      a.remove();
    });
  }
  function test2() {
    const li = document.createElement("li");
    li.textContent = "Give all sections the class 'filled' (querySelectorAll + forEach + classList)";
    ol.appendChild(li);
    (function() {
      if (document.querySelectorAll("section.filled").length === 24) {
        li.style.textDecoration = "line-through";
      }
    })();
  }
  function solution2() {
    const all = document.querySelectorAll("section");
    all.forEach(a => {
      a.classList.add("filled");
    });
  }

  function test3() {
    const li = document.createElement("li");
    li.textContent = "Remove all elements that come before a section (querySelectorAll + forEach + previousElementSibling + remove)";
    ol.appendChild(li);
    (function() {
      if (document.querySelectorAll("#app>div").length === 76) {
        li.style.textDecoration = "line-through";
      }
    })();
  }
  function solution3() {
    const all = document.querySelectorAll("section");

    all.forEach(a => {
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
