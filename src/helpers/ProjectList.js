import mop from "../assets/resto/mop.jpg"
import start1 from "../assets/resto/start1.jpg"
import start2 from "../assets/resto/start2.jpg"
import resto1 from "../assets/resto/resto1.jpg"
import resto2 from "../assets/resto/engine.jpg"
import resto3 from "../assets/resto/clutch.jpg"
import generator from "../assets/hydrogenGas/generator.jpg"
import milling from "../assets/robotikS/milling.jpg"
import kitchen1 from "../assets/resto/kitchen1.jpg"
import kitchen2 from "../assets/resto/kitchen2.jpg"
import kitchen3 from "../assets/resto/kitchen3.jpg"
import kitchen5 from "../assets/resto/kitchen5.jpg"
import running from "../assets/resto/running.mp4"
import wheel from "../assets/resto/wheel.jpg"
import body1 from "../assets/resto/body1.jpg"
import body2 from "../assets/resto/body2.jpg"
import body3 from "../assets/resto/body3.jpg"
import final1 from "../assets/resto/final1.jpg"
import final2 from "../assets/resto/final2.jpg"
import final3 from "../assets/resto/final3.jpg"
import operating from "../assets/hydrogenGas/operating.mp4"
import xplosion from "../assets/hydrogenGas/xplosion.mp4"
import materov from "../assets/robotikS/materov.jpg"
import float1 from "../assets/robotikS/float.jpg"
import float2 from "../assets/robotikS/cad.png"
import milling1 from "../assets/robotikS/milling.jpg"
import milling2 from "../assets/robotikS/milling2.jpg"
import milling3 from "../assets/robotikS/milling3.png"
import group from "../assets/feiji club/group.jpg"
import iphone1 from "../assets/feiji club/iphone1.jpg"
import iphone2 from "../assets/feiji club/iphone2.jpg"
import flight from "../assets/feiji club/flight.mp4"
import thumbnailaoe from "../assets/aoe/thumbnail.jpg"
import cad1aoe from "../assets/aoe/blaster.jpeg"
import cad2aoe from "../assets/aoe/deployer.jpeg"
import cad3aoe from "../assets/aoe/assmbly.jpeg"
import arduino1 from "../assets/aoe/arduino1.jpg"
import arduino2 from "../assets/aoe/arduino2.jpg"
import assembling from "../assets/aoe/assemling.jpeg"
import lsrcut from "../assets/aoe/lsrcut.jpg"
import final from "../assets/aoe/final.jpg"
import craftsman1 from "../assets/craftsman/after.jpg"
import craftsman2 from "../assets/craftsman/before.jpg"
import craftsman3 from "../assets/craftsman/before1.jpg"
import runningexample2 from "../assets/ballMill/runningexample.mp4"
import insideBottle from "../assets/ballMill/insideBottle.jpg"
import assy from "../assets/nixieclock/assebling.jpg"
import schematic from "../assets/nixieclock/schematic.png"
import pcbFusion360 from "../assets/nixieclock/pcbFusion360.png"
import pcb1 from "../assets/nixieclock/pcb1.jpg"
import pcb2 from "../assets/nixieclock/pcb2.PNG"
import soldering1 from "../assets/nixieclock/soldering1.jpeg"
import testing1 from "../assets/nixieclock/testing1.jpeg"
import acrylicblock from "../assets/machining/acrylicblock.jpg"
import fryer from "../assets/machining/fryer.jpg"
import millingvid from "../assets/machining/millingvid.mp4"
import nuclearSoln from "../assets/machining/nuclearSoln.jpg"
import setup from "../assets/machining/setup.jpg"
import tormach from "../assets/machining/tormach.jpg"
import chcoo from "../assets/electroplating/chcoo.jpg"
import electroplated from "../assets/electroplating/electroplated.jpg"
import explodedsensor from "../assets/sensonoe/explodedSensor.png"
import cncMachine from "../assets/sensonoe/cncMachine.png"
import armoredSensor from "../assets/sensonoe/armoredSensor.png"
import dxf from "../assets/sensonoe/dxf.png"
import holder from "../assets/sensonoe/holder.png"
import cncvid from "../assets/sensonoe/cncvid.mp4"
import ee from "../assets/sensonoe/ee.png"
import radarSensor from "../assets/sensonoe/radarSensor.png"
import radarHolder from "../assets/sensonoe/radarHoder.mp4"
import batteryholder from "../assets/feiji club/batteryholder.png"
import firewall from "../assets/feiji club/firewall.png"
import rib from "../assets/feiji club/rib.png"
import tailwheelholder from "../assets/feiji club/tailwheelholder.png"
import endfit from "../assets/robotikS/endfit.jpg"
import leaktest from "../assets/robotikS/leaktest.mp4"



