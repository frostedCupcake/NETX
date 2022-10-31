import React from "react";
import Publication_card from "../components/Publication_card";

const publication = () => {
  const data = [
    {
      name: "A Case for Cross-Domain Observability to Debug Performance Issues in Microservices",
      people:
        "Ranjitha K, Praveen Tammana, Pravein Govindan Kannan, Priyanka Naik",
      link: ["IEEE CLOUD", "https://conferences.computer.org/cloud/2022/"],
      pdf: "https://praveenabt.github.io/publications/perfMON.pdf",
      talk: "",
      slides: " ",
      location: "Barcelona, Spain, July 2022",
    },
    {
      name: "IoT MUD Enforcement in the Edge Cloud Using Programmable Switch",
      people:
        "Harish S A, Hemanth Kothapalli, Shubham Lahoti, Kotaro Kataoka, Praveen Tammana",
      link: [
        "ACM SIGCOMM FFSPIN",
        "https://conferences.sigcomm.org/sigcomm/2022/workshop-ffspin.html",
      ],
      pdf: "https://praveenabt.github.io/publications/IoTMUD-FFSPIN.pdf",
      talk: "",
      slides: " ",
      location: "Amsterdam, Aug 2022",
    },
    {
      name: "Implementing ChaCha Based Crypto Primitives on Programmable SmartNICs",
      people:
        "Shaguftha Zuveria Kottur, Krishna Kadiyala, Praveen Tammana, and Rinku Shah",
      link: [
        "ACM SIGCOMM FFSPIN",
        "https://conferences.sigcomm.org/sigcomm/2022/workshop-ffspin.html",
      ],
      pdf: "https://praveenabt.github.io/publications/Crypto-FFSPIN.pdf",
      talk: " ",
      slides: " ",
      location: "Amsterdam, Aug 2022",
    },
    {
      name: "Packet Processing Algorithm Identification using Program Embeddings",
      people:
        "S. VenkataKeerthy, Yashas Andaluri, Sayan Dey, Rinku Shah, Praveen Tammana, and Ramakrishna Upadrasta",
      link: [
        "APNet'22",
        "https://conferences.sigcomm.org/events/apnet2022/cfp.html",
      ],
      pdf: "https://conferences.sigcomm.org/events/apnet2022/papers/Packet%20Processing%20Algorithm%20Identification%20using%20Program%20Embeddings1.pdf",
      talk: " ",
      slides: " ",
      location: "Fuzhou, China, Aug 2022",
    },
    {
      name: "Closed-loop Network Performance Monitoring and Diagnosis with SpiderMon",
      people:
        "Weitao Wang, Xinyu Wu, Praveen Tammana, Ang Chen, T.S. Eugene Ng",
      link: [
        "USENIX NSDI",
        "https://www.usenix.org/conference/nsdi22/technical-sessions",
      ],
      pdf: "https://www.usenix.org/conference/nsdi22/presentation/wang",
      talk: "https://www.youtube.com/watch?v=Jwp7x2ixfFs",
      slides: " ",
      location: "WA, USA, Mar 2022",
    },
    {
      name: "DBVal: Validating P4 Data Plane Runtime Behavior",
      people:
        "K Shiv Kumar, Ranjitha K, PS Prashanth, Mina Tahmasbi Arashloo, Venkanna U, Praveen Tammana",
      link: ["ACM SIGCOMM SOSR", "https://conferences.sigcomm.org/sosr/2021/"],
      pdf: "https://praveenabt.github.io/publications/DBVal_final.pdf",
      talk: "https://drive.google.com/file/d/1zqMKhv7oT8U0G_4IHJjGhIb3n_rzhiNM/view?usp=sharing",
      slides:
        "https://drive.google.com/file/d/1IhxyZZEtgqQDwPugxbUfBIIB9u5hDqKb/view?usp=sharing",
      location: " Sep 2021 ",
    },
    {
      name: "Anomaly Detection in Data Plane Systems using Packet Execution Paths",
      people:
        "Archit Sanghi, Krishna P. Kadiyala, Praveen Tammana, Saurabh Joshi",
      link: [
        "ACM SIGCOMM SPIN",
        "https://conferences.sigcomm.org/sigcomm/2021/workshop-spin.html",
      ],
      pdf: "https://praveenabt.github.io/publications/P4anamoly-spin-final.pdf",
      talk: "",
      slides: "https://praveenabt.github.io/talks/SPIN'21-p4anamoly.pptx",
      location: "Aug 2021 ",
    },
    {
      name: "Adaptive Weighted Traffic Splitting in Programmable Data Planes",
      people:
        "Kuo-Feng Hsu, Praveen Tammana, Ryan Beckett, Ang Chen, Jennifer Rexford, David Walker",
      link: ["ACM SOSR", ""],
      pdf: "https://praveenabt.github.io/publications/dash-final.pdf",
      talk: "https://www.youtube.com/watch?v=JJ0aik8HCME",
      slides: "https://praveenabt.github.io/talks/dash-sosr20-kuofeng.pptx",
      location: "Mar 2020",
    },
    {
      name: "Tracking P4 Program Execution in the Data Plane",
      people:
        "Suriya Kodeswaran, Mina Tahmasbi Arashloo, Praveen Tammana, Jennifer Rexford",
      link: ["ACM SOSR", ""],
      pdf: "https://praveenabt.github.io/publications/track-p4.pdf",
      talk: "https://www.youtube.com/watch?v=RbQFWIYO2cw",
      slides: "",
      location: "Mar 2020",
    },
    {
      name: "Grasp the Root Causes in the Dataplane: Diagnosing Latency Problems with SpiderMon",
      people: "Weitao Wang, Praveen Tammana, Ang Chen, T.S.Eugene Ng",
      link: ["ACM SOSR", ""],
      pdf: "https://praveenabt.github.io/publications/spidermon.pdf",
      talk: "https://www.youtube.com/watch?v=SYbr8W_JG6A",
      slides: "",
      location: "Mar 2020",
    },
    {
      name: "Contra: A Programmable System for Performance-aware Routing",
      people:
        "Kuo-Feng Hsu, Ryan Beckett, Ang Chen, Jennifer Rexford, Praveen Tammana, David Walker",
      link: ["USENIX NSDI 2020", ""],
      pdf: "https://praveenabt.github.io/publications/nsdi20spring_hsu_prepub.pdf",
      talk: "https://youtu.be/progDSegmd8",
      slides: "https://praveenabt.github.io/talks/Contra.pptx",
      location: "Feb 2020",
    },
    {
      name: "Fault Localization in Large-Scale Network Policy Deployment",
      people:
        "Praveen Tammana, Chandra, Pavan, Ramana Kompella, and Myungjin Lee",
      link: ["IEEE ICDCS", ""],
      pdf: "https://praveenabt.github.io/publications/scout.pdf",
      talk: "",
      slides: "https://praveenabt.github.io/talks/scout_presentation.pptx",
      location: "July 2018",
    },
    {
      name: "Distributed Network Monitoring and Debugging with SwitchPointer",
      people: "Praveen Tammana, Rachit Agarwal, and Myungjin Lee",
      link: ["USENIX  NSDI", ""],
      pdf: "https://praveenabt.github.io/publications/switchpointer_praveen.pdf",
      talk: "https://www.youtube.com/watch?v=PCoxGRWm6Sg",
      slides:
        "https://www.usenix.org/sites/default/files/conference/protected-files/nsdi18_slides_tammana.pdf",
      location: "April 2018",
    },
    {
      name: "Simplifying Datacenter Network Debugging with PathDump",
      people: "Praveen Tammana, Rachit Agarwal, and Myungjin Lee",
      link: ["USENIX  OSDI", ""],
      pdf: "https://praveenabt.github.io/publications/pathdump_osdi.pdf",
      talk: "",
      slides:
        "https://www.usenix.org/sites/default/files/conference/protected-files/osdi16_slides_tammana.pdf",
      location: "Nov 2016",
    },
    {
      name: "CherryPick: Tracing Packet Trajectory in Software-Defined Datacenter Networks",
      people: "Praveen Tammana, Rachit Agarwal, and Myungjin Lee",
      link: ["ACM SIGCOMM Symposium on SDN Research (SOSR)", ""],
      pdf: "https://praveenabt.github.io/publications/cherrypick.pdf",
      talk: "",
      slides: "https://praveenabt.github.io/talks/cherrypick.pptx",
      location: "June 2015",
    },
  ];
  return (
    <div>
      <h2 className="text-center md:ml-[20%] md:text-left text-xl  py-5 text-gray-500">
        All publications
      </h2>
      <h2 className="text-center md:ml-[20%] md:text-left text-[1rem]  p-1 text-gray-500">
        2022
      </h2>
      {data.map((item) => (
        <Publication_card
          name={item.name}
          people={item.people}
          link={item.link}
          pdf={item.pdf}
          talk={item.talk}
          slides={item.slides}
          location={item.location}
          key={item.name}
        />
      ))}
    </div>
  );
};

export default publication;
