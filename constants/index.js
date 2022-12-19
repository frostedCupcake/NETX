// INDEX
// 1-a. research data
// 1-b. detailed research page data
// 2. publication data
// 3. team data

// -----------------------------research page--------------------------------

export const researchData = [
  {
    heading: 'Edge Cloud for autonomous navigation / ultra low latency push',
    imageUrl: '',
    disc: 'Building EdgeCloud to achieve ultra low latency for UAV/UGV Communications and autonomous navigation. Building Applications for UAV/UGV Monitoring, Real-time Updates, GPU/CPU Inferencing, and also Networked Systems research like Integration of private-5G network and MEC in TiHAN testbed.',
    reference: '/research/edge-cloud',
    small_disc:
      'Building EdgeCloud to achieve ultra low latency for UAV/UGV Communications and autonomous navigation. Building Applications for UAV/UGV Monitoring, Real-time Updates, GPU/CPU Inferencing, and also Networked Systems research like Integration of private-5G network and MEC in TiHAN testbed.',
  },
  {
    heading:
      'Network debugging and performance monitoring in Microservices architecture',
    imageUrl: '',
    disc: 'Cloud applications are refactored into microservices and deployed on hundreds of containers distributed across multiple server nodes. An end-user request is typically handled by a frontend microservice which in turn makes several recursive calls to other backend microservices using remote procedure calls (RPC). In this setup, delays incurred for a few RPC calls in the end-to-end request processing path can have a compounding effect on the request’s response time, eventually leading to SLA violation.',
    disc1:
      'It is extremely difficult to debug the cause of such SLA violations, especially when latency spikes are due to sporadic events at various components invoked while processing the end user request. The difficulty is attributed to the fact that one cannot afford resources to monitor and collect logs of every event at every component in a large cluster . Moreover, debugging requires the ability to understand the set of events that lead to SLA violation which requires end-to-end visibility at multiple layers (i.e., application, host stack, and network).',
    disc2:
      'In this thesis proposal, we propose to design and develop a monitoring and debugging framework addressing these challenges and aim to reduce the resources required to monitor network events while providing end-to-end visibility necessary to find the root cause of processing delays.',
    small_disc:
      'Cloud applications are refactored into microservices and deployed on hundreds of containers distributed across multiple server nodes. An end-user request is typically handled by a frontend microservice which in turn makes several recursive calls to other backend microservices using remote procedure calls (RPC). In this setup, delays incurred for a few RPC calls in the end-to-end request processing path can have a compounding effect on the request’s response time, eventually leading to SLA violation. It is extremely difficult to debug the cause of such SLA violations, especially when latency spikes are due to sporadic events at various components invoked while processing the end user request.',
    reference: '/research/network-debugging',
  },
  {
    heading: 'PUF based security ',
    imageUrl: '',
    disc: 'IoT applications have been deployed around the world at a rapid pace with use cases in the domains of industrial automation, intelligent transportation, telemedicine, virtual reality, and smart cities. Many IoT use cases have ultra-low latency and strong security requirements. But achieving both simultaneously is challenging given the constraints these devices have in-terms of compute resources, power, and cost.',
    disc1:
      'In this project, we aim to take a step towards building a secure and fast PUF-based device authentication system by leveraging high-speed programmable data planes that is (a) robust to various security attacks, and (b) enables session-level authentication at network speed.',
    small_disc:
      'IoT applications have been deployed around the world at a rapid pace with use cases in the domains of industrial automation, intelligent transportation, telemedicine, virtual reality, and smart cities. Many IoT use cases have ultra-low latency and strong security requirements. But achieving both simultaneously is challenging given the constraints these devices have in-terms of compute resources, power, and cost.',
    reference: '/research/puf',
  },
  {
    heading: 'P4Authentication (Ranjitha)',
    imageUrl: '',
    disc: 'Recent advancements in Software-Defined Networking (SDN), Programmable Data Planes (PDPs), and domain-specific network languages (e.g., P4, NPL) have opened up a wide range of opportunities to solve network problems considered difficult and complex in traditional closed and fixed ASIC-based data planes. Such high programmability enables faster development of novel network protocols, network function acceleration, and in-network computing. ',
    disc1:
      'Though programmable data planes seem promising to achieve better performance, they also increase attack surface and hence, is vulnerable to network attacks not seen before. Many recent works have described how P4-based PDPs can be attacked. The problem stem from the fact that the switch data plane trusts messages they receive from the controller or from other neighboring data planes. ',
    disc2:
      'In this project, we take a step towards securing data plane systems by authenticating messages they receive either from controller or from adjacent switches. Our main idea is to authenticate messages entirely in the data plane, that is, in the switch packet-processing pipeline, so that the trusted computing base involving third-party entities can be reduced. The entities such as SDN controller, switch operating system, SDKs, rivers, and other low-level components need not be trusted.',
    small_disc:
      'Recent advancements in Software-Defined Networking (SDN), Programmable Data Planes (PDPs), and domain-specific network languages (e.g., P4, NPL) have opened up a wide range of opportunities to solve network problems considered difficult and complex in traditional closed and fixed ASIC-based data planes. Such high programmability enables faster development of novel network protocols, network function acceleration, and in-network computing. Though programmable data planes seem promising to achieve better performance, they also increase attack surface and hence, is vulnerable to network attacks not seen before.',
    reference: '/research/p4-authentication',
  },
  {
    heading: 'Security of In-network infrastructures',
    imageUrl: '',
    disc: 'The programmable data plane has made the network programmer define the intended packet processing behaviour inside the switch. P4, a high-level domain-specific language, let the programmers define the tables that a packet should hit, the actions applied to it and the conditionals to check different properties of the network traffic. P4 exposes a stateful construct, i.e. register, which can be used to implement memory-efficient hash-based probabilistic data structures like Bloom filter. An adversary can forge carefully chosen items that pollute/saturate the bloom filter, especially in such applications that cannot tolerate false positives.',
    disc1:
      ' The bloom filter is used for various network applications for efficiently tracking the network traffic for analysis, traffic engineering, security, load balancing etc. However, since the bloom filter is a probabilistic data structure, it can be polluted by inserting adversarial elements. Despite being memory efficient, bloom filter can become a target for the pollution and saturation attacks and result in corruption of network statistics, increased latency by making a path for DDoS attacks etc., by increasing false positive probabilities.',
    disc2:
      'The adversary can also introduce delay by querying carefully chosen elements not present in the bloom filter making the query expensive. It is crucial to study the impact of such attacks on various data plane systems relying on the bloom filter and develop a system to detect such attacks.',
    small_disc:
      'The programmable data plane has made the network programmer define the intended packet processing behaviour inside the switch. P4, a high-level domain-specific language, let the programmers define the tables that a packet should hit, the actions applied to it and the conditionals to check different properties of the network traffic. P4 exposes a stateful construct, i.e. register, which can be used to implement memory-efficient hash-based probabilistic data structures like Bloom filter. The bloom filter is used for various network applications for efficiently tracking the network traffic for analysis, traffic engineering, security, load balancing etc.',
    reference: '/research/security-of-in-network-infrastructures',
  },
  {
    heading: 'IoT security ',
    imageUrl: '',
    disc: 'IoT devices have been ripe grounds for exploits to carry out malicious activities. Securing these devices have always been a challenge due to the heterogeneity of device specifications across vendors. As a solution, the IETF pushed the profiling of device behaviour in the form of standardized MUD profiles. ',
    disc1:
      'Our team is exploring the idea of using MUD profiles to secure IoT devices from being compromised and used for launching attacks (DDoS, Data stealing, etc). We use P4 based programmable network hardware to encode the device behaviour profiles (MUD profiles) such that a single network equipment (e.g., switch) can scale to support and enforce rules on many IoT devices. ',
    disc2:
      'Such a system provides proactive but a coarse-grained security solution. There are malicious network traffic that comply with the device MUD profiles which requires further fine grained analysis. To this end, we employ a P4 based switch to extract flow features (predominantly in the dataplane) and train ML models to detect anomalies in traffic flows. The two systems complement each other and we envision their combination to be able to mitigate majority of known attacks that plague modern day IoT devices',
    small_disc:
      'IoT devices have been ripe grounds for exploits to carry out malicious activities. Securing these devices have always been a challenge due to the heterogeneity of device specifications across vendors. As a solution, the IETF pushed the profiling of device behaviour in the form of standardized MUD profiles. Our team is exploring the idea of using MUD profiles to secure IoT devices from being compromised and used for launching attacks (DDoS, Data stealing, etc). We use P4 based programmable network hardware to encode the device behaviour profiles (MUD profiles) such that a single network equipment (e.g., switch) can scale to support and enforce rules on many IoT devices.',
    reference: '/research/iot-security',
  },
];

