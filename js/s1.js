var dom = document.getElementById("contain");
var kxy = "path://M512 64a448 448 0 1 1-448 448 448 448 0 0 1 448-448m0-64a512 512 0 1 0 512 512 512 512 0 0 0-512-512z"
var myChart = echarts.init(document.getElementById("contain"));
// var myChart = echarts.init(dom);
var app = {};

var option;

var schema = [
  { name: "tsne-x", index: 0, text: "Tsne-x" },
  { name: "tsne-y", index: 1, text: "Tsne-y" },
  { name: "title", index: 2, text: "Title" },
  { name: "major category", index: 3, text: "Major Category" },
  { name: "minor category", index: 4, text: "Minor Category" },
  { name: "Constrained OR Unconstrained", index: 5, text: "Constrained" },
  { name: "model", index: 6, text: "Model" },
];

var dataDC = [

    [
        "-2.0159464",
        "-3.0006423",
        "A Geometric Optimization Approach for the Detection and Segmentation of Multiple Aneurysms",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Unconstrained",
        "Discrete,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.52154565",
        "0.72201055",
        "A Visual Analytics Framework for the Detection of Anomalous Call Stack Trees in High Performance Computing Applications",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-3.6408834",
        "-1.4004685",
        "An interactive visual analytics approach for network anomaly detection through smart labeling",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.8789587",
        "1.8693019",
        "Blockwise Human Brain Network Visual Comparison Using NodeTrix Representation",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.3479834",
        "3.1193166",
        "CrimAnalyzer- Understanding Crime Patterns in Sa _o Paulo",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "0.29000178",
        "4.071854",
        "EcoLens- visual analysis of ecological regions in urban contexts using traffic data",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-3.2373528",
        "-1.4432918",
        "Finding communities in bicycle sharing system",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.9499013",
        "3.1649046",
        "Interactive Visual Exploration of Longitudinal Historical Career Mobility Data",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.09655044",
        "4.1898007",
        "MobiSeg- Interactive Region Segmentation Using Heterogeneous Mobility Data",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.5623097",
        "-1.9184676",
        "Module-based visualization of large-scale graph network data",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.41558644",
        "3.9787242",
        "TPFlow- Progressive Partition and Multidimensional Pattern Extraction for Large-Scale Spatio-Temporal Data Analysis",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-3.5686758",
        "-2.0070274",
        "Visual analytics for networked-guarantee loans risk management",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.3826711",
        "3.9330344",
        "Visual exploration of urban functional zones based on augmented nonnegative tensor factorization",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "0.2791134",
        "4.09703",
        "Voila- Visual Anomaly Detection and Monitoring with Streaming Spatiotemporal Data",
        "Data Enhancement & Transformation",
        "Data Classification",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    
];

var dataDR = [

    [
        "0.1281033",
        "-1.4932659",
        "A new visualization method in many-objective optimization with chord diagram and angular mapping",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Constrained",
        "Continuous,Multi-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-4.5701313",
        "-2.1528785",
        "A Progressive Approach to Scalar Field Topology",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "1.0523862",
        "0.44055775",
        "A Visual Analytics Approach for Categorical Joint Distribution Reconstruction from Marginal Projections",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Constrained",
        "Continuous,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-4.5409193",
        "1.0426403",
        "A visual uncertainty analytics approach for weather forecast similarity measurement based on fuzzy clustering",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.44922304",
        "1.2632542",
        "An Intelligent System Approach for Probabilistic Volume Rendering using Hierarchical 3D Convolutional Sparse Coding",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-2.013363",
        "0.20557882",
        "Analyzing the Noise Robustness of Deep Neural Networks",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "2.297492",
        "0.4806848",
        "AutoClips- An Automatic Approach to Video Generation from Data Facts",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-3.787815",
        "-0.29203504",
        "eFESTA- Ensemble Feature Exploration with Surface Density Estimates",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.7670765",
        "2.868359",
        "EventThread- Visual Summarization and Stage Analysis of Event Sequence Data",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-4.4285517",
        "-0.4939939",
        "Extraction and Visual Analysis of Potential Vorticity Banners around the Alps",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.5362768",
        "-0.9649078",
        "Feature Tracking by Two-Step Optimization",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "2.385726",
        "1.3930122",
        "Formalizing Visualization Design Knowledge as Constraints- Actionable and Extensible Models in Draco",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Linear,Unconstrained",
        
    ],
    [
        "2.298476",
        "1.2181989",
        "GraphScape- A Model for Automated Reasoning about Visualization Similarity and Sequencing",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Constrained",
        "Continuous,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-4.7558236",
        "-0.9074759",
        "Hyper-Objective Vortices",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.046118148",
        "0.44661367",
        "Imma Sort by Two or More Attributes With Interpretable Monotonic Multi-Attribute Sorting",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-3.2682884",
        "2.1386168",
        "iQUANT- Interactive Quantitative Investment Using Sparse Regression Factors",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-5.040819",
        "-0.9863426",
        "Objective Observer-Relative Flow Visualization in Curved Spaces for Unsteady 2D Geophysical Flows",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-4.5761967",
        "-2.2166674",
        "Progressive Wasserstein Barycenters of Persistence Diagrams",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-4.279684",
        "2.1643312",
        "Sequence Synopsis- Optimize Visual Summary of Temporal Event Data",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "2.8386142",
        "0.10506528",
        "Similarity Clustering of Dimensions for an Enhanced Visualization of Multidimensional Data",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-1.9549272",
        "0.21985656",
        "Simultaneous Matrix Orderings for Graph Collections",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.7543256",
        "0.20697111",
        "Statistical Super Resolution for Data Analysis and Visualization of Large Scale Cosmological Simulations",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.9441757",
        "0.2947441",
        "Temporal Views of Flattened Mitral Valve Geometries",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-4.39037",
        "-0.9037962",
        "The Dependent Vectors Operator",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.47567037",
        "2.2072253",
        "Toward the better modeling and visualization of uncertainty for streaming data",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-3.251375",
        "-0.6278368",
        "Tracking Internal Frames of Reference for Consistent Molecular Distribution Functions",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-4.286319",
        "-0.7857723",
        "Vector Field Topology of Time-Dependent Flows in a Steady Reference Frame",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-4.723597",
        "1.4879862",
        "VIBR- Visualizing Bipartite Relations at Scale with the Minimum Description Length Principle",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.8433719",
        "-0.25534353",
        "Void-and-Cluster Sampling of Large Scattered Data and Trajectories",
        "Data Enhancement & Transformation",
        "Data Refinement",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    
];

var dataDRN = [
    [
        "0.7817832",
        "-2.5970988",
        "A Visual Analytics System for Optimizing Communications in Massively Parallel Applications",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Constrained",
        "Discrete,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-0.5432798",
        "-0.13534172",
        "Adaptable Radial Axes Plots for Improved Multivariate Data Visualization",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.503998",
        "0.18025261",
        "An Incremental Dimensionality Reduction Method for Visualizing Streaming Multidimensional Data",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.5777338",
        "0.86300164",
        "An Interactive Method to Improve Crowdsourced Annotations",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.06956539",
        "0.10763598",
        "Axis Calibration for Improving Data Attribute Estimation in Star Coordinates Plots",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Constrained",
        "Continuous,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-3.2184286",
        "-0.027232135",
        "ChartSeer- Interactive Steering Exploratory Visual Analysis with Machine Intelligence",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-1.9065229",
        "0.6393368",
        "DCMDS-RV- density-concentrated multi-dimensional scaling for relation visualization",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.4693727",
        "2.7773576",
        "iLAMP- Exploring High-Dimensional Spacing through Backward Multidimensional Projection",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-0.4898528",
        "2.9318812",
        "Local Affine Multidimensional Projection",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-1.5013982",
        "-0.43787128",
        "Map Warping for the Annotation of Metro Maps",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.116334",
        "0.28580126",
        "MatchOrchestra- a generalized visual analytics for competitive team sports",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.2518044",
        "1.1978073",
        "Multi-Perspective, Simultaneous Embedding",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.219324",
        "0.64594024",
        "Multiscale Visualization and Exploration of Large Bipartite Graphs",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.7627474",
        "-0.014301185",
        "Optimal Axes for Data Value Estimation in Star Coordinates and Radial Axes Plots",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.2386446",
        "1.1859558",
        "Optimal Sets of Projections of High-Dimensional Data",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-1.7069855",
        "0.10593798",
        "Organizing Search Results with a Reference Map",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.3291802",
        "1.314963",
        "Orthographic Star Coordinates",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-1.9572612",
        "1.3413758",
        "Progressive Uniform Manifold Approximation and Projection",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "2.2769523",
        "-0.057230473",
        "SolarView- Low Distortion Radial Embedding with a Focus",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-3.9243119",
        "0.67486626",
        "Supporting Analysis of Dimensionality Reduction Results with Contrastive Learning",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.72391695",
        "0.778931",
        "TopoMap- A 0-dimensional Homology Preserving Projection of High-Dimensional Data",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Constrained",
        "Mixed,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-1.6403747",
        "0.23627616",
        "Visual Encoding of Dissimilarity Data via Topology-Preserving Map Deformation",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.840163",
        "2.9250572",
        "Visual Progression Analysis of Event Sequence Data",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-1.711967",
        "0.37423074",
        "Visualizing Multidimensional Data with Order Statistics",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.1401482",
        "0.8698104",
        "Visualizing Time-Dependent Data Using Dynamic t-SNE",
        "Data Enhancement & Transformation",
        "Dimension Reduction",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    
];

var dataF = [
    [
        "0.020547811",
        "1.8796778",
        "TopicLens- Efficient Multi-Level Visual Topic Exploration of Large-Scale Document Collections",
        "Interactive Exploration & Analysis",
        "Filter",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "0.49884424",
        "1.2801018",
        "TopicSifter- Interactive Search Space Reduction Through Targeted Topic Modeling",
        "Interactive Exploration & Analysis",
        "Filter",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    
];
var dataGML = [
    [
        "0.5953525",
        "0.7313584",
        "Algorithms for necklace maps",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-0.571068",
        "-1.812926",
        "Automatic Generation of Destination Maps",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.37753716",
        "-1.4701349",
        "Automatic Metro Map Layout Using Multicriteria Optimization",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "1.1101267",
        "-0.84441704",
        "Drawing and Labeling High-Quality Metro Maps by Mixed-Integer Programming",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Constrained",
        "Mixed,Multi-Objective,Linear,Constrained",
        
    ],
    [
        "0.22907795",
        "-0.006610261",
        "Drawing Road Networks with Focus Regions",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-3.128617",
        "-3.5514061",
        "Embedding Temporal Display into Maps for Occlusion-Free Visualization of Spatio-Temporal Data",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.7078676",
        "-1.6676806",
        "Flow Map Layout via Spiral Trees",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "2.1531813",
        "-1.13209",
        "Metro Maps on Octilinear Grid Graphs",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    [
        "1.3998399",
        "-0.80482227",
        "MetroSets- Visualizing Sets as Metro Maps",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Constrained",
        "Mixed,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-1.986865",
        "-0.85723585",
        "Rendering Effective Route Maps- Improving Usability Through Generalization",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.4854243",
        "3.4757137",
        "Stenomaps- Shorthand for shapes",
        "Visual Mapping & Structure",
        "Geographic Map Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    
];

var dataGRL = [
    [
        "-0.10285575",
        "1.7526555",
        "A Globally Conforming Lattice Structure for 2D Stress Tensor Visualization",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "1.6421942",
        "-0.50716174",
        "AdaM- Adapting Multi-User Interfaces for Collaborative Environments in Real-Time",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Mixed,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-1.6381453",
        "-2.213926",
        "Automatic Polygon Layout for Primal-Dual Visualization of Hypergraphs",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Discrete,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.98232013",
        "-0.702425",
        "Constrained Optimization for Disoccluding Geographic Landmarks in 3D Urban Maps",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Continuous,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-1.6753004",
        "0.040752206",
        "Distance Aware Tag Clouds",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "1.2328598",
        "0.43377674",
        "Efficient Optimal Overlap Removal- Algorithms and Experiments",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Continuous,Single-Objective,Linear,Constrained",
        
    ],
    [
        "1.1548302",
        "1.6182344",
        "E-Grid- a visual analytics system for evaluation structures",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Discrete,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "1.620971",
        "-2.683852",
        "Generating Tile Maps",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Discrete,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "0.2910567",
        "-0.5732229",
        "Global Beautification of 2D and 3D Layouts With Interactive Ambiguity Resolution",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "1.6780752",
        "-1.5123328",
        "High-Quality Ultra-Compact Grid Layout of Grouped Networks",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Discrete,Multi-Objective,Linear,Constrained",
        
    ],
    [
        "3.0462863",
        "-1.234193",
        "Improved Grid Map Layout by Point Set Matching",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-1.1211294",
        "-1.0484836",
        "Label Placement for Outliers in Scatterplots",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.1329828",
        "-1.1403443",
        "Modeling Visual Containment for Web Page Layout Optimization",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Continuous,Multi-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-1.6099164",
        "-1.5262461",
        "Multi-display Visual Analysis- Model, Interface, and Layout Computation",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.0632718",
        "-2.8358471",
        "Multi-level Area Balancing of Clustered Graphs",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Discrete,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "3.0871716",
        "-0.26562428",
        "OoDAnalyzer- Interactive Analysis of Out-of-Distribution Samples",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-1.6033732",
        "3.2855",
        "Optimal Algorithms for Compact Linear Layouts",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Linear,Unconstrained",
        
    ],
    [
        "-1.2711694",
        "-1.1642878",
        "PyramidTags- Context-, Time- and Word Order-Aware Tag Maps to Explore Large Document Collections",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-5.0839186",
        "1.1077423",
        "SRVis- Towards Better Spatial Integration in Ranking Visualization",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.8996444",
        "1.1828153",
        "UnTangle Map- Visual Analysis of Probabilistic Multi-Label Data",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-1.6213753",
        "-0.04446394",
        "ViSizer- A Visualization Resizing Framework",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.29208085",
        "0.15142088",
        "Visualization of complex dynamic datasets by means of mathematical optimization",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Mixed,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-0.10285575",
        "1.7526555",
        "A Globally Conforming Lattice Structure for 2D Stress Tensor Visualization",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "1.6421942",
        "-0.50716174",
        "AdaM- Adapting Multi-User Interfaces for Collaborative Environments in Real-Time",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Mixed,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-1.6381453",
        "-2.213926",
        "Automatic Polygon Layout for Primal-Dual Visualization of Hypergraphs",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Discrete,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.98232013",
        "-0.702425",
        "Constrained Optimization for Disoccluding Geographic Landmarks in 3D Urban Maps",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Continuous,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-1.6753004",
        "0.040752206",
        "Distance Aware Tag Clouds",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "1.2328598",
        "0.43377674",
        "Efficient Optimal Overlap Removal- Algorithms and Experiments",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Continuous,Single-Objective,Linear,Constrained",
        
    ],
    [
        "1.1548302",
        "1.6182344",
        "E-Grid- a visual analytics system for evaluation structures",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Discrete,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "1.620971",
        "-2.683852",
        "Generating Tile Maps",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Discrete,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "0.2910567",
        "-0.5732229",
        "Global Beautification of 2D and 3D Layouts With Interactive Ambiguity Resolution",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Continuous,Single-Objective,Nonlinear,Constrained",
        
    ],
    [
        "1.6780752",
        "-1.5123328",
        "High-Quality Ultra-Compact Grid Layout of Grouped Networks",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Discrete,Multi-Objective,Linear,Constrained",
        
    ],
    [
        "3.0462863",
        "-1.234193",
        "Improved Grid Map Layout by Point Set Matching",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-1.1211294",
        "-1.0484836",
        "Label Placement for Outliers in Scatterplots",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.1329828",
        "-1.1403443",
        "Modeling Visual Containment for Web Page Layout Optimization",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Continuous,Multi-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-1.6099164",
        "-1.5262461",
        "Multi-display Visual Analysis- Model, Interface, and Layout Computation",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.0632718",
        "-2.8358471",
        "Multi-level Area Balancing of Clustered Graphs",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Discrete,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "3.0871716",
        "-0.26562428",
        "OoDAnalyzer- Interactive Analysis of Out-of-Distribution Samples",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-1.6033732",
        "3.2855",
        "Optimal Algorithms for Compact Linear Layouts",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Linear,Unconstrained",
        
    ],
    [
        "-1.2711694",
        "-1.1642878",
        "PyramidTags- Context-, Time- and Word Order-Aware Tag Maps to Explore Large Document Collections",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-5.0839186",
        "1.1077423",
        "SRVis- Towards Better Spatial Integration in Ranking Visualization",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.8996444",
        "1.1828153",
        "UnTangle Map- Visual Analysis of Probabilistic Multi-Label Data",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-1.6213753",
        "-0.04446394",
        "ViSizer- A Visualization Resizing Framework",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "0.29208085",
        "0.15142088",
        "Visualization of complex dynamic datasets by means of mathematical optimization",
        "Visual Mapping & Structure",
        "Grid & Rectangle Layout",
        "Constrained",
        "Mixed,Single-Objective,Nonlinear,Constrained",
        
    ],
    
];

var dataHSL = [
    [
        "-2.9803817",
        "1.6186715",
        "DICON- Interactive Visual Analysis of Multidimensional Clusters",
        "Visual Mapping & Structure",
        "Hierarchical Structure Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.9800629",
        "-1.3424011",
        "Family metro maps",
        "Visual Mapping & Structure",
        "Hierarchical Structure Layout",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "2.3001306",
        "-0.027263297",
        "How Hierarchical Topics Evolve in Large Text Corpora",
        "Visual Mapping & Structure",
        "Hierarchical Structure Layout",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    [
        "2.3787377",
        "-0.61361367",
        "Minimizing the Number of Edges via Edge Concentration in Dense Layered Graphs",
        "Visual Mapping & Structure",
        "Hierarchical Structure Layout",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    [
        "-2.953911",
        "0.53532934",
        "Optimizing Hierarchical Visualizations with the Minimum Description Length Principle",
        "Visual Mapping & Structure",
        "Hierarchical Structure Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.9978876",
        "1.5232598",
        "TreeNetViz- Revealing Patterns of Networks over Tree Structures",
        "Visual Mapping & Structure",
        "Hierarchical Structure Layout",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-5.187156",
        "0.29957637",
        "Uncertainty Treemaps",
        "Visual Mapping & Structure",
        "Hierarchical Structure Layout",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-1.4751154",
        "2.6277757",
        "Visual Exploration of Complex Time-Varying Graphs",
        "Visual Mapping & Structure",
        "Hierarchical Structure Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-1.7551478",
        "0.12661386",
        "Whisper- Tracing the Spatiotemporal Process of Information Diffusion in Real Time",
        "Visual Mapping & Structure",
        "Hierarchical Structure Layout",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    
];

var dataN = [
    [
        "-0.23746213",
        "-2.5348513",
        "Algorithms for Labeling Focus Regions",
        "Interactive Exploration & Analysis",
        "Navigation",
        "Unconstrained",
        "Discrete,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-2.3167248",
        "1.0578355",
        "Dis-Function- Learning Distance Functions Interactively",
        "Interactive Exploration & Analysis",
        "Navigation",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-3.0821712",
        "-3.5437741",
        "Embedding Spatio-Temporal Information into Maps by Route-Zooming",
        "Interactive Exploration & Analysis",
        "Navigation",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.7181657",
        "-1.9932599",
        "Firefly- Virtual Illumination Drones for Interactive Visualization",
        "Data Enhancement & Transformation",
        "Navigation",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-0.10633205",
        "-1.0247272",
        "Focus+Context Metro Maps",
        "Interactive Exploration & Analysis",
        "Navigation",
        "Constrained",
        "Continuous,Multi-Objective,Nonlinear,Constrained",
        
    ],
    [
        "-2.5406098",
        "0.15598467",
        "Stable treemaps via local moves",
        "Interactive Exploration & Analysis",
        "Navigation",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-1.5800831",
        "-1.6238773",
        "Structure-aware Fisheye Views for Efficient Large Graph Exploration",
        "Interactive Exploration & Analysis",
        "Navigation",
        "Unconstrained",
        "Continuous,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-4.9748588",
        "-0.9530238",
        "Time-Dependent Flow seen through Approximate Observer Killing Fields",
        "Data Enhancement & Transformation",
        "Navigation",
        "Unconstrained",
        "Continuous,Single-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "-1.8165814",
        "-2.2747967",
        "Topological Fisheye Views for Visualizing Large Graphs",
        "Interactive Exploration & Analysis",
        "Navigation",
        "Unconstrained",
        "Mixed,Multi-Objective,Nonlinear,Unconstrained",
        
    ],
    [
        "2.7939441",
        "-1.0688066",
        "Zoomless Maps- External Labeling Methods for the Interactive Exploration of Dense Point Sets at a Fixed Map Scale",
        "Interactive Exploration & Analysis",
        "Navigation",
        "Constrained",
        "Discrete,Single-Objective,Linear,Constrained",
        
    ],
    
];

var dataNGL = [
  [
    "-2.4535873",
    "2.016421",
    "A Deep Generative Model for Graph Layout",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-4.9658084",
    "1.9095742",
    "A Visual Analysis Approach to Cohort Study of Electronic Patient Records",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Discrete,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-0.03633169",
    "0.91031045",
    "An Efficient Framework for Generating Storyline Visualizations from Streaming Data",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "-1.8459088",
    "2.044975",
    "BatchLayout- A Batch-Parallel Force-Directed Graph Layout Algorithm in Shared Memory",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-1.4291303",
    "0.021967174",
    "Bubble Sets- Revealing Set Relations with Isocontours over Existing Visualizations",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Linear,Unconstrained",
    
],
[
    "2.481149",
    "-1.5189146",
    "ClusterSets- Optimizing Planar Clusters in Categorical Point Data",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Mixed,Single-Objective,Linear,Constrained",
    
],
[
    "0.14902993",
    "-0.81605023",
    "Constrained Graph Layout",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Continuous,Multi-Objective,Nonlinear,Constrained",
    
],
[
    "-1.4190991",
    "-0.9213983",
    "Design Considerations for Optimizing Storyline Visualizations",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Multi-Objective,Nonlinear,Unconstrained",
    
],
[
    "-1.7352937",
    "1.8407711",
    "dNNG- Quality Metrics and Layout for Neighbourhood Faithfulness",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-2.4747462",
    "2.6065123",
    "DoughNets- Visualising Networks Using Torus Wrapping",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-0.44205025",
    "0.72085625",
    "Drawing Directed Graphs Using Quadratic Programming",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "-1.7778112",
    "1.3534341",
    "DRGraph- An Efficient Graph Layout Algorithm for Large-scale Graphs by Dimensionality Reduction",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "0.5001767",
    "2.288014",
    "Dynamic Network Visualization with Extended Massive Sequence Views",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "1.7505426",
    "-1.5684054",
    "Edge Compression Techniques for Visualization of Dense Directed Graphs",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Continuous,Multi-Objective,Linear,Constrained",
    
],
[
    "1.029874",
    "2.4041667",
    "EvoRiver- Visual Analysis of Topic Coopetition on Social Media",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "-1.5830332",
    "1.3670532",
    "Graph Drawing by Stochastic Gradient Descent",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-1.745678",
    "0.8159829",
    "Graph Layouts by t-SNE",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-1.9889513",
    "-0.5113405",
    "HOLA- Human-like Orthogonal Network Layout",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "0.28144047",
    "1.0180808",
    "Improved Circular Layouts",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "2.7108285",
    "-1.2856452",
    "Improved Optimal and Approximate Power Graph Compression for Clearer Visualisation of Dense Graphs",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Discrete,Single-Objective,Linear,Constrained",
    
],
[
    "-1.0501055",
    "1.7702781",
    "Integrating Edge Routing into Force-Directed Layout",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-1.374953",
    "2.0269847",
    "Intelligent Graph Layout Using Many Users’ Input",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-4.306696",
    "0.540538",
    "Interactive Steering of Hierarchical Clustering",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Discrete,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-2.3717263",
    "-2.2886913",
    "Interactive Volumetric Visual Analysis of Glycogen-derived Energy Absorption in Nanometric Brain Structures",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Discrete,Multi-Objective,Nonlinear,Unconstrained",
    
],
[
    "-1.1073109",
    "1.6154109",
    "IPSEP-COLA- An Incremental Procedure for Separation Constraint Layout of Graphs",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-1.8533359",
    "-0.1207653",
    "iStoryline- Effective Convergence to Hand-drawn Storylines",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-3.007437",
    "2.2428317",
    "Let It Flow- a Static Method for Exploring Dynamic Graphs",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "1.6589408",
    "2.2078707",
    "OD Morphing- Balancing Simplicity with Faithfulness for OD Bundling",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Discrete,Single-Objective,Nonlinear,Constrained",
    
],
[
    "-1.4255456",
    "0.405692",
    "Online Dynamic Graph Drawing",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Discrete,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "2.4735496",
    "-1.2004452",
    "Optimal Sankey Diagrams via Integer Programming",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Discrete,Single-Objective,Linear,Constrained",
    
],
[
    "1.834635",
    "-0.36244708",
    "Optimizing Stepwise Animation in Dynamic Set Diagrams",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Discrete,Multi-Objective,Linear,Constrained",
    
],
[
    "2.4527292",
    "-0.03404426",
    "Placing Arrows in Directed Graph Layouts- Algorithms and Experiments",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Discrete,Single-Objective,Linear,Constrained",
    
],
[
    "-1.4053711",
    "1.4546756",
    "Revisiting Stress Majorization as a Unified Framework for Interactive Constrained Graph Visualization",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-2.6738849",
    "-1.0501479",
    "SineStream- Improving the Readability of Streamgraphs by Minimizing Sine Illusion Effects",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-0.15656526",
    "0.93382686",
    "StoryFlow- Tracking the Evolution of Stories",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "2.2916572",
    "-1.1338501",
    "STRATISFIMAL LAYOUT- A modular optimization model for laying out layered node-link network visualizations",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Constrained",
    "Discrete,Single-Objective,Linear,Constrained",
    
],
[
    "-1.8044406",
    "1.1396433",
    "Sublinear-time Algorithms for Stress Minimization in Graph Drawing",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-2.5686572",
    "-0.8076433",
    "There is More to Streamgraphs than Movies- Better Aesthetics via Ordering and Lassoing",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-3.7600355",
    "2.7399046",
    "Visual Causality Analysis of Event Sequence Data",
    "Visual Mapping & Structure",
    "Node-Link Graph Layout",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],

];

var dataR = [
  [
    "-0.24589007",
    "1.0454924",
    "A Data-Driven Approach to Hue-Preserving Color-Blending",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "-1.2052313",
    "-1.9480516",
    "Active Colorization for Cartoon Line Drawings",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Unconstrained",
    "Mixed,Multi-Objective,Nonlinear,Unconstrained",
    
],
[
    "-0.31241772",
    "0.48280373",
    "Categorical Colormap Optimization with Visualization Case Studies",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "-1.0128046",
    "-2.6934686",
    "Colormap optimization with data equality",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Unconstrained",
    "Continuous,Multi-Objective,Nonlinear,Unconstrained",
    
],
[
    "-2.4840622",
    "-0.39288208",
    "Cuttlefish- Color Mapping for Dynamic Multi-Scale Visualizations",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-2.5100572",
    "-0.48759124",
    "Data-Driven Colormap Optimization for 2D Scalar Field Visualization",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-0.29916537",
    "0.54689693",
    "GMap- Visualizing Graphs and Clusters as Maps",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "-2.1683092",
    "2.69583",
    "Measuring Symmetry in Drawings of Graphs",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-1.1227825",
    "-2.7998276",
    "Optimizing Color Assignment for Perception of Class Separability in Multiclass Scatterplots",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Unconstrained",
    "Continuous,Multi-Objective,Nonlinear,Unconstrained",
    
],
[
    "-1.1429001",
    "-2.9551327",
    "Palettailor- Discriminable Colorization for Categorical Data",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Unconstrained",
    "Discrete,Multi-Objective,Nonlinear,Unconstrained",
    
],
[
    "-1.8217726",
    "0.30831644",
    "ParSetgnostics- Quality Metrics for Parallel Sets",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-0.70506316",
    "0.48907453",
    "Perception-Based Visual Quality Measures",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "2.771349",
    "0.22862248",
    "Probabilistic Graph Layout for Uncertain Network Visualization",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Constrained",
    "Discrete,Single-Objective,Linear,Constrained",
    
],
[
    "2.1350808",
    "-0.1228945",
    "Relaxing Dense Scatter Plots with Pixel-Based Mappings",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Constrained",
    "Discrete,Single-Objective,Linear,Constrained",
    
],
[
    "0.8678576",
    "-2.0568988",
    "Representing Multivariate Data by Optimal Colors to Uncover Events of Interest in Time Series Data",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Constrained",
    "Discrete,Single-Objective,Nonlinear,Constrained",
    
],
[
    "-3.7446282",
    "0.36515614",
    "Visual Abstraction and Exploration of Multi-class Scatterplots",
    "Visual Mapping & Structure",
    "Perception & Color",
    "Unconstrained",
    "Discrete,Single-Objective,Nonlinear,Unconstrained",
    
],

];

var dataRecon = [
  [
    "0.3387083",
    "1.5676347",
    "ArchiText- Interactive Hierarchical Topic Modeling",
    "Interactive Exploration & Analysis",
    "Reconfigure",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "-2.2113776",
    "-0.58735436",
    "Exemplar-based Layout Fine-tuning for Node-link Diagrams",
    "Interactive Exploration & Analysis",
    "Reconfigure",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-0.050256997",
    "-1.0793368",
    "Interactive Metro Map Editing",
    "Interactive Exploration & Analysis",
    "Reconfigure",
    "Constrained",
    "Continuous,Multi-Objective,Nonlinear,Constrained",
    
],
[
    "-2.285317",
    "-1.5129962",
    "Interactive Structure-aware Blending of Diverse Edge Bundling Visualizations",
    "Interactive Exploration & Analysis",
    "Reconfigure",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-3.1480725",
    "-1.600749",
    "Scatter-Gather Clustering- Flexibly Incorporating User Feedback to Steer Clustering Results",
    "Interactive Exploration & Analysis",
    "Reconfigure",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-2.4688063",
    "1.246492",
    "Semantics of Directly Manipulating Spatializations",
    "Interactive Exploration & Analysis",
    "Reconfigure",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "1.7829996",
    "-0.516675",
    "Supporting the Problem-Solving Loop- Designing Highly Interactive Optimisation Systems",
    "Interactive Exploration & Analysis",
    "Reconfigure",
    "Constrained",
    "Constrained",
    
],
[
    "0.15922993",
    "1.191856",
    "UTOPIAN- User-Driven Topic Modeling Based on Interactive Nonnegative Matrix Factorization",
    "Interactive Exploration & Analysis",
    "Reconfigure",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],
[
    "-2.4723377",
    "0.12846114",
    "Visual Cluster Exploration of Web Clickstream Data",
    "Interactive Exploration & Analysis",
    "Reconfigure",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-0.34299707",
    "2.409371",
    "Visual Reconciliation of Alternative Similarity Spaces in Climate Modeling",
    "Interactive Exploration & Analysis",
    "Reconfigure",
    "Constrained",
    "Continuous,Single-Objective,Nonlinear,Constrained",
    
],

]
var dataRendering = [
  [
    "-3.943824",
    "-0.75707024",
    "Accelerated Monte Carlo Rendering of Finite-Time Lyapunov Exponents",
    "Visual Mapping & Structure",
    "Rendering",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],
[
    "-3.1152425",
    "-0.4934822",
    "Fourier Opacity Optimization for Scalable Exploration",
    "Visual Mapping & Structure",
    "Rendering",
    "Unconstrained",
    "Continuous,Single-Objective,Nonlinear,Unconstrained",
    
],

]

var itemStyle = {
  normal: {
    opacity: 0.8,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: "rgba(0, 0, 0, 0.5)",
  },
};

option = {
    title:{
        text:"Constrained OR Unconstrained",
        left:'center',
        top:0,
      },
  color: [
    "rgb(238, 125, 191)",
    "rgb(40, 3, 245)",
    "rgb(94, 204, 250)",
    "rgb(86, 116, 232)",
    "rgb(139, 139, 61)",
    "rgb(241, 152, 143)",
    "rgb(240, 149, 54)",
    "rgb(224, 208, 108)",
    "rgb(204, 98, 204)",
    "rgb(201, 42, 29)",
    "rgb(234, 55, 38)",
    "rgb(234, 51, 153)",
  ],
  legend: {
    show:false,
    top: 20,
    textStyle: {
      fontSize: 10,
    },
    data: [
      "Rendering",
      "Filter",
      "Navigation",
      "Reconfigure",
      "Data Refinement",
      "Perception & Color",
      "Data Classification",
      "Dimension Reduction",
      "Geographic Map Layout",
      "Node-Link Graph Layout",
      "Grid & Rectangle Layout",
      "Hierarchical Structure Layout",

    ],
  },
  grid: {
    //show: true,
    // left: "-5%",
    // right: 7；5,
    // top: "15%",
    // bottom: "10%",
    // orient: "horizontal",
    // width: "100%", 
    // height: "100%",
    // left:"center",
    //borderColor:"rgb(256,256,256)",
    //backgroundColor:"rgb(1, 1, 1)",
    borderColor:"rgb(0,0,0)",
    show:true,
  },
//   grid: [
//     { left: "7%", top: "7%", width: "38%", height: "38%" },
//     { right: "10%", bottom: "7%", width: "38%", height: "38%" },
//   ],
  tooltip: {
    padding: 5,
    backgroundColor: "rgba(255,255,255)",
    borderColor: "rgba(0,0,0,.5)",
    //   borderWidth: 1,
    formatter: function (obj) {
      var value = obj.value;
      return (
        '<div style="border-bottom: 1px solid rgba(255,255,255,.1); font-size: 15px;padding-bottom: 3px;margin-bottom: 0px">' +
        "<b>" +
        schema[2].text +
        "</b>：" +
        value[2] +
        "<br><b>" +
        schema[5].text +
        "</b>：" +
        value[5] +
        "<br><b>" +
        schema[3].text +
        "</b>：" +
        value[3] +
        "<br><b>" +
        schema[4].text +
        "</b>：" +
        value[4]+
        "<br><b>" +
        schema[6].text +
        "</b>：" +
        value[6]
      );
    },
  },
  xAxis: 
    {
      type: "value",
      //name: "x",
      gridIndex: 0,
      nameGap: 160,
      nameTextStyle: {
        fontSize: 14,
      },

      show: false,
      splitLine: {
        show: false,
      },
      axisLabel: {
        formatter: "{value}",
      },
    },
   
 
  yAxis: 
    {
      type: "value",
      //name: "y",
      gridIndex: 0,
      nameLocation: "end",
      nameGap: 20,
      nameTextStyle: {
        fontSize: 20,
      },
      show: false,
      splitLine: {
        show: false,
      },
    },
    
  
  visualMap: [
    {
      //orient: "horizontal",
      bottom: 70,
      right: "10%",
      
      dimension: 5,
      categories: [
        "Constrained",
        "Unconstrained",
      ],
      //show:false,
      inRange: {
        symbol: {
          "Constrained": "circle",
          "Unconstrained": kxy,
        },
        symbolSize:10,
      },
      textStyle: {
        fontSize: 10,
      },
      
      outOfRange: {
        symbol: {
          "Constrained": "circle",
          "Unconstrained": kxy,
        },
      },
    },
  ],

  series: [
    {
      symbolSize: 20,
      name: "Data Classification",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataDC,
    
    },
    {
      symbolSize: 20,
      name: "Data Refinement",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataDR,
    },
    {
      symbolSize: 20,
      name: "Dimension Reduction",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataDRN,
    },
    {
      symbolSize: 20,
      name: "Filter",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataF,
    },
    {
      symbolSize: 20,
      name: "Geographic Map Layout",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataGML,
    },
    {
      symbolSize: 20,
      name: "Grid & Rectangle Layout",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataGRL,
    },

    {
      symbolSize: 20,
      name: "Hierarchical Structure Layout",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataHSL,
    },

    {
      symbolSize: 20,
      name: "Navigation",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataN,
    },

    {
      symbolSize: 20,
      name: "Node-Link Graph Layout",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataNGL,
    },

    {
      symbolSize: 20,
      name: "Perception & Color",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataR,
    },
    {
      symbolSize: 20,
      name: "Reconfigure",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataRecon,
    },
    {
      symbolSize: 20,
      name: "Rendering",
      type: "scatter",
      itemStyle: itemStyle,
      data: dataRendering,
    },
  ],
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}