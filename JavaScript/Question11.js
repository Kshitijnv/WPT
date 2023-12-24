var date = new Date(2012, 0, 3);

const getWeekDay = (date) => {
  var day = date.getDay();
  switch (day) {
    case 0:
      alert("Sun");
      break;
    case 1:
      alert("Mon");
      break;
    case 2:
      alert("Tue");
      break;
    case 3:
      alert("Wed");
      break;
    case 4:
      alert("Thu");
      break;
    case 5:
      alert("Fri");
      break;
    case 6:
      alert("Sat");
      break;
  }
};

getWeekDay(date);
