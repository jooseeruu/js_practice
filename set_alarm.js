function setAlarm(employed, vacation) {
  if (employed == true && vacation == false) {
    return true;
  } else {
    return false;
  }
}
console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
