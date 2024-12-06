import GoogleLogo from "../assets/google.png";
import MicrosoftLogo from "../assets/microsoft.png";
import AppleLogo from "../assets/apple.png";
import AmazonLogo from "../assets/amazon.png";
import FacebookLogo from "../assets/facebook.png";

export const CardData = [];
const locations = ["Dhaka", "Delhi", "Mumbai", "Kolkata", "Chennai"];
const jobTypes = ["REMOTE", "ONSITE", "HYBRID"];
const companies = [
  {
    name: "Google",
    logo: GoogleLogo,
  },
  {
    name: "Microsoft",
    logo: MicrosoftLogo,
  },
  {
    name: "Apple",
    logo: AppleLogo,
  },
  {
    name: "Amazon",
    logo: AmazonLogo,
  },
  {
    name: "Facebook",
    logo: FacebookLogo,
  },
];
const jobTitles = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "Designer",
  "DevOps Engineer",
];
const minSalary = 20000;
const maxSalary = 50000;

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomSalary() {
  return `$${
    minSalary + Math.floor(Math.random() * (maxSalary - minSalary))
  } - $${minSalary + Math.floor(Math.random() * (maxSalary - minSalary))}`;
}

for (let i = 1; i <= 10; i++) {
  const company = getRandomElement(companies);
  CardData.push({
    id: i,
    JobTitle: getRandomElement(jobTitles),
    JobType: getRandomElement(jobTypes),
    Salary: getRandomSalary(),
    Company: company.name,
    Location: getRandomElement(locations),
    Logo: company.logo,
  });
}
