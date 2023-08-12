document.addEventListener("DOMContentLoaded", function () {
  fetch('gilmoregirls.json')
      .then(response => response.json())
      .then(gilmoregirls => {
          let html = '<h1>Gilmore Girls JSON Project</h1>';

          gilmoregirls.forEach(character => {
              html += `
                  <p>${getName(character)}</p>
                  <p>${getAddress(character)}</p>
                  <p>${getBirthday(character)}</p>
                  <p>${getAge(character)}</p>
                  <p>${getHobbies(character)}</p>
                  <p>${getAttendance(character)}</p>
                  <br>
              `;

              console.log(getName(character))
              console.log(getAddress(character))
              console.log(getBirthday(character))
              console.log(getAge(character))
              console.log(getHobbies(character))
              console.log(getAttendance(character))
              console.log("")
          });

          document.body.innerHTML = html;
      })
      .catch(error => {
          console.error(error);
      });

  function getName(character) {
      return `Name: ${character.firstName} ${character.lastName}`;
  }

  function stateAbbr(character) {
      switch(character.State){
          case "Connecticut":
              return `CT`;
          case "New York":
              return `NY`;
          default:
              return character.State;
      }
  }

  function getAddress(character) {
      return `Address: ${character.Address}, ${character.City}, ${stateAbbr(character)}, ${character.zipCode}`;
  }

  function getBirthday(character) {
      return `Birthday: ${character.Birthday}`;
  }

  function getAge(character) {
      return `Age: ${new Date().getFullYear() - new Date(character.Birthday).getFullYear()}`;
  }

  function getHobbies(character) {
      return `Hobbies include: ${character.Hobbies[0]}, ${character.Hobbies[1]}, and ${character.Hobbies[2]}`;
  }

  function getAttendance(character) {
      switch(character.City){
          case "Stars Hollow":
              return `${character.firstName} will be attending the Firelight Festival`;
          default:
              return `${character.firstName} will not be attending the Firelight Festival.`;
      }
  }
});
