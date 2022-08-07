function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "tutoringawest@gmail.com",
	Password : "Awest2022",
	To : 'Ombiyani05@gmail.com',
	From : "tutoringawest@gmail.com",
	Subject : "wow this actually works",
	Body : "im impressed",
	}).then(
		message => alert("mail sent successfully")
	);
}