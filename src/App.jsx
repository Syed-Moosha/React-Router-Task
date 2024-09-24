import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./Pages/All";
import Fsd from "./Pages/Fsd";
import DataScience from "./Pages/DataScience";
import CyberSecurity from "./Pages/CyberSecurity";
import Career from "./Pages/Career";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  let data = [
    {
      id: "1",
      course: "Full Stack Development",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/project_ideas_for_robotic_applications-1-768x402.webp",
      title: "10 Best HTML and CSS Project Ideas for Beginners",
      author: "By Isha Sharma",
      date: "Sep 17, 2024",
      min: "3 Min Read",
    },
    {
      id: "2",
      course: "Full Stack Development",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-768x513.jpg",
      title: "Best Full-Stack Development Project Ideas in 2024",
      author: "By Isha Sharma",
      date: "Sep 17, 2024",
      min: "4 Min Read",
    },
    {
      id: "3",
      course: "Full Stack Development",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/04/10-Best-React-Project-Ideas-for-Developers-with-Source-Code-1200x466.png",
      title: "10 Best React Project Ideas for Developers [with Source Code]",
      author: "By Isha Sharma",
      date: "Sep 17, 2024",
      min: "5 Min Read",
    },
    {
      id: "4",
      course: "Full Stack Development",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
      title: "10 Best Database Management Systems For Software Developers",
      author: "By Isha Sharma",
      date: "Sep 17, 2024",
      min: "4 Min Read",
    },
    {
      id: "5",
      course: "Full Stack Development",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg",
      title: "6 Essential Prerequisites For Learning ReactJS",
      author: "By GUVI Geek",
      date: "Sep 17, 2024",
      min: "3 Min Read",
    },
    {
      id: "6",
      course: "Career",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-768x402.webp",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      author: "By Meghana D",
      date: "Sep 17, 2024",
      min: "3 Min Read",
    },
    {
      id: "7",
      course: "Career",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
      title:
        "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]",
      author: "By Archana",
      date: "Sep 17, 2024",
      min: "6 Min Read",
    },
    {
      id: "8",
      course: "Career",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/rupee-symbol-sign-golden-coin-notes-isolated-white-background.jpg",
      title: "Salary of a Full Stack Developer in India in 2024",
      author: "By Saanchi Bhardwaj",
      date: "Sep 17, 2024",
      min: "4 Min Read",
    },
    {
      id: "9",
      course: "Data Science",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/1-1536x596.png",
      title: "A Complete Data Scientist Roadmap for Beginners",
      author: "By Lukesh S",
      date: "Sep 20, 2024",
      min: "6 Min Read",
    },
    {
      id: "10",
      course: "Data Science",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/04/image-5.png",
      title:
        "Data Science vs. Machine Learning: What Every Elite Coder Needs to Know",
      author: "By Jaishree Tomar",
      date: "Sep 20, 2024",
      min: "5 Min Read",
    },
    {
      id: "11",
      course: "Data Science",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/09/Pytorch-vs-Tenser-Flow-1536x804.png",
      title: "PyTorch vs TensorFlow | 10 Powerful Differences You Must Know!",
      author: "By Archana",
      date: "Sep 20, 2024",
      min: "4 Min Read",
    },
    {
      id: "12",
      course: "Data Science",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-Image-1.png",
      title:
        "What is the Difference between Data Science and Data Engineering?",
      author: "By Saanchi Bhardwaj",
      date: "Sep 23, 2024",
      min: "6 Min Read",
    },
    {
      id: "13",
      course: "Career",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/07/featured_image.webp",
      title:
        "What is Data Science? Important Factors to Learn Before Getting Started [2024]",
      author: "By Lukesh S",
      date: "Sep 21, 2024",
      min: "6 Min Read",
    },
    {
      id: "14",
      course: "Career",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career.webp",
      title: "8 Mistakes To Avoid When You Begin a Data Science Career",
      author: "By Srinithi Sankar",
      date: "Sep 21, 2024",
      min: "7 Min Read",
    },
    {
      id: "15",
      course: "Career",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/08/Data-Science-interviews.jpg",
      title: "6 Tips & Tricks to Crack Data Science Interviews",
      author: "By Lahari Chandana",
      date: "Sep 21, 2024",
      min: "2 Min Read",
    },
    {
      id: "16",
      course: "CyberSecurity",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      author: "By Srinithi Sankar",
      date: "Sep 05, 2024",
      min: "3 Min Read",
    },
    {
      id: "17",
      course: "CyberSecurity",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author: "By Tushar Vinocha",
      date: "Sep 05, 2024",
      min: "5 Min Read",
    },
    {
      id: "18",
      course: "CyberSecurity",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      author: "By Tushar Vinocha",
      date: "Sep 05, 2024",
      min: "5 Min Read",
    },
    {
      id: "19",
      course: "CyberSecurity",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png",
      title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
      author: "By Tushar Vinocha",
      date: "Sep 05, 2024",
      min: "6 Min Read",
    },
    {
      id: "20",
      course: "CyberSecurity",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
      title:
        "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      author: "By Tushar Vinocha",
      date: "Sep 05, 2024",
      min: "3 Min Read",
    },

    {
      id: "21",
      course: "Career",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author: "By Jaishree Tomar",
      date: "Sep 05, 2024",
      min: "4 Min Read",
    },
    {
      id: "21",
      course: "Career",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      author: "By Tushar Vinocha",
      date: "Sep 05, 2024",
      min: "4 Min Read",
    },
    {
      id: "22",
      course: "Career",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-1170x480.png",
      title: "How Is Cyber Security Important To Our Lives?",
      author: "By GUVI Geek",
      date: "Sep 05, 2024",
      min: "2 Min Read",
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route>
            <Route path="/" element={<All data={data} />} />
            <Route path="fsd" element={<Fsd data={data} />} />
            <Route path="datascience" element={<DataScience data={data} />} />
            <Route
              path="cybersecurity"
              element={<CyberSecurity data={data} />}
            />
            <Route path="career" element={<Career data={data} />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
