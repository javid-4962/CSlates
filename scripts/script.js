var t1 = document.getElementById("htmlcont").style;
var t2 = document.getElementById("csscont").style;
var t3 = document.getElementById("jscont").style;
t1.display = "none";
t2.display = "none";
t3.display = "none";
var a = document.getElementById("num1");
var b = document.getElementById("num2");
var c = document.getElementById("num3");

a.onclick = function () {
  if (t1.display !== "none") {
    t1.display = "none";

  } else {
    t1.display = "block";
    t2.display = "none";
    t3.display = "none";

  }
};
b.onclick = function () {
  if (t2.display !== "none") {
    t2.display = "none";

  } else {
    t2.display = "block";
    t1.display = "none";
    t3.display = "none";

  }
};
c.onclick = function () {
  if (t3.display !== "none") {
    t3.display = "none";

  } else {
    t3.display = "block";
    t1.display = "none";
    t2.display = "none";

  }
};

