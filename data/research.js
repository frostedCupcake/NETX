const data = [
  {
    heading: "Edge Cloud for autonomous navigation / ultra low latency push",
    imageUrl: "",
    disc: "Building EdgeCloud to achieve ultra low latency for UAV/UGV Communications and autonomous navigation. Building Applications for UAV/UGV Monitoring, Real-time Updates, GPU/CPU Inferencing, and also Networked Systems research like Integration of private-5G network and MEC in TiHAN testbed.",
    ref: "",
    small_disc:
      "Building EdgeCloud to achieve ultra low latency for UAV/UGV Communications and autonomous navigation. Building Applications for UAV/UGV Monitoring, Real-time Updates, GPU/CPU Inferencing, and also Networked Systems research like Integration of private-5G network and MEC in TiHAN testbed.",
  },
  {
    heading:
      "Network debugging and performance monitoring in Microservices architecture",
    imageUrl: "",
    disc: "Cloud applications are refactored into microservices and deployed on hundreds of containers distributed across multiple server nodes. An end-user request is typically handled by a frontend microservice which in turn makes several recursive calls to other backend microservices using remote procedure calls (RPC). In this setup, delays incurred for a few RPC calls in the end-to-end request processing path can have a compounding effect on the request’s response time, eventually leading to SLA violation. It is extremely difficult to debug the cause of such SLA violations, especially when latency spikes are due to sporadic events at various components invoked while processing the end user request. The difficulty is attributed to the fact that one cannot afford resources to monitor and collect logs of every event at every component in a large cluster . Moreover, debugging requires the ability to understand the set of events that lead to SLA violation which requires end-to-end visibility at multiple layers (i.e., application, host stack, and network). In this thesis proposal, we propose to design and develop a monitoring and debugging framework addressing these challenges and aim to reduce the resources required to monitor network events while providing end-to-end visibility necessary to find the root cause of processing delays.",
    small_disc:
      "Cloud applications are refactored into microservices and deployed on hundreds of containers distributed across multiple server nodes. An end-user request is typically handled by a frontend microservice which in turn makes several recursive calls to other backend microservices using remote procedure calls (RPC). In this setup, delays incurred for a few RPC calls in the end-to-end request processing path can have a compounding effect on the request’s response time, eventually leading to SLA violation. It is extremely difficult to debug the cause of such SLA violations, especially when latency spikes are due to sporadic events at various components invoked while processing the end user request.",
    ref: "",
  },
  {
    heading: "PUF based security ",
    imageUrl: "",
    disc: "IoT applications have been deployed around the world at a rapid pace with use cases in the domains of industrial automation, intelligent transportation, telemedicine, virtual reality, and smart cities. Many IoT use cases have ultra-low latency and strong security requirements. But achieving both simultaneously is challenging given the constraints these devices have in-terms of compute resources, power, and cost. In this project, we aim to take a step towards building a secure and fast PUF-based device authentication system by leveraging high-speed programmable data planes that is (a) robust to various security attacks, and (b) enables session-level authentication at network speed.",
    small_disc:
      "IoT applications have been deployed around the world at a rapid pace with use cases in the domains of industrial automation, intelligent transportation, telemedicine, virtual reality, and smart cities. Many IoT use cases have ultra-low latency and strong security requirements. But achieving both simultaneously is challenging given the constraints these devices have in-terms of compute resources, power, and cost.",
    ref: "",
  },
  {
    heading: "P4Authentication (Ranjitha)",
    imageUrl: "",
    disc: "Recent advancements in Software-Defined Networking (SDN), Programmable Data Planes (PDPs), and domain-specific network languages (e.g., P4, NPL) have opened up a wide range of opportunities to solve network problems considered difficult and complex in traditional closed and fixed ASIC-based data planes. Such high programmability enables faster development of novel network protocols, network function acceleration, and in-network computing. Though programmable data planes seem promising to achieve better performance, they also increase attack surface and hence, is vulnerable to network attacks not seen before. Many recent works have described how P4-based PDPs can be attacked. The problem stem from the fact that the switch data plane trusts messages they receive from the controller or from other neighboring data planes. In this project, we take a step towards securing data plane systems by authenticating messages they receive either from controller or from adjacent switches. Our main idea is to authenticate messages entirely in the data plane, that is, in the switch packet-processing pipeline, so that the trusted computing base involving third-party entities can be reduced. The entities such as SDN controller, switch operating system, SDKs, rivers, and other low-level components need not be trusted.",
    small_disc:
      "Recent advancements in Software-Defined Networking (SDN), Programmable Data Planes (PDPs), and domain-specific network languages (e.g., P4, NPL) have opened up a wide range of opportunities to solve network problems considered difficult and complex in traditional closed and fixed ASIC-based data planes. Such high programmability enables faster development of novel network protocols, network function acceleration, and in-network computing. Though programmable data planes seem promising to achieve better performance, they also increase attack surface and hence, is vulnerable to network attacks not seen before.",
    ref: "",
  },
  {
    heading: "Security of In-network infrastructures",
    imageUrl: "",
    disc: "The programmable data plane has made the network programmer define the intended packet processing behaviour inside the switch. P4, a high-level domain-specific language, let the programmers define the tables that a packet should hit, the actions applied to it and the conditionals to check different properties of the network traffic. P4 exposes a stateful construct, i.e. register, which can be used to implement memory-efficient hash-based probabilistic data structures like Bloom filter. The bloom filter is used for various network applications for efficiently tracking the network traffic for analysis, traffic engineering, security, load balancing etc. However, since the bloom filter is a probabilistic data structure, it can be polluted by inserting adversarial elements. Despite being memory efficient, bloom filter can become a target for the pollution and saturation attacks and result in corruption of network statistics, increased latency by making a path for DDoS attacks etc., by increasing false positive probabilities. An adversary can forge carefully chosen items that pollute/saturate the bloom filter, especially in such applications that cannot tolerate false positives. The adversary can also introduce delay by querying carefully chosen elements not present in the bloom filter making the query expensive. It is crucial to study the impact of such attacks on various data plane systems relying on the bloom filter and develop a system to detect such attacks.",
    small_disc:
      "The programmable data plane has made the network programmer define the intended packet processing behaviour inside the switch. P4, a high-level domain-specific language, let the programmers define the tables that a packet should hit, the actions applied to it and the conditionals to check different properties of the network traffic. P4 exposes a stateful construct, i.e. register, which can be used to implement memory-efficient hash-based probabilistic data structures like Bloom filter. The bloom filter is used for various network applications for efficiently tracking the network traffic for analysis, traffic engineering, security, load balancing etc.",
    ref: "",
  },
  {
    heading: "IoT security ",
    imageUrl: "",
    disc: "IoT devices have been ripe grounds for exploits to carry out malicious activities. Securing these devices have always been a challenge due to the heterogeneity of device specifications across vendors. As a solution, the IETF pushed the profiling of device behaviour in the form of standardized MUD profiles. Our team is exploring the idea of using MUD profiles to secure IoT devices from being compromised and used for launching attacks (DDoS, Data stealing, etc). We use P4 based programmable network hardware to encode the device behaviour profiles (MUD profiles) such that a single network equipment (e.g., switch) can scale to support and enforce rules on many IoT devices. Such a system provides proactive but a coarse-grained security solution. There are malicious network traffic that comply with the device MUD profiles which requires further fine grained analysis. To this end, we employ a P4 based switch to extract flow features (predominantly in the dataplane) and train ML models to detect anomalies in traffic flows. The two systems complement each other and we envision their combination to be able to mitigate majority of known attacks that plague modern day IoT devices",
    small_disc:
      "IoT devices have been ripe grounds for exploits to carry out malicious activities. Securing these devices have always been a challenge due to the heterogeneity of device specifications across vendors. As a solution, the IETF pushed the profiling of device behaviour in the form of standardized MUD profiles. Our team is exploring the idea of using MUD profiles to secure IoT devices from being compromised and used for launching attacks (DDoS, Data stealing, etc). We use P4 based programmable network hardware to encode the device behaviour profiles (MUD profiles) such that a single network equipment (e.g., switch) can scale to support and enforce rules on many IoT devices.",
    ref: "",
  },
];

export default data;
