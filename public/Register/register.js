function switchRole(role) {
    const doctorBtn = document.getElementById("doctorBtn");
    const patientBtn = document.getElementById("patientBtn");
    const doctorFields = document.querySelector(".doctor-only");
  
    if (role === "doctor") {
      doctorFields.classList.remove("hidden");
      doctorBtn.classList.add("active");
      patientBtn.classList.remove("active");
    } else {
      doctorFields.classList.add("hidden");
      patientBtn.classList.add("active");
      doctorBtn.classList.remove("active");
    }
}
  