// ---------------------------detailed reseach page data------------------------------
export const detailedResearchData = [
  {
    heading: 'Edge Cloud for autonomous navigation / ultra low latency push',
    imageUrl: '',
    disc: 'Building EdgeCloud to achieve ultra low latency for UAV/UGV Communications and autonomous navigation. Building Applications for UAV/UGV Monitoring, Real-time Updates, GPU/CPU Inferencing, and also Networked Systems research like Integration of private-5G network and MEC in TiHAN testbed.',
    reference: '/research/edge-cloud',
    small_disc:
      'Building EdgeCloud to achieve ultra low latency for UAV/UGV Communications and autonomous navigation. Building Applications for UAV/UGV Monitoring, Real-time Updates, GPU/CPU Inferencing, and also Networked Systems research like Integration of private-5G network and MEC in TiHAN testbed.',
  },
  {
    heading:
      'Network debugging and performance monitoring in Microservices architecture',
    imageUrl: '',
    disc: 'Cloud applications are refactored into microservices and deployed on hundreds of containers distributed across multiple server nodes. An end-user request is typically handled by a frontend microservice which in turn makes several recursive calls to other backend microservices using remote procedure calls (RPC). In this setup, delays incurred for a few RPC calls in the end-to-end request processing path can have a compounding effect on the request’s response time, eventually leading to SLA violation.',
    disc1:
      'It is extremely difficult to debug the cause of such SLA violations, especially when latency spikes are due to sporadic events at various components invoked while processing the end user request. The difficulty is attributed to the fact that one cannot afford resources to monitor and collect logs of every event at every component in a large cluster . Moreover, debugging requires the ability to understand the set of events that lead to SLA violation which requires end-to-end visibility at multiple layers (i.e., application, host stack, and network).',
    disc2:
      'In this thesis proposal, we propose to design and develop a monitoring and debugging framework addressing these challenges and aim to reduce the resources required to monitor network events while providing end-to-end visibility necessary to find the root cause of processing delays.',
    small_disc:
      'Cloud applications are refactored into microservices and deployed on hundreds of containers distributed across multiple server nodes. An end-user request is typically handled by a frontend microservice which in turn makes several recursive calls to other backend microservices using remote procedure calls (RPC). In this setup, delays incurred for a few RPC calls in the end-to-end request processing path can have a compounding effect on the request’s response time, eventually leading to SLA violation. It is extremely difficult to debug the cause of such SLA violations, especially when latency spikes are due to sporadic events at various components invoked while processing the end user request.',
    reference: '/research/network-debugging',
  },
  {
    heading: 'PUF based security ',
    imageUrl: '',
    disc: 'IoT applications have been deployed around the world at a rapid pace with use cases in the domains of industrial automation, intelligent transportation, telemedicine, virtual reality, and smart cities. Many IoT use cases have ultra-low latency and strong security requirements. But achieving both simultaneously is challenging given the constraints these devices have in-terms of compute resources, power, and cost.',
    disc1:
      'In this project, we aim to take a step towards building a secure and fast PUF-based device authentication system by leveraging high-speed programmable data planes that is (a) robust to various security attacks, and (b) enables session-level authentication at network speed.',
    small_disc:
      'IoT applications have been deployed around the world at a rapid pace with use cases in the domains of industrial automation, intelligent transportation, telemedicine, virtual reality, and smart cities. Many IoT use cases have ultra-low latency and strong security requirements. But achieving both simultaneously is challenging given the constraints these devices have in-terms of compute resources, power, and cost.',
    reference: '/research/puf',
  },
  {
    heading: 'P4Authentication (Ranjitha)',
    imageUrl: '',
    disc: 'Recent advancements in Software-Defined Networking (SDN), Programmable Data Planes (PDPs), and domain-specific network languages (e.g., P4, NPL) have opened up a wide range of opportunities to solve network problems considered difficult and complex in traditional closed and fixed ASIC-based data planes. Such high programmability enables faster development of novel network protocols, network function acceleration, and in-network computing. ',
    disc1:
      'Though programmable data planes seem promising to achieve better performance, they also increase attack surface and hence, is vulnerable to network attacks not seen before. Many recent works have described how P4-based PDPs can be attacked. The problem stem from the fact that the switch data plane trusts messages they receive from the controller or from other neighboring data planes. ',
    disc2:
      'In this project, we take a step towards securing data plane systems by authenticating messages they receive either from controller or from adjacent switches. Our main idea is to authenticate messages entirely in the data plane, that is, in the switch packet-processing pipeline, so that the trusted computing base involving third-party entities can be reduced. The entities such as SDN controller, switch operating system, SDKs, rivers, and other low-level components need not be trusted.',
    small_disc:
      'Recent advancements in Software-Defined Networking (SDN), Programmable Data Planes (PDPs), and domain-specific network languages (e.g., P4, NPL) have opened up a wide range of opportunities to solve network problems considered difficult and complex in traditional closed and fixed ASIC-based data planes. Such high programmability enables faster development of novel network protocols, network function acceleration, and in-network computing. Though programmable data planes seem promising to achieve better performance, they also increase attack surface and hence, is vulnerable to network attacks not seen before.',
    reference: '/research/p4-authentication',
  },
  {
    heading: 'Security of In-network infrastructures',
    imageUrl: '',
    disc: 'The programmable data plane has made the network programmer define the intended packet processing behaviour inside the switch. P4, a high-level domain-specific language, let the programmers define the tables that a packet should hit, the actions applied to it and the conditionals to check different properties of the network traffic. P4 exposes a stateful construct, i.e. register, which can be used to implement memory-efficient hash-based probabilistic data structures like Bloom filter. An adversary can forge carefully chosen items that pollute/saturate the bloom filter, especially in such applications that cannot tolerate false positives.',
    disc1:
      ' The bloom filter is used for various network applications for efficiently tracking the network traffic for analysis, traffic engineering, security, load balancing etc. However, since the bloom filter is a probabilistic data structure, it can be polluted by inserting adversarial elements. Despite being memory efficient, bloom filter can become a target for the pollution and saturation attacks and result in corruption of network statistics, increased latency by making a path for DDoS attacks etc., by increasing false positive probabilities.',
    disc2:
      'The adversary can also introduce delay by querying carefully chosen elements not present in the bloom filter making the query expensive. It is crucial to study the impact of such attacks on various data plane systems relying on the bloom filter and develop a system to detect such attacks.',
    small_disc:
      'The programmable data plane has made the network programmer define the intended packet processing behaviour inside the switch. P4, a high-level domain-specific language, let the programmers define the tables that a packet should hit, the actions applied to it and the conditionals to check different properties of the network traffic. P4 exposes a stateful construct, i.e. register, which can be used to implement memory-efficient hash-based probabilistic data structures like Bloom filter. The bloom filter is used for various network applications for efficiently tracking the network traffic for analysis, traffic engineering, security, load balancing etc.',
    reference: '/research/security-of-in-network-infrastructures',
  },
  {
    heading: 'IoT security ',
    imageUrl: '',
    disc: 'IoT devices have been ripe grounds for exploits to carry out malicious activities. Securing these devices have always been a challenge due to the heterogeneity of device specifications across vendors. As a solution, the IETF pushed the profiling of device behaviour in the form of standardized MUD profiles. ',
    disc1:
      'Our team is exploring the idea of using MUD profiles to secure IoT devices from being compromised and used for launching attacks (DDoS, Data stealing, etc). We use P4 based programmable network hardware to encode the device behaviour profiles (MUD profiles) such that a single network equipment (e.g., switch) can scale to support and enforce rules on many IoT devices. ',
    disc2:
      'Such a system provides proactive but a coarse-grained security solution. There are malicious network traffic that comply with the device MUD profiles which requires further fine grained analysis. To this end, we employ a P4 based switch to extract flow features (predominantly in the dataplane) and train ML models to detect anomalies in traffic flows. The two systems complement each other and we envision their combination to be able to mitigate majority of known attacks that plague modern day IoT devices',
    small_disc:
      'IoT devices have been ripe grounds for exploits to carry out malicious activities. Securing these devices have always been a challenge due to the heterogeneity of device specifications across vendors. As a solution, the IETF pushed the profiling of device behaviour in the form of standardized MUD profiles. Our team is exploring the idea of using MUD profiles to secure IoT devices from being compromised and used for launching attacks (DDoS, Data stealing, etc). We use P4 based programmable network hardware to encode the device behaviour profiles (MUD profiles) such that a single network equipment (e.g., switch) can scale to support and enforce rules on many IoT devices.',
    reference: '/research/iot-security',
  },
];

