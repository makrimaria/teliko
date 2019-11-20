import { dbfs } from './config/db'

export var ci = []
export var re = []
//export var ty = []

//populate dropdown list
var i = 0;
dbfs
  .collection("cities")
  .orderBy("name", "asc")
  .get()
  .then(querySnapshot => {
    querySnapshot.docs.forEach(doc => {
      ci.push({ value: i, text: doc.data().name });
      i++;
    });
  });
var j = 0;
dbfs
  .collection("cities")
  .orderBy("name", "asc")

  .get()
  .then(querySnapshot => {
    querySnapshot.docs.forEach(doc => {
      re.push({ value: j, text: doc.data().regions });
      j++;
    });
  });
  