export const ProjectList = [
    {
        id: 0,
        name: "Motobecane Mobylette Restoration",
        thumbnail: mop,
        images1: [start1,start2],
        images2: [resto1,resto2,resto3,wheel],
        images3: [kitchen1,kitchen2,kitchen3,kitchen5],
        images4: [body1,body3,body2],
        images5: [final1,final2,final3],
        videos3: [running],
        text1: "This is a Moped from 1977 that I overhauled due to a seized engine",
        text2: "Beginning of the Restoration Process...",
        text3: "Overhauling the av7 Engine",
        text4: "Body Work",
        text5: "Finished Product",

    },
    {
        id:1,
        name: "Sensoneo Slovakia",
        thumbnail: explodedsensor,
        images1: [armoredSensor],
        images2: [dxf, ee],
        images3:[cncMachine],
        images4:[holder],
        videos3: [cncvid],
        videos4: [radarHolder],
        images5: [radarSensor],
        text1: "Housing designed to sheild sensor from damage when mounting in high-traffic areas",
        text2: "DXF path for cnc of mounting brackets & electronics control box for stepper motor drivers",
        text3: "Finalized 2-axis CNC accelerometer testing rig",
        text4: "Prototype for one-handed replacement sensor mounting compartment",
        text5: "Altered sensor housing with optimized lens shape that improved clarity of radar module data"

    },
    {
        id:2,
        name: "Columbia University AAIA Club",
        thumbnail: group,
        images1:[tailwheelholder],
        images2: [batteryholder],
        images3: [firewall],
        images4: [rib],
        images5: [iphone1, iphone2],
        videos6: [flight],
        text1: "CAD rendering of tail wheel mounting component",
        text2: "CAD rendering of component that would hold LiPo battery fixed relative to the central spar of the plane",
        text3: "CAD rendering of the firewall that would hold the engine in place",
        text4: "CAD rendering of one rib that provides internal strucutral stability for the wing ",
        text5: "Utilization of wind tunnel to analyze aerofil performance",
        text6: "First sucessful flight"
    },
    {
        id:3,
        name: "Columbia University Robotics Club",
        thumbnail: milling,
        images1: [materov],
        images2: [float2, float1],
        images3: [milling1, milling2, milling3],
        images4: [endfit],
        videos5: [leaktest],
        text1: "MATE ROV",
        text2: "Autonomous float robot for MATE ROV contest",
        text3: "Utilizing the Columbia University Machine Shop, saving costs and time associated with outsourcing to external vendors",
        text4: "Precision machined endcap that smootlhy integrates volumetric srynge with rest of float",
        text5: "Leak test on the float",
    },
    {
        id:4,
        name: "Art Of Engineering Project",
        thumbnail: thumbnailaoe,
        images1: [cad1aoe,cad2aoe, cad3aoe],
        images2: [arduino1, arduino2, assembling, lsrcut],
        images3: [final, thumbnailaoe],
        text1: "CAD of project conceptualization",
        text2: "Assembling project",
        text3: "Final product",
    },
    {
        id:5,
        name: "Machining",
        thumbnail: tormach,
        images1: [tormach,fryer],
        images2: [acrylicblock],
        videos2: [millingvid],
        images3: [setup, nuclearSoln],
        text1: "The Tormach and Fryer milling machines, both of which I am certified to use ",
        text2: "One of my first parts",
        text3: "Extraneous images taken during various milling procedures",
    },
    {
        id:6,
        name: "Ball Mill Creation",
        thumbnail: insideBottle,
        videos1: [runningexample2],
        images2: [insideBottle],
        text1: "Ball mill that I created by repurposing an old stand mixer and various stray components from around the house.",
        text2: "Results after 1 day of runtime",
        
    },
    {
        id:7,
        name: "Craftsman Jigsaw",
        thumbnail: craftsman1,
        images1: [craftsman2,craftsman3],
        images2: [craftsman1],
        text1: "Before restoration",
        text2: "After restoration",
       
    },
    {
        id:8,
        name: "Nixie Clock",
        thumbnail: assy,
        images1: [pcb1,pcb2,schematic, pcbFusion360],
        images2: [testing1, soldering1],
        images3: [assy],
        text1: "PCB design using Autodesk FUSION 360",
        text2: "Testing & Soldering",
        text3: "Assembling Components",
    },
    {
        id:9,
        name: "Hydrogen Gas Generator",
        thumbnail:generator,
        videos1:[operating],
        images1: [generator],   
        videos2:[xplosion],     
        text1: "Learning about electrolysis in chem, I could now believe water was composed of explosive gas ",
        text2: "With some pencil-lead electrodes, plastic bottles, and the tube from a shampoo bottle pump, I was able to verify. ",
    },
    {
        id:10,
        name: "Electroplating",
        thumbnail: chcoo,
        images1: [chcoo],
        images2: [electroplated],
        text1: "Homemade Cu(CH3COO) (aq) for electroplating",
        text2: "Electroplated quarter and control for comparison",
    },
    
]