const doctors = [
    { name: "Dr. Smith", specialty: "Cardiologist" },
    { name: "Dr. Adams", specialty: "Dermatologist" },
    { name: "Dr. Brown", specialty: "Pediatrician" },
    { name: "Dr. Green", specialty: "Neurologist" },
  ];
  
  const doctorList = document.getElementById("doctorList");
  const doctorSelect = document.getElementById("doctorSelect");
  const doctorSearch = document.getElementById("doctorSearch");
  const bookingForm = document.getElementById("bookingForm");
  const appointmentList = document.getElementById("appointmentList");
  const confirmation = document.getElementById("confirmation");
  
  function displayDoctors(filteredDoctors) {
    doctorList.innerHTML = "";
    doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
    filteredDoctors.forEach(doctor => {
      const card = document.createElement("div");
      card.className = "doctor-card";
      card.innerHTML = `<h3>${doctor.name}</h3><p>${doctor.specialty}</p>`;
      doctorList.appendChild(card);
  
      const option = document.createElement("option");
      option.value = doctor.name;
      option.textContent = `${doctor.name} - ${doctor.specialty}`;
      doctorSelect.appendChild(option);
    });
  }
  
  doctorSearch.addEventListener("input", () => {
    const query = doctorSearch.value.toLowerCase();
    const filtered = doctors.filter(doc =>
      doc.name.toLowerCase().includes(query) ||
      doc.specialty.toLowerCase().includes(query)
    );
    displayDoctors(filtered);
  });
  
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("patientName").value;
    const date = document.getElementById("appointmentDate").value;
    const doctor = doctorSelect.value;
  
    if (name && date && doctor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${name} booked with ${doctor} on ${date}`;
      appointmentList.appendChild(listItem);
  
      confirmation.textContent = "✅ Appointment booked successfully!";
      bookingForm.reset();
  
      setTimeout(() => (confirmation.textContent = ""), 4000);
    }
  });
  
  displayDoctors(doctors); // initial load
  
  