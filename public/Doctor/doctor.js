const doctors = [
    {
      name: "Dr. A.K. Sharma",
      specialty: "Cardiologist",
      degree: "MBBS, MD, DM (Cardiology)",
      visitingCharges: 1200,
      experience: "15 years",
      location: "Max Super Speciality Hospital, Saket, New Delhi"
    },
    {
      name: "Dr. Neha Gupta",
      specialty: "Dermatologist",
      degree: "MBBS, MD (Dermatology)",
      visitingCharges: 900,
      experience: "10 years",
      location: "SkinCare Clinic, South Delhi"
    },
    {
      name: "Dr. Ramesh Bhatia",
      specialty: "Pediatrician",
      degree: "MBBS, MD (Pediatrics)",
      visitingCharges: 800,
      experience: "12 years",
      location: "Rainbow Children's Hospital, Malviya Nagar"
    },
    {
      name: "Dr. Priya Mehta",
      specialty: "Neurologist",
      degree: "MBBS, DM (Neurology)",
      visitingCharges: 1500,
      experience: "13 years",
      location: "BLK Super Speciality Hospital, Rajendra Place"
    },
    {
      name: "Dr. Rohit Jain",
      specialty: "Orthopedic Surgeon",
      degree: "MBBS, MS (Orthopedics)",
      visitingCharges: 1000,
      experience: "9 years",
      location: "Apollo Spectra Hospital, Karol Bagh"
    },
    {
      name: "Dr. Vandana Arora",
      specialty: "ENT Specialist",
      degree: "MBBS, MS (ENT)",
      visitingCharges: 850,
      experience: "8 years",
      location: "ENT Care Clinic, Lajpat Nagar"
    },
    {
      name: "Dr. Suresh Khurana",
      specialty: "Ophthalmologist",
      degree: "MBBS, MS (Ophthalmology)",
      visitingCharges: 950,
      experience: "11 years",
      location: "Eye7 Hospital, Lajpat Nagar"
    },
    {
      name: "Dr. Anjali Verma",
      specialty: "Psychiatrist",
      degree: "MBBS, MD (Psychiatry)",
      visitingCharges: 1200,
      experience: "10 years",
      location: "Mind Wellness Clinic, Green Park"
    },
    {
      name: "Dr. Mohit Sinha",
      specialty: "Gastroenterologist",
      degree: "MBBS, MD, DM (Gastroenterology)",
      visitingCharges: 1400,
      experience: "12 years",
      location: "Fortis Hospital, Vasant Kunj"
    },
    {
      name: "Dr. Rashmi Yadav",
      specialty: "Gynecologist",
      degree: "MBBS, MS (Obstetrics & Gynaecology)",
      visitingCharges: 1000,
      experience: "9 years",
      location: "Cloudnine Hospital, East of Kailash"
    },
    {
      name: "Dr. Karan Malhotra",
      specialty: "Endocrinologist",
      degree: "MBBS, MD, DM (Endocrinology)",
      visitingCharges: 1300,
      experience: "14 years",
      location: "EndoCare Clinic, Dwarka"
    },
    {
      name: "Dr. Shweta Bansal",
      specialty: "General Physician",
      degree: "MBBS, MD (General Medicine)",
      visitingCharges: 700,
      experience: "7 years",
      location: "Care & Cure Clinic, Patel Nagar"
    },
    {
      name: "Dr. Harsh Vardhan",
      specialty: "Pulmonologist",
      degree: "MBBS, MD (Pulmonary Medicine)",
      visitingCharges: 1100,
      experience: "10 years",
      location: "Lung Care Centre, Janakpuri"
    },
    {
      name: "Dr. Nidhi Kapoor",
      specialty: "Oncologist",
      degree: "MBBS, MD, DM (Medical Oncology)",
      visitingCharges: 1600,
      experience: "12 years",
      location: "Rajiv Gandhi Cancer Institute, Rohini"
    },
    {
      name: "Dr. Rajat Chauhan",
      specialty: "Urologist",
      degree: "MBBS, MS, MCh (Urology)",
      visitingCharges: 1300,
      experience: "11 years",
      location: "Sir Ganga Ram Hospital, New Delhi"
    },
    {
      name: "Dr. Kavita Rathi",
      specialty: "Nephrologist",
      degree: "MBBS, MD, DM (Nephrology)",
      visitingCharges: 1500,
      experience: "13 years",
      location: "Batra Hospital, Tughlakabad"
    },
    {
      name: "Dr. Manoj Bhalla",
      specialty: "Rheumatologist",
      degree: "MBBS, MD (Internal Medicine), DM (Rheumatology)",
      visitingCharges: 1400,
      experience: "9 years",
      location: "AIIMS, Ansari Nagar"
    },
    {
      name: "Dr. Sneha Tyagi",
      specialty: "Dietitian & Nutritionist",
      degree: "BSc, MSc (Nutrition)",
      visitingCharges: 600,
      experience: "6 years",
      location: "Health First Wellness Centre, Connaught Place"
    },
    {
      name: "Dr. Vivek Arora",
      specialty: "Plastic Surgeon",
      degree: "MBBS, MS, MCh (Plastic Surgery)",
      visitingCharges: 1700,
      experience: "10 years",
      location: "Nova Hospital, Kailash Colony"
    },
    {
      name: "Dr. Sakshi Mittal",
      specialty: "Psychologist",
      degree: "MA, MPhil (Clinical Psychology)",
      visitingCharges: 1000,
      experience: "8 years",
      location: "Inner Peace Therapy, Hauz Khas"
    }
  ];
  

const doctorList = document.querySelector(".doctor-list");

const detailsBtns = document.querySelectorAll(".details-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

document.addEventListener('DOMContentLoaded', async (event) => {
    event.preventDefault();
    try {
        await displayDoctors();
    }
    catch(err) {
        console.log(err);
    }
})

async function displayDoctors() {
    doctorList.innerHTML = "";
    doctors.forEach(doctor => {
      const card = document.createElement("div");
      card.className = "doctor-card";
      card.innerHTML = `
            <div class="doctor-info">
                <h3>${doctor.name}</h3>
                <p>${doctor.specialty}</p>
            </div>
            <button class="details-btn">Details</button>
      `;
      const btn = card.querySelector(".details-btn");
      btn.addEventListener("click", () => {
        showDoctorDetails(doctor);
      });
      doctorList.appendChild(card);
    });
  }       

  function showDoctorDetails(doctor) {
    const expandedBox = document.querySelector(".expanded-box");
    expandedBox.innerHTML = `
      <h2>${doctor.name}</h2>
      <p><strong>Specialty:</strong> ${doctor.specialty}</p>
      <p><strong>Degree:</strong> ${doctor.degree}</p>
      <p><strong>Experience:</strong> ${doctor.experience}</p>
      <p><strong>Visiting Charges:</strong> ₹${doctor.visitingCharges}</p>
      <p><strong>Location:</strong> ${doctor.location}</p>
      <button class="close-btn">X</button>
      <button class="book-app"> Appointment </button>
    `;
    overlay.classList.remove("hidden");
  
    // Add event to close button inside dynamic content
    expandedBox.querySelector(".close-btn").addEventListener("click", () => {
      overlay.classList.add("hidden");
    });
  }
  
