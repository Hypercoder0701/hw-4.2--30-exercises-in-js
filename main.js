function sum(x, y) {
  console.log("1. sum(): " + Number(x) + Number(y));
}
function toSecunds(minutes) {
  console.log("2. toSecund(): " + minutes * 60);
}
function nextInteger(int) {
  console.log("3. nextInteger(): " + (int + 1));
}
function uchburchakYuzi(asos, balandlik) {
  console.log("4. uchburchakYuzi(): " + 0.5 * asos * balandlik);
}
function ageToDays(age) {
  console.log("5. ageToDays(): " + age * 365);
}
function kub(a) {
  console.log("6. kub(): " + a ** 3);
}
function firstElement(arr) {
  console.log("7. firstElement(): " + arr[0]);
}
function power(x, y) {
  console.log("8. power(): " + x * y);
}
function hourToSekunds(hour) {
  console.log("9. hourToSekunds(): " + hour * 3600);
}
function uchinchiTomon(tomon1, tomon2) {
  console.log("10. uchinchiTomon(): " + (tomon1 + tomon2 - 1));
}
function qoldiq(son1, son2) {
  console.log("11. qoldiq(): " + (son1 % son2));
}
function turtburchakYuzi(boyi, eni) {
  console.log("12. turtburchakYuzi(): " + boyi * eni);
}
function stringQoshish(a) {
  console.log("13. stringQoshish(): " + "something " + a);
}
function kvadrat(a) {
  console.log("14. kvadrat(): " + a ** 2);
}
function noldan(raqam) {
  if (raqam <= 0) {
    console.log("15. noldan(): " + true);
  } else {
    console.log("15. noldan(): " + false);
  }
}
function ichkiBurchaklar(n) {
  console.log("16. ichkiBurchaklar(): " + (n - 2) * 180);
}
function ochkolar(x, y) {
  console.log("17. ochkolar(): " + (x * 2 + y * 3));
}
function nameString(string) {
  console.log("18. nameString(): " + string + "Edabit");
}

function ikkitaSon(x, y) {
  x = Number(x);
  y = Number(y);
  if (x + y < 100) {
    console.log("19. ikkitaSon(): " + true);
  } else {
    if (x + y > 100) {
      console.log("19. ikkitaSon(): " + false);
    } else {
      console.log("19. ikkitaSon(): 100ga tenglik sharti berilmagan.");
    }
  }
}
function printArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  console.log("20. printArray(): " + arr);
}
function oyoqlar(tovuq, qoy, sigir) {
  console.log("21. oyoqlar(): " + (tovuq * 2 + (qoy + sigir) * 4));
}
function and(exp1, exp2) {
  console.log("22. and(): " + (exp1 && exp2));
}
function tengMi(x, y) {
  if (x == y) {
    console.log("23. tengMi(): " + true);
  } else {
    console.log("23. tengMi(): " + false);
  }
}
function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
  console.log(
    "24. futbolOchko(): " + (yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0)
  );
}
function sekundlar(soat, minut) {
  console.log("25. sekundlar(): " + (soat * 3600 + minut * 60));
}
function fun(a) {
  // tub sonlar
  let exp;
  let i = 1;
  let c = 0;

  while (i <= a) {
    if (a % i == 0) {
      c++;
    }
    i++;
  }
  if (c == 2) {
    exp = true;
  } else {
    exp = false;
  }
  console.log("26. fun(): " + exp);
}
function tengMi2(x, y) {
  if (x === y) {
    console.log("27. tengMi2(): " + true);
  } else {
    console.log("27. tengMi2(): " + false);
  }
}
function booleanToString(bool) {
  console.log("28. booleanToString(): " + String(bool));
}
function arrowFunc(a) {
  console.log("29. arrowFunc(): ");
  console.log(a);
}
function frameSoni(minut, frame) {
  console.log("30. frameSoni: " + frame * minut * 60);
}

sum(3, 2);
toSecunds(5);
nextInteger(0);
uchburchakYuzi(3, 2);
ageToDays(65);
kub(3);
firstElement([1, 2, 3]);
power(230, 10);
hourToSekunds(2);
uchinchiTomon(8, 10);
qoldiq(1, 3);
turtburchakYuzi(6, 7);
stringQoshish("is better than nothing");
kvadrat(5);
noldan(5);
ichkiBurchaklar(3);
ochkolar(1, 1);
nameString("Mubashir");
ikkitaSon(22, 15);
printArray(3);
oyoqlar(2, 3, 5);
and(true, false);
tengMi(4, 8);
futbolOchko(3, 4, 2);
sekundlar(1, 3);
fun(7);
tengMi2(0, "0");
booleanToString(true);
arrowFunc(3);
frameSoni(1, 1);