// ----------------------publication page---------------------------------------------

export const publicationData = [
  {
    name: 'A Case for Cross-Domain Observability to Debug Performance Issues in Microservices',
    people:
      'Ranjitha K, Praveen Tammana, Pravein Govindan Kannan, Priyanka Naik',
    link: ['IEEE CLOUD', 'https://conferences.computer.org/cloud/2022/'],
    pdf: 'https://praveenabt.github.io/publications/perfMON.pdf',
    talk: '',
    slides: ' ',
    location: 'Barcelona, Spain, July 2022',
  },
  {
    name: 'IoT MUD Enforcement in the Edge Cloud Using Programmable Switch',
    people:
      'Harish S A, Hemanth Kothapalli, Shubham Lahoti, Kotaro Kataoka, Praveen Tammana',
    link: [
      'ACM SIGCOMM FFSPIN',
      'https://conferences.sigcomm.org/sigcomm/2022/workshop-ffspin.html',
    ],
    pdf: 'https://praveenabt.github.io/publications/IoTMUD-FFSPIN.pdf',
    talk: '',
    slides: ' ',
    location: 'Amsterdam, Aug 2022',
  },
  {
    name: 'Implementing ChaCha Based Crypto Primitives on Programmable SmartNICs',
    people:
      'Shaguftha Zuveria Kottur, Krishna Kadiyala, Praveen Tammana, and Rinku Shah',
    link: [
      'ACM SIGCOMM FFSPIN',
      'https://conferences.sigcomm.org/sigcomm/2022/workshop-ffspin.html',
    ],
    pdf: 'https://praveenabt.github.io/publications/Crypto-FFSPIN.pdf',
    talk: ' ',
    slides: ' ',
    location: 'Amsterdam, Aug 2022',
  },
  {
    name: 'Packet Processing Algorithm Identification using Program Embeddings',
    people:
      'S. VenkataKeerthy, Yashas Andaluri, Sayan Dey, Rinku Shah, Praveen Tammana, and Ramakrishna Upadrasta',
    link: [
      "APNet'22",
      'https://conferences.sigcomm.org/events/apnet2022/cfp.html',
    ],
    pdf: 'https://conferences.sigcomm.org/events/apnet2022/papers/Packet%20Processing%20Algorithm%20Identification%20using%20Program%20Embeddings1.pdf',
    talk: ' ',
    slides: ' ',
    location: 'Fuzhou, China, Aug 2022',
  },
  {
    name: 'Closed-loop Network Performance Monitoring and Diagnosis with SpiderMon',
    people: 'Weitao Wang, Xinyu Wu, Praveen Tammana, Ang Chen, T.S. Eugene Ng',
    link: [
      'USENIX NSDI',
      'https://www.usenix.org/conference/nsdi22/technical-sessions',
    ],
    pdf: 'https://www.usenix.org/conference/nsdi22/presentation/wang',
    talk: 'https://www.youtube.com/watch?v=Jwp7x2ixfFs',
    slides: ' ',
    location: 'WA, USA, Mar 2022',
  },
  {
    name: 'DBVal: Validating P4 Data Plane Runtime Behavior',
    people:
      'K Shiv Kumar, Ranjitha K, PS Prashanth, Mina Tahmasbi Arashloo, Venkanna U, Praveen Tammana',
    link: ['ACM SIGCOMM SOSR', 'https://conferences.sigcomm.org/sosr/2021/'],
    pdf: 'https://praveenabt.github.io/publications/DBVal_final.pdf',
    talk: 'https://drive.google.com/file/d/1zqMKhv7oT8U0G_4IHJjGhIb3n_rzhiNM/view?usp=sharing',
    slides:
      'https://drive.google.com/file/d/1IhxyZZEtgqQDwPugxbUfBIIB9u5hDqKb/view?usp=sharing',
    location: ' Sep 2021 ',
  },
  {
    name: 'Anomaly Detection in Data Plane Systems using Packet Execution Paths',
    people:
      'Archit Sanghi, Krishna P. Kadiyala, Praveen Tammana, Saurabh Joshi',
    link: [
      'ACM SIGCOMM SPIN',
      'https://conferences.sigcomm.org/sigcomm/2021/workshop-spin.html',
    ],
    pdf: 'https://praveenabt.github.io/publications/P4anamoly-spin-final.pdf',
    talk: '',
    slides: "https://praveenabt.github.io/talks/SPIN'21-p4anamoly.pptx",
    location: 'Aug 2021 ',
  },
  {
    name: 'Adaptive Weighted Traffic Splitting in Programmable Data Planes',
    people:
      'Kuo-Feng Hsu, Praveen Tammana, Ryan Beckett, Ang Chen, Jennifer Rexford, David Walker',
    link: ['ACM SOSR', ''],
    pdf: 'https://praveenabt.github.io/publications/dash-final.pdf',
    talk: 'https://www.youtube.com/watch?v=JJ0aik8HCME',
    slides: 'https://praveenabt.github.io/talks/dash-sosr20-kuofeng.pptx',
    location: 'Mar 2020',
  },
  {
    name: 'Tracking P4 Program Execution in the Data Plane',
    people:
      'Suriya Kodeswaran, Mina Tahmasbi Arashloo, Praveen Tammana, Jennifer Rexford',
    link: ['ACM SOSR', ''],
    pdf: 'https://praveenabt.github.io/publications/track-p4.pdf',
    talk: 'https://www.youtube.com/watch?v=RbQFWIYO2cw',
    slides: '',
    location: 'Mar 2020',
  },
  {
    name: 'Grasp the Root Causes in the Dataplane: Diagnosing Latency Problems with SpiderMon',
    people: 'Weitao Wang, Praveen Tammana, Ang Chen, T.S.Eugene Ng',
    link: ['ACM SOSR', ''],
    pdf: 'https://praveenabt.github.io/publications/spidermon.pdf',
    talk: 'https://www.youtube.com/watch?v=SYbr8W_JG6A',
    slides: '',
    location: 'Mar 2020',
  },
  {
    name: 'Contra: A Programmable System for Performance-aware Routing',
    people:
      'Kuo-Feng Hsu, Ryan Beckett, Ang Chen, Jennifer Rexford, Praveen Tammana, David Walker',
    link: ['USENIX NSDI 2020', ''],
    pdf: 'https://praveenabt.github.io/publications/nsdi20spring_hsu_prepub.pdf',
    talk: 'https://youtu.be/progDSegmd8',
    slides: 'https://praveenabt.github.io/talks/Contra.pptx',
    location: 'Feb 2020',
  },
  {
    name: 'Fault Localization in Large-Scale Network Policy Deployment',
    people:
      'Praveen Tammana, Chandra, Pavan, Ramana Kompella, and Myungjin Lee',
    link: ['IEEE ICDCS', ''],
    pdf: 'https://praveenabt.github.io/publications/scout.pdf',
    talk: '',
    slides: 'https://praveenabt.github.io/talks/scout_presentation.pptx',
    location: 'July 2018',
  },
  {
    name: 'Distributed Network Monitoring and Debugging with SwitchPointer',
    people: 'Praveen Tammana, Rachit Agarwal, and Myungjin Lee',
    link: ['USENIX  NSDI', ''],
    pdf: 'https://praveenabt.github.io/publications/switchpointer_praveen.pdf',
    talk: 'https://www.youtube.com/watch?v=PCoxGRWm6Sg',
    slides:
      'https://www.usenix.org/sites/default/files/conference/protected-files/nsdi18_slides_tammana.pdf',
    location: 'April 2018',
  },
  {
    name: 'Simplifying Datacenter Network Debugging with PathDump',
    people: 'Praveen Tammana, Rachit Agarwal, and Myungjin Lee',
    link: ['USENIX  OSDI', ''],
    pdf: 'https://praveenabt.github.io/publications/pathdump_osdi.pdf',
    talk: '',
    slides:
      'https://www.usenix.org/sites/default/files/conference/protected-files/osdi16_slides_tammana.pdf',
    location: 'Nov 2016',
  },
  {
    name: 'CherryPick: Tracing Packet Trajectory in Software-Defined Datacenter Networks',
    people: 'Praveen Tammana, Rachit Agarwal, and Myungjin Lee',
    link: ['ACM SIGCOMM Symposium on SDN Research (SOSR)', ''],
    pdf: 'https://praveenabt.github.io/publications/cherrypick.pdf',
    talk: '',
    slides: 'https://praveenabt.github.io/talks/cherrypick.pptx',
    location: 'June 2015',
  },
];

// ------------------------------------Team page---------------------------------------------

export const teamData = [
  {
    name: 'Praveen Chandrahas',
    designation: 'PhD',
    i_link: '',
    p_link: '',
    l_link: '',
    info: ' ',
  },
  {
    name: 'Harish,',
    designation: 'PhD',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666538214/ecell/NetX/Harish_wgncdg.jpg',
    p_link: 'https://www.harishsa.com',
    l_link: '',
    info: ' ',
  },
  {
    name: 'K. Shiv Kumar',
    designation: 'PhD',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666538212/ecell/NetX/Shiv_brmw0v.jpg',
    p_link: '',
    l_link: '',
    info: ' ',
  },
  {
    name: 'Ranjitha K',
    designation: 'PhD',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666538205/ecell/NetX/Ranjitha_K_o7tjfy.png',
    p_link: '',
    l_link: '',
    info: ' ',
  },
  {
    name: 'Sanyan Dey',
    designation: 'Mtech (RA)',
    i_link: '',
    p_link: '',
    l_link: '',
    info: 'jointly with Dr. Ramakrishna',
  },
  {
    name: 'Divya Pathak',
    designation: 'Mtech (RA)',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666538212/ecell/NetX/IMG_20221005_125118_u6p6n5.jpg',
    p_link: '',
    l_link: '',
    info: ' ',
  },
  {
    name: 'Prem Kumar Saraf',
    designation: 'MTech (TA)',
    i_link: '',
    p_link: '',
    l_link: '',
    info: ' ',
  },
  {
    name: 'Sankalp Mittal',
    designation: 'MTech (RA)',
    i_link: '',
    p_link: '',
    l_link: '',
    info: ' ',
  },
  {
    name: 'Animesh Singh',
    designation: 'MTech (RA)',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666538206/ecell/NetX/Animesh_jmwxnt.jpg',
    p_link: '',
    l_link: '',
    info: ' ',
  },
  {
    name: 'Ankit Sharma',
    designation: 'MTech (RA)',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666538213/ecell/NetX/Ankit_eegv1c.jpg',
    p_link: '',
    l_link: '',
    info: ' ',
  },
];
