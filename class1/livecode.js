const mike = {
  firstName: "Mike",
  lastName: "Tully",
  email: "Mike@LaunchCode.org",
  phone: "555-6516",
};
const gracie = {
  firstName: "Gracie",
  lastName: "E",
  email: "Gracie@LaunchCode.org",
  phone: "651-6516",
};

const nameArray = [mike, gracie];

nameArray.map((obj) => {
  obj.firstName = obj.firstName.toLowerCase();
  if (obj.phone.includes("-")) {
    obj.phone = obj.phone.replace("-", "");
  }
});

console.log(nameArray);
