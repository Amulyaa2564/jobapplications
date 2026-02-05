import Card from "./card";
import "./card-container.css"
function CardContainer(){
const jobs = [
    {
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      company: "Amazon",
      time: "5 days ago",
      role: "Senior UI/UX Designer",
      type: "Part-Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      time: "2 days ago",
      role: "Frontend Developer",
      type: "Full-Time",
      level: "Mid Level",
      salary: "$100/hr",
      location: "Bangalore, India"
    },
    {
      logo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-2.jpg?width=672&height=448&name=ibm-logo-2.jpg",
      company: "IBM",
      time: "1 week ago",
      role: "Backend Engineer",
      type: "Full-Time",
      level: "Senior Level",
      salary: "$110/hr",
      location: "Hyderabad, India"
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      company: "Microsoft",
      time: "3 days ago",
      role: "React Developer",
      type: "Remote",
      level: "Mid Level",
      salary: "$105/hr",
      location: "Remote"
    },
    {
      logo: "https://static.vecteezy.com/system/resources/previews/054/650/802/non_2x/flipkart-logo-rounded-flipkart-logo-free-download-flipkart-logo-free-png.png",
      company: "Flipkart",
      time: "6 days ago",
      role: "UI Developer",
      type: "Part-Time",
      level: "Junior Level",
      salary: "$80/hr",
      location: "Delhi, India"
    },
    {
      logo: "https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png",
      company: "Netflix",
      time: "4 days ago",
      role: "Product Designer",
      type: "Full-Time",
      level: "Senior Level",
      salary: "$130/hr",
      location: "Pune, India"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
      company: "Apple",
      time: "1 day ago",
      role: "iOS Developer",
      type: "Full-Time",
      level: "Mid Level",
      salary: "$125/hr",
      location: "Chennai, India"
    },
    {
      logo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      company: "Meta",
      time: "2 weeks ago",
      role: "Frontend Engineer",
      type: "Remote",
      level: "Senior Level",
      salary: "$140/hr",
      location: "Remote"
    }
  ];
  return(
    <div className="card-container">
      {
        jobs.map((job,index)=>(
            <Card key={index} {...job}/>

        ))
      }
    
    </div>
  )
}

export default CardContainer;