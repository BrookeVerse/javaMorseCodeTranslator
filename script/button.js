//grabbing DOM HTML
const button = document.querySelector(".messageSender__button");

//listening fpr the button click and calling the sendMessage function
button.addEventListener("click", () => {
  sendMessage();
});

//This function is sending a prompt to send the morse code message to someones email.
export const sendMessage = () => {
  const name = prompt("Email to send the Secret Message:");
  if (name === "") {
    alert("Please enter required field.");
  } else {
    alert("Message was sent!");
    window.location.reload();
  }
};
