import React, { useState } from "react";
import ItemPage from "../pages/ItemPage";
import { Outlet, Link, useNavigate } from "react-router-dom";

//Cleats Images Import
import adidasProCarbon from "../assets/cleats/adult/adidas cleats/adidas predator carbon fiber/adidas-predator-carbon.avif";
import adidasProCarbon1 from "../assets/cleats/adult/adidas cleats/adidas predator carbon fiber/adidas-predator-pro-fg - 1.avif";
import adidasProCarbon2 from "../assets/cleats/adult/adidas cleats/adidas predator carbon fiber/adidas-preadator-pro-fg-2.avif";
import adidasProCarbon3 from "../assets/cleats/adult/adidas cleats/adidas predator carbon fiber/adidas-preador-pro-fg-3.avif";

import adidasCrazyFast from "../assets/cleats/adult/adidas cleats/messi-blue-cleats/adidas-x-crazyfast.avif";
import adidasCrazyFast1 from "../assets/cleats/adult/adidas cleats/messi-blue-cleats/adidas-x-crazyfast-1.avif";
import adidasCrazyFast2 from "../assets/cleats/adult/adidas cleats/messi-blue-cleats/adidas-x-crazyfast-2.avif";
import adidasCrazyFast3 from "../assets/cleats/adult/adidas cleats/messi-blue-cleats/adidas-x-crazyfast.avif";

import adidasEliteX from "../assets/cleats/adult/adidas cleats/adidas-elite/adidas-elite-x.avif";
import adidasEliteX1 from "../assets/cleats/adult/adidas cleats/adidas-elite/adidas-elite-x-1.avif";
import adidasEliteX2 from "../assets/cleats/adult/adidas cleats/adidas-elite/adidas-elite-x-2.avif";
import adidasEliteX3 from "../assets/cleats/adult/adidas cleats/adidas-elite/adidas-elite-x-3.avif";

import academyNikeTempo from "../assets/cleats/adult/nike cleats/nike-tempo-academy.avif";
import academyNikeTempo1 from "../assets/cleats/adult/nike cleats/nike-tempo-academy-1.avif";
import academyNikeTempo2 from "../assets/cleats/adult/nike cleats/nike-tempo-academy-2.avif";
import academyNikeTempo3 from "../assets/cleats/adult/nike cleats/nike-tempo-academy-3.avif";

import vaporNike from "../assets/cleats/adult/nike cleats/vapor XV/nike-air-zoom-vapor.avif";
import vaporNike1 from "../assets/cleats/adult/nike cleats/vapor XV/nike-air-zoom-vapor-1.avif";
import vaporNike2 from "../assets/cleats/adult/nike cleats/vapor XV/nike-air-zoom-vapor-2.avif";
import vaporNike3 from "../assets/cleats/adult/nike cleats/vapor XV/nike-air-zoom-vapor-3.avif";

import nikeLuna from "../assets/cleats/adult/nike cleats/nikeLuna/nike-luna-FG.avif";
import nikeLuna1 from "../assets/cleats/adult/nike cleats/nikeLuna/nike-luna-FG-1.avif";
import nikeLuna2 from "../assets/cleats/adult/nike cleats/nikeLuna/nike-luna-FG-2.avif";
import nikeLuna3 from "../assets/cleats/adult/nike cleats/nikeLuna/nike-luna-FG-3.avif";

import pumaPink from "../assets/cleats/adult/puma/poison-pink/puma-poison-pink.avif";
import pumaPink1 from "../assets/cleats/adult/puma/poison-pink/puma-poison-pink-1.avif";
import pumaPink2 from "../assets/cleats/adult/puma/poison-pink/puma-poison-pink-2.avif";
import pumaPink3 from "../assets/cleats/adult/puma/poison-pink/puma-poison-pink-3.avif";

import pumaFuture from "../assets/cleats/adult/puma/puma-future/puma-future-7.avif";
import pumaFuture1 from "../assets/cleats/adult/puma/puma-future/puma-future-7-1.avif";
import pumaFuture2 from "../assets/cleats/adult/puma/puma-future/puma-future-7-2.avif";
import pumaFuture3 from "../assets/cleats/adult/puma/puma-future/puma-future-7-3.avif";

import pumaUltimate from "../assets/cleats/adult/puma/puma-utlimate/puma-ultimate-cleats.avif";
import pumaUltimate1 from "../assets/cleats/adult/puma/puma-utlimate/puma-ultimate-cleats-1.avif";
import pumaUltimate2 from "../assets/cleats/adult/puma/puma-utlimate/puma-ultimate-cleats-2.avif";
import pumaUltimate3 from "../assets/cleats/adult/puma/puma-utlimate/puma-ultimate-cleats-3.avif";

import mizunoMorelia from "../assets/cleats/adult/mizuno/mizuno neo/mizuno-morelia-neo-IV-pro.avif";
import mizunoMorelia1 from "../assets/cleats/adult/mizuno/mizuno neo/mizuno-morelia-neo-IV-pro-1.avif";
import mizunoMorelia2 from "../assets/cleats/adult/mizuno/mizuno neo/mizuno-morelia-neo-IV-pro-2.avif";
import mizunoMorelia3 from "../assets/cleats/adult/mizuno/mizuno neo/mizuno-morelia-neo-IV-pro-3.avif";

import mizunoJapan from "../assets/cleats/adult/mizuno/mizuno japan/mizuno-japan-fg.avif";
import mizunoJapan1 from "../assets/cleats/adult/mizuno/mizuno japan/mizuno-japan-fg-1.avif";
import mizunoJapan2 from "../assets/cleats/adult/mizuno/mizuno japan/mizuno-japan-fg-2.avif";
import mizunoJapan3 from "../assets/cleats/adult/mizuno/mizuno japan/mizuno-japan-fg-3.avif";

import skechers from "../assets/cleats/adult/Skechers/skechers SKX 01 FG.avif";
import skechers1 from "../assets/cleats/adult/Skechers/skechers SKX 01 FG-1.avif";
import skechers2 from "../assets/cleats/adult/Skechers/skechers SKX 01 FG-2.avif";
import skechers3 from "../assets/cleats/adult/Skechers/skechers SKX 01 FG-3.avif";

//Indoor Cleats Image import
import pumaUltraIndoor from "../assets/Indoor Cleats/Adult/Puma/Puma Ultra 1.3/Puma Ultra 1.3 Pro Cage.avif";
import pumaUltraIndoor1 from "../assets/Indoor Cleats/Adult/Puma/Puma Ultra 1.3/Puma Ultra 1.3 Pro Cage-1.avif";
import pumaUltraIndoor2 from "../assets/Indoor Cleats/Adult/Puma/Puma Ultra 1.3/Puma Ultra 1.3 Pro Cage-2.avif";
import pumaUltraIndoor3 from "../assets/Indoor Cleats/Adult/Puma/Puma Ultra 1.3/Puma Ultra 1.3 Pro Cage-3.avif";

import tiempoLegendIndoor from "../assets/Indoor Cleats/Adult/Nike/Tiempo Legend/Nike Tiempo Legend X.avif";
import tiempoLegendIndoor1 from "../assets/Indoor Cleats/Adult/Nike/Tiempo Legend/Nike Tiempo Legend X-1.avif";
import tiempoLegendIndoor2 from "../assets/Indoor Cleats/Adult/Nike/Tiempo Legend/Nike Tiempo Legend X-2.avif";
import tiempoLegendIndoor3 from "../assets/Indoor Cleats/Adult/Nike/Tiempo Legend/Nike Tiempo Legend X-3.avif";

import tiempoAcademyIndoor from "../assets/Indoor Cleats/Adult/Nike/Tiempo Academy/Nike Tiempo Legend X Academy IC.avif";
import tiempoAcademyIndoor1 from "../assets/Indoor Cleats/Adult/Nike/Tiempo Academy/Nike Tiempo Legend X Academy IC-1.avif";
import tiempoAcademyIndoor2 from "../assets/Indoor Cleats/Adult/Nike/Tiempo Academy/Nike Tiempo Legend X Academy IC-2.avif";
import tiempoAcademyIndoor3 from "../assets/Indoor Cleats/Adult/Nike/Tiempo Academy/Nike Tiempo Legend X Academy IC-3.avif";

import nikeSuperflyIndoor from "../assets/Indoor Cleats/Adult/Nike/Nike Mercurial Superfly/Nike Mercurial Superfly Academy.avif";
import nikeSuperflyIndoor1 from "../assets/Indoor Cleats/Adult/Nike/Nike Mercurial Superfly/Nike Mercurial Superfly Academy-1.avif";
import nikeSuperflyIndoor2 from "../assets/Indoor Cleats/Adult/Nike/Nike Mercurial Superfly/Nike Mercurial Superfly Academy-2.avif";
import nikeSuperflyIndoor3 from "../assets/Indoor Cleats/Adult/Nike/Nike Mercurial Superfly/Nike Mercurial Superfly Academy-3.avif";

import nikeAirVaporIndoor from "../assets/Indoor Cleats/Adult/Nike/Nike Air Zoom Mercurial/Nike Air Zoom Mercurial Vapor XV.avif";
import nikeAirVaporIndoor1 from "../assets/Indoor Cleats/Adult/Nike/Nike Air Zoom Mercurial/Nike Air Zoom Mercurial Vapor XV-1.avif";
import nikeAirVaporIndoor2 from "../assets/Indoor Cleats/Adult/Nike/Nike Air Zoom Mercurial/Nike Air Zoom Mercurial Vapor XV-2.avif";
import nikeAirVaporIndoor3 from "../assets/Indoor Cleats/Adult/Nike/Nike Air Zoom Mercurial/Nike Air Zoom Mercurial Vapor XV-3.avif";

import nikeAirZoomTurqIndoor from "../assets/Indoor Cleats/Adult/Nike/Nike Air Zoom Acqua/Nike Air Zoom Mercurial Turq.avif";
import nikeAirZoomTurqIndoor1 from "../assets/Indoor Cleats/Adult/Nike/Nike Air Zoom Acqua/Nike Air Zoom Mercurial Turq-1.avif";
import nikeAirZoomTurqIndoor2 from "../assets/Indoor Cleats/Adult/Nike/Nike Air Zoom Acqua/Nike Air Zoom Mercurial Turq-2.avif";
import nikeAirZoomTurqIndoor3 from "../assets/Indoor Cleats/Adult/Nike/Nike Air Zoom Acqua/Nike Air Zoom Mercurial Turq-3.avif";

import adidasCrazyFastIndoor from "../assets/Indoor Cleats/Adult/Adidas/adidas X CrazyFast/adidas X CrazyFast 3.avif";
import adidasCrazyFastIndoor1 from "../assets/Indoor Cleats/Adult/Adidas/adidas X CrazyFast/adidas X CrazyFast 3-1.avif";
import adidasCrazyFastIndoor2 from "../assets/Indoor Cleats/Adult/Adidas/adidas X CrazyFast/adidas X CrazyFast 3-2.avif";
import adidasCrazyFastIndoor3 from "../assets/Indoor Cleats/Adult/Adidas/adidas X CrazyFast/adidas X CrazyFast 3-3.avif";

import adidasAccuracyIndoor from "../assets/Indoor Cleats/Adult/Adidas/adidas Predator/adidas Predator Accuracy.avif";
import adidasAccuracyIndoor1 from "../assets/Indoor Cleats/Adult/Adidas/adidas Predator/adidas Predator Accuracy-1.avif";
import adidasAccuracyIndoor2 from "../assets/Indoor Cleats/Adult/Adidas/adidas Predator/adidas Predator Accuracy-2.avif";
import adidasAccuracyIndoor3 from "../assets/Indoor Cleats/Adult/Adidas/adidas Predator/adidas Predator Accuracy-3.avif";

import adidasClubIndoor from "../assets/Indoor Cleats/Adult/Adidas/adidas Club/adidas Predator Club Sala IN.avif";
import adidasClubIndoor1 from "../assets/Indoor Cleats/Adult/Adidas/adidas Club/adidas Predator Club Sala IN-1.avif";
import adidasClubIndoor2 from "../assets/Indoor Cleats/Adult/Adidas/adidas Club/adidas Predator Club Sala IN-2.avif";
import adidasClubIndoor3 from "../assets/Indoor Cleats/Adult/Adidas/adidas Club/adidas Predator Club Sala IN-3.avif";

// Jersey List

import acMilanJersey from "../assets/jerseys/adult/ac_milan/ac_milan_1.jpg";
import acMilanJersey1 from "../assets/jerseys/adult/ac_milan/ac_milan_2.jpg";

import angelCityJersey from "../assets/jerseys/adult/angel_city/angel_city_main.avif";
import angelCityJersey1 from "../assets/jerseys/adult/angel_city/angel_city_2.jpg";

import manCityJersey from "../assets/jerseys/adult/man_city_jer/man_city-1.avif";
import manCityJersey1 from "../assets/jerseys/adult/man_city_jer/man_city-2.avif";

import parisJersey from "../assets/jerseys/adult/paris_jer/paris_1.avif";
import parisJersey1 from "../assets/jerseys/adult/paris_jer/paris_2.avif";

// Keeper List

import adidasProGloves1 from "../assets/keeper/adidas_pro/adidas_pro-1.avif";
import adidasProGloves2 from "../assets/keeper/adidas_pro/adidas_pro-2.avif";
import adidasProGloves3 from "../assets/keeper/adidas_pro/adidas_pro-3.avif";

import adidasXGloves1 from "../assets/keeper/adidas_X/adidas_x-1.avif";
import adidasXGloves2 from "../assets/keeper/adidas_X/adidas_x-2.avif";
import adidasXGloves3 from "../assets/keeper/adidas_X/adidas_x-3.avif";

import nikeGripGloves1 from "../assets/keeper/nike_grip/nike_grip-1.avif";
import nikeGripGloves2 from "../assets/keeper/nike_grip/nike_grip-2.avif";
import nikeGripGloves3 from "../assets/keeper/nike_grip/nike_grip-3.avif";

import uhGloves1 from "../assets/keeper/uhsport/uhsport-1.avif";
import uhGloves2 from "../assets/keeper/uhsport/uhsport-2.avif";
import uhGloves3 from "../assets/keeper/uhsport/uhsport-3.avif";

// Soccer Balls

import brazilBall from "../assets/training/soccer_balls/brazil_ball.avif";
import championsTrainingBall from "../assets/training/soccer_balls/champions_training.jpg";
import mlsBall from "../assets/training/soccer_balls/mls_ball.avif";
import mlsComp from "../assets/training/soccer_balls/mls_competition.avif";
import mlsPro from "../assets/training/soccer_balls/mls_pro.avif";
import mlsTrain from "../assets/training/soccer_balls/mls_training.avif";
import nikePhantom from "../assets/training/soccer_balls/nike_phantom.avif";
import premierAcademy from "../assets/training/soccer_balls/premier_academy.avif";
import premierBall from "../assets/training/soccer_balls/premier_ball.avif";
import womensUefa from "../assets/training/soccer_balls/womens_uefa.avif";

//Firm Ground Cleat List Under Footwear Section
export const fgCleatList = [
  {
    itemImg: adidasProCarbon,
    itemImg1: adidasProCarbon1,
    itemImg2: adidasProCarbon2,
    itemImg3: adidasProCarbon3,
    imgAlt: "Adidas Pro Carbon FG",
    discount: "20% Off",
    itemName: "Adidas Pro Carbon Black FG",
    description: "Firm Ground High Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "The game's all about goals, and these soccer cleats are crafted to find the net. Every. Time. Target perfection in all-new adidas Predator. Deployed on their soft, flexible HybridTouch 2.0 upper, rubber Strikeskin fins add extra grip for unerring finishes. Down below, a full-length Controlplate 2.0 outsole ensures you're in the right place at the right time on firm ground.This product features at least 20% recycled materials. By reusing materials that have already been created, we help to reduce waste and our reliance on finite resources and reduce the footprint of the products we make.",
    itemPrice: "$170",
    quantity: 1,
    size: 9,
    id: 1,
  },
  {
    itemImg: adidasCrazyFast,
    itemImg1: adidasCrazyFast1,
    itemImg2: adidasCrazyFast2,
    itemImg3: adidasCrazyFast3,
    imgAlt: "Adidas Crazy Fast",
    discount: "20% Off",
    itemName: "Adidas X CrazyFast FG",
    description: "Firm Ground High Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "Celebrate a soccer genius in the colors of his world champion team. Looking slick with a semi-translucent Aeropacity Speedskin upper dressed in Argentina's blue and white, these X Crazyfast Messi cleats include reinforcements only where they're needed. An adidas PRIMEKNIT collar straps you in and extra forefoot studs on the Speedframe outsole help you spark mayhem on firm ground.",
    itemPrice: "$260",
    quantity: 1,
    size: 9,
    id: 2,
  },
  {
    itemImg: adidasEliteX,
    itemImg1: adidasEliteX1,
    itemImg2: adidasEliteX2,
    itemImg3: adidasEliteX3,
    imgAlt: "Adidas Elite X CrazyFast FG",
    discount: "20% Off",
    itemName: "Adidas X Elite X CrazyFast FG",
    description: "Firm Ground High Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "Speed you didn't see coming. With translucent design and lightweight performance, the X CrazyFast delivers game-changing pace. CrazyFast is the cleat that's always one move away from leaving defenders in your dust. This cleat is loaded with adidas tech to achieve peak speed cleat design: Xtra light Floating Tongue, Xtra light Laces and Xtra light Sockliner. Add it up, X CrazyFast (175 grams for a men's US size 9) is designed for ultra-pacey play and giving you the edge you need. Achieve a streamlined approach on the pitch with AEROPACITY Speedskin+, a SL (Super Light) single-layer monomesh covered by single-layer, low-opacity TPU film, which offers maximum second skin feel and a super lightweight experience.",
    itemPrice: "$300",
    quantity: 1,
    size: 9,
    id: 3,
  },
  {
    itemImg: academyNikeTempo,
    itemImg1: academyNikeTempo1,
    itemImg2: academyNikeTempo2,
    itemImg3: academyNikeTempo3,
    imgAlt: "Nike Tiempo Academy Cleat",
    discount: "20% Off",
    itemName: "Nike Tiempo Academy FG",
    description: "Firm Ground Low Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "Nike Tiempo Legend 9 Academy FG/MG Shadow Pack (FA22) 1 OF OUR LIGHTEST LEGENDS EVER. 1 of our lightest Tiempos to date, the Nike Tiempo Legend 9 Academy MG lets you go on the offensive with a low-profile design that's reinvented for attackers. The upper has raised textures backed by soft foam pods for precise dribbling, passing and shooting, while studs on the bottom provide traction for quick cuts and sudden stops.",
    itemPrice: "$90",
    quantity: 1,
    size: 9,
    id: 4,
  },
  {
    itemImg: vaporNike,
    itemImg1: vaporNike1,
    itemImg2: vaporNike2,
    itemImg3: vaporNike3,
    imgAlt: "Nike Vapor Cleat",
    discount: "20% Off",
    itemName: "Nike Vapor Zoom XV FG",
    description: "Firm Ground Low Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "The field is yours when you lace up in the Vapor 15 Academy MG. It's loaded with a Zoom Air unit and flexible NikeSkin up top for exceptional touch, so you can dominate in the waning minutes of a match—when it matters most. Fast is in the Air.",
    itemPrice: "$270",
    quantity: 1,
    size: 9,
    id: 5,
  },
  {
    itemImg: nikeLuna,
    itemImg1: nikeLuna1,
    itemImg2: nikeLuna2,
    itemImg3: nikeLuna3,
    imgAlt: "Nike Luna Cleats",
    discount: "20% Off",
    itemName: "Nike Luna Pro Elite ll FG",
    description: "Firm Ground High Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "Obsessed with perfecting your craft? We made this for you. In the middle of the storm, with chaos swirling all around you, you’ve calmly found the final third of the field, thanks to your uncanny mix of on-ball guile and grace. Go finish the job in the Phantom Luna 2 Elite. Revolutionary Nike Gripknit covers the striking area of the cleat while Nike Cyclone 360 traction helps guide your unscripted agility. We design Elite cleats for you and the world’s biggest stars to give you high-level quality, because you demand greatness from yourself and your footwear.",
    itemPrice: "$260",
    quantity: 1,
    size: 9,
    id: 6,
  },
  {
    itemImg: pumaPink,
    itemImg1: pumaPink1,
    itemImg2: pumaPink2,
    itemImg3: pumaPink3,
    imgAlt: "Pink Poison Pink",
    discount: "20% Off",
    itemName: "Puma Poison Pink Ultra FG",
    description: "Firm Ground Low Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "Peace out. See them later. These new Puma ULTRA MATCH firm ground soccer cleats turn seconds into records.The lightweight mesh upper is coated with a thin GripControl layer for decisive ball control.The knitted low-cut collar offers a snug fit around the ankle.Ultra-fast TPU SPEEDPLATE outsole for optimal traction and rapid propulsion on natural grass and longer-bladed artificial grass surfaces.",
    itemPrice: "$170",
    quantity: 1,
    size: 9,
    id: 7,
  },
  {
    itemImg: pumaFuture,
    itemImg1: pumaFuture1,
    itemImg2: pumaFuture2,
    itemImg3: pumaFuture3,
    imgAlt: "Puma Fg Future",
    discount: "20% Off",
    itemName: "Puma Future 7 FG",
    description: "Firm Ground High Top Soccer Cleats FG",
    itemGround: "firm",
    itemInfo:
      "Designed for those who create something out of nothing and make a difference when it matters most, PUMA offers a boot that’s built different.Listen closely: the FUTURE starts now, with you, the playmaker, the difference marker. The FUZIONFIT360 upper dynamically adapts to the shape of your foot, enabling you to cove and create without constraints.As creativity continues to be stifled and coached out of the beautiful game, FUTURE Fits Different. PUMA is here to keep the creative juices flowing on the field.FIT: FUZIONFIT360 upper combined PWRPRINT, PWRTAPE, engineered dual mesh, and stretchy knit for a snug, supportive fit – with 360-degree freedom of movement. FUTURE Fit tech also allows cleat to be worn with or without laces.TOUCH: 3D grip textures are designed to enhance pure control over the ball, allowing you to maximize connective play on each and every touch. AGILITY: Dynamic Motion System outsole amplifies your stability, agility, and traction for unpredictable changes of direction, with or without the ball at your feet.",
    itemPrice: "$220",
    quantity: 1,
    size: 9,
    id: 8,
  },
  {
    itemImg: pumaUltimate,
    itemImg1: pumaUltimate1,
    itemImg2: pumaUltimate2,
    itemImg3: pumaUltimate3,
    imgAlt: "Puma Ultimate",
    discount: "20% Off",
    itemName: "Puma Ultimate FG",
    description: "Firm Ground High Top Soccer Cleats FG",
    itemGround: "firm",
    itemInfo:
      "The PUMA FUTURE is back, and so are the back-heels, stepovers and no-look passes. Inspired by Neymar Jr.’s playing style, the reengineered mid-cut construction combines fit and agility so you can create without constraints throughout the 90 minutes. The FUZIONFIT360 dual mesh upper features supplemental PWRTAPE support for an even more adaptive, even more supportive fit. Stable at the heel and flexible at the forefoot, the second-generation Dynamic Motion System outsole provides traction and agility for unpredictable changes of direction. Free to move. Free to play. Free to create.",
    itemPrice: "$250",
    quantity: 1,
    size: 9,
    id: 9,
  },
  {
    itemImg: mizunoMorelia,
    itemImg1: mizunoMorelia1,
    itemImg2: mizunoMorelia2,
    itemImg3: mizunoMorelia3,
    imgAlt: "Mizuno Morelia",
    discount: "20% Off",
    itemName: "Mizuno Morelia Neo IV FG",
    description: "Firm Ground Low Top Soccer Cleats FG",
    itemGround: "firm",
    itemPrice: "$170",
    itemInfo: "Play with complete freedom in the Mizuno Morelia Pro. This work of art from Mizuno offers its players a barefoot feel out on the pitch, one that creates a pure connection between the foot, field, and ball. Mizuno's design has led to a lightweight speed cleat that provides high levels of touch and control, featuring that traditional leather feel. Designed for play of firm-ground surfaces. This product contains K-leather and is not available for sale or shipment to California. Please see our Terms of Use.",
    quantity: 1,
    size: 9,
    id: 10,
  },
  {
    itemImg: mizunoJapan,
    itemImg1: mizunoJapan1,
    itemImg2: mizunoJapan2,
    itemImg3: mizunoJapan3,
    imgAlt: "Mizuno Japan",
    discount: "20% Off",
    itemName: "Mizuno Morelia Japan Neo IV FG",
    description: "Firm Ground Low Top Soccer Cleats",
    itemGround: "firm",
    itemPrice: "$220",
    itemInfo: "Morelia II - Made in Japan: Lace up with tradition. Signature fit, lightweight benefits, superb flexibility. This heritage look has been the staple of soccer players around the world for 30 years. Handcrafted in Japan, the Morelia II is made of premium kangaroo leather for an unmatched fit and feel.  These boots will make you realize why this classic has never gone out of style. Handmade in Japan and lasted for 24 hours, this heritage soccer boot is expressed with a thoroughly modern update.  Premium Kangaroo leather twinned with a lightweight and ultra-flexible body gives a luxurious barefoot feeling and an unrivaled  fit. History in the making.",
    quantity: 1,
    size: 9,
    id: 11,
  },
  {
    itemImg: skechers,
    itemImg1: skechers1,
    itemImg2: skechers2,
    itemImg3: skechers3,
    imgAlt: "FG Skechers",
    discount: "20% Off",
    itemName: "Skechers SKX 01 FG",
    description: "Firm Ground HIgh Top Soccer Cleats",
    itemGround: "firm",
    itemPrice: "$220",
    itemInfo : "Own the game wearing Skechers SKX 01 Low FG soccer cleats in White/Blue, as endorsed by England and Bayern Munich superstar Harry Kane. Trust your ability, trust your cleats. Designed to provide the perfect touch, the SKX combines an optimized fit with exceptional feel on the ball so you can dictate the play like Kane himself. The seamless FitKnit upper accommodates a range of foot shapes thanks to its lightweight knitted inner layer, while the outer skin provides reinforcement where you need it. For control, there’s PSC, a combination of micro and macro texturing. The micro dots all over the cleat help you manipulate the ball in tight spaces and ensure accurate ground passing. Then, when you’re ready to ping a 60-yard diagonal or unleash a strike on goal, the macro lines add power and swerve. Underfoot, the soleplate features a stabilizing internal chassis, which allows just the right amount of flex for confident movement as you turn and accelerate away. Inside the cleat, a Hyper Burst Pro sockliner offers adaptable cushioning to keep you supported and comfortable throughout the 90 minutes and beyond.",
    quantity: 1,
    size: 9,
    id: 12,
  },
];

export const kidsFgCleatsList = [
  {
    itemImg: adidasProCarbon,
    itemImg1: adidasProCarbon1,
    itemImg2: adidasProCarbon2,
    itemImg3: adidasProCarbon3,
    imgAlt: "Adidas Pro Carbon FG",
    discount: "20% Off",
    itemName: "Adidas Pro Carbon Black FG",
    description: "Firm Ground High Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "The game's all about goals, and these soccer cleats are crafted to find the net. Every. Time. Target perfection in all-new adidas Predator. Deployed on their soft, flexible HybridTouch 2.0 upper, rubber Strikeskin fins add extra grip for unerring finishes. Down below, a full-length Controlplate 2.0 outsole ensures you're in the right place at the right time on firm ground.This product features at least 20% recycled materials. By reusing materials that have already been created, we help to reduce waste and our reliance on finite resources and reduce the footprint of the products we make.",
    itemPrice: "$170",
    quantity: 1,
    size: 9,
    id: 1,
  },
  {
    itemImg: adidasCrazyFast,
    itemImg1: adidasCrazyFast1,
    itemImg2: adidasCrazyFast2,
    itemImg3: adidasCrazyFast3,
    imgAlt: "Adidas Crazy Fast",
    discount: "20% Off",
    itemName: "Adidas X CrazyFast FG",
    description: "Firm Ground High Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "Celebrate a soccer genius in the colors of his world champion team. Looking slick with a semi-translucent Aeropacity Speedskin upper dressed in Argentina's blue and white, these X Crazyfast Messi cleats include reinforcements only where they're needed. An adidas PRIMEKNIT collar straps you in and extra forefoot studs on the Speedframe outsole help you spark mayhem on firm ground.",
    itemPrice: "$260",
    quantity: 1,
    size: 9,
    id: 2,
  },
  {
    itemImg: academyNikeTempo,
    itemImg1: academyNikeTempo1,
    itemImg2: academyNikeTempo2,
    itemImg3: academyNikeTempo3,
    imgAlt: "Nike Tiempo Academy Cleat",
    discount: "20% Off",
    itemName: "Nike Tiempo Academy FG",
    description: "Firm Ground Low Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "Nike Tiempo Legend 9 Academy FG/MG Shadow Pack (FA22) 1 OF OUR LIGHTEST LEGENDS EVER. 1 of our lightest Tiempos to date, the Nike Tiempo Legend 9 Academy MG lets you go on the offensive with a low-profile design that's reinvented for attackers. The upper has raised textures backed by soft foam pods for precise dribbling, passing and shooting, while studs on the bottom provide traction for quick cuts and sudden stops.",
    itemPrice: "$90",
    quantity: 1,
    size: 9,
    id: 3,
  },
  {
    itemImg: mizunoMorelia,
    itemImg1: mizunoMorelia1,
    itemImg2: mizunoMorelia2,
    itemImg3: mizunoMorelia3,
    imgAlt: "Mizuno Morelia",
    discount: "20% Off",
    itemName: "Mizuno Morelia Neo IV FG",
    description: "Firm Ground Low Top Soccer Cleats FG",
    itemGround: "firm",
    itemPrice: "$170",
    quantity: 1,
    size: 9,
    id: 4,
  },
];
// Indoor Cleat List Section

//This creates the list of items that are imported into the rest of the websites pages
export const indoorCleatItemList = [
  {
    itemImg: pumaUltraIndoor,
    itemImg1: pumaUltraIndoor1,
    itemImg2: pumaUltraIndoor2,
    itemImg3: pumaUltraIndoor3,
    imgAlt: "Puma Ultra Indoor",
    discount: "20% Off",
    itemName: "Puma Ultra 1.3 Pro Cage",
    description: "Indoor Low Top Soccer Cleats",
    itemInfo:
      "Leave opponents for dust wearing PUMA Ultra 1.3 Pro Cage soccer shoes in Puma Black/Puma White/Green Glare, featuring a new, lightweight ULTRACut upper for uncatchable speed. Lighter and faster than ever, PUMA Ultra 1.3 Pro Cage soccer shoes combine adaptive woven MATRYXEVO Technology with a microfibre SPEEDCAGE to provide multilayered support during fast movements. MATRYXEVO’s reactive yarns firm up to propel you forwards, while the SPEEDCAGE keeps you stable when you change direction at pace – it’s a complete solution. The extra support also enables weight to be saved at the midfoot, with cut-out windows lightening the load for even more speed. For touch, the popular GripControl Pro coating on the upper returns to give you total command of the ball. Elsewhere, an updated collar and lacing system ensure a comfortable, secure fit, while a durable rubber outsole provides multidirectional traction.",
    itemGround: "soft",
    itemPrice: "$65",
    quantity: 1,
    id: 1,
  },
  {
    itemImg: tiempoLegendIndoor,
    itemImg1: tiempoLegendIndoor1,
    itemImg2: tiempoLegendIndoor2,
    itemImg3: tiempoLegendIndoor3,
    imgAlt: "Tiempo Legend Indoor",
    discount: "20% Off",
    itemName: "Nike Tiempo Legend X",
    description: "Indoor Low Top Soccer Cleats",
    itemInfo:
      "Always innovative, even Legends find ways to evolve. Those are the demands of the game. Designed to raise your play to the next level, the latest iteration of these Academy soccer shoes have all-new FlyTouch Lite engineered leather. Softer than natural leather, this conforms to your foot – without overstretch – so you can dictate the pace of your game, all game. With sleek design, this is the lightest Tiempo to date. The Legend 10 is for players of all positions, too, whether you’re driving a pinpoint pass through the defense, going for goal or tracking back to stop a would-be goal. Check out those microdots on the upper. They amplify touch zones for shooting, dribbling, and passing. They make for a sleeker look while taking out the extra padding. Even better, they don't sacrifice the ball control you need on the field. Nike shaved down the foam pods from the Tiempo 9, so your foot can get even closer to the ball when it’s in your control. Instead, Nike molded the lines into the cleat.",
    itemGround: "soft",
    itemPrice: "$55",
    quantity: 1,
    id: 2,
  },
  {
    itemImg: tiempoAcademyIndoor,
    itemImg1: tiempoAcademyIndoor1,
    itemImg2: tiempoAcademyIndoor2,
    itemImg3: tiempoAcademyIndoor3,
    imgAlt: "Nike Tiempo Academy Indoor",
    discount: "20% Off",
    itemName: "Nike Tiempo Legend X Academy IC",
    description: "Indoor Low Top Soccer Cleats",
    itemInfo:
      "Make the game look easy wearing Nike Tiempo Legend X Academy IC football shoes in Lemonade/Black/Mtlc Gold Coin, featuring a moulded, engineered upper for effortless touch. Created for confident, positive play, the Tiempo Legend X is the sleekest, most attacking Tiempo yet. Wherever you find yourself on the pitch, the soft FlyTouch Lite upper provides the comfort and close feel on the ball you need to stay calm and in control. We’re talking shimmies in your own box, passes under pressure in midfield, and perfect finesse shots up front. Composure stats maxed out. Its fully engineered design is softer than natural leather and features streamlined foam pods, smoothed down into the moulded lines of the shoe to dampen your touch just the right amount. The material won’t overstretch and requires zero break-in time. Basically, you get all the benefits of leather with none of the downsides. 3D microdot touch zones amplify control, while a microfibre lining combines with interior padding at the heel to keep you locked in and minimise irritation. A springy, cushioning midsole provides impact absorption as you shift through the gears, with low-profile traction enabling quick changes of direction and helping you accelerate away.",
    itemGround: "soft",
    itemPrice: "$75",
    quantity: 1,
    id: 3,
  },
  {
    itemImg: nikeSuperflyIndoor,
    itemImg1: nikeSuperflyIndoor1,
    itemImg2: nikeSuperflyIndoor2,
    itemImg3: nikeSuperflyIndoor3,
    imgAlt: "NIke Superfly Indoor",
    discount: "20% Off",
    itemName: "Nike Mercurial Superfly Academy",
    description: "Indoor High Top Soccer Cleats",
    itemInfo:
      "Make the game look easy wearing Nike Tiempo Legend X Academy IC football shoes in Lemonade/Black/Mtlc Gold Coin, featuring a moulded, engineered upper for effortless touch. Created for confident, positive play, the Tiempo Legend X is the sleekest, most attacking Tiempo yet. Wherever you find yourself on the pitch, the soft FlyTouch Lite upper provides the comfort and close feel on the ball you need to stay calm and in control. We’re talking shimmies in your own box, passes under pressure in midfield, and perfect finesse shots up front. Composure stats maxed out. Its fully engineered design is softer than natural leather and features streamlined foam pods, smoothed down into the moulded lines of the shoe to dampen your touch just the right amount. The material won’t overstretch and requires zero break-in time. Basically, you get all the benefits of leather with none of the downsides. 3D microdot touch zones amplify control, while a microfibre lining combines with interior padding at the heel to keep you locked in and minimise irritation. A springy, cushioning midsole provides impact absorption as you shift through the gears, with low-profile traction enabling quick changes of direction and helping you accelerate away.",
    itemGround: "soft",
    itemPrice: "$100",
    quantity: 1,
    id: 4,
  },
  {
    itemImg: nikeAirVaporIndoor,
    itemImg1: nikeAirVaporIndoor1,
    itemImg2: nikeAirVaporIndoor2,
    itemImg3: nikeAirVaporIndoor3,
    imgAlt: "Nike Air Vapor Indoor",
    discount: "20% Off",
    itemName: "Nike Air Zoom Mercurial Vapor XV",
    description: "Indoor Low Top Soccer Cleats",
    itemInfo:
      "We make Academy shoes for those looking to take their game to the next level. Injected with pastel pinks, this special edition of the Superfly 9 is inspired by what the pros wear for the world’s biggest tournaments, where their brilliance takes center stage. Add in an Air Zoom unit for speed, and you have a shoe ready for your moments of greatness.",
    itemGround: "soft",
    itemPrice: "$85",
    quantity: 1,
    id: 5,
  },
  {
    itemImg: nikeAirZoomTurqIndoor,
    itemImg1: nikeAirZoomTurqIndoor1,
    itemImg2: nikeAirZoomTurqIndoor2,
    itemImg3: nikeAirZoomTurqIndoor3,
    imgAlt: "Nike Air Zoom Indoor",
    discount: "20% Off",
    itemName: "Nike Air Zoom Mercurial Turquoise",
    description: "Indoor Low Top Soccer Cleats",
    itemGround: "soft",
    itemInfo:
      "We make Academy shoes for those looking to take their game to the next level. Injected with pastel pinks, this special edition of the Superfly 9 is inspired by what the pros wear for the world’s biggest tournaments, where their brilliance takes center stage. Add in an Air Zoom unit for speed, and you have a shoe ready for your moments of greatness.",
    itemPrice: "$85",
    quantity: 1,
    id: 6,
  },
  {
    itemImg: adidasCrazyFastIndoor,
    itemImg1: adidasCrazyFastIndoor1,
    itemImg2: adidasCrazyFastIndoor2,
    itemImg3: adidasCrazyFastIndoor3,
    imgAlt: "adidas crazy fast ",
    discount: "20% Off",
    itemName: "Adidas X CrazyFast 3",
    description: "Indoor Low Top Soccer Cleats",
    itemInfo: "Product description adidas X Crazyfast.3 IN Shoes These adidas X football boots are made for quick movements on flat, indoor surfaces. They have a soft EVA midsole for comfort and a rubber outsole with biting grip. The lightweight, coated textile upper includes added layers only where they´re needed. The flat-knit collar ensures lockdown. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.",
    itemGround: "soft",
    itemPrice: "$80",
    quantity: 1,
    id: 7,
  },
  {
    itemImg: adidasAccuracyIndoor,
    itemImg1: adidasAccuracyIndoor1,
    itemImg2: adidasAccuracyIndoor2,
    itemImg3: adidasAccuracyIndoor3,
    imgAlt: "Adidas Accuracy Indoor",
    discount: "20% Off",
    itemName: "Adidas Predator Accuracy",
    description: "Indoor Low Top Soccer Cleats",
    itemGround: "soft",
    itemInfo: "Top corner. Bottom corner. All the corners. adidas Predator Accuracy is crafted for goalscoring, so you know the ball will find the net. The fun's in choosing how it gets there. These soccer shoes have a breathable mesh forefoot that's finished with a durable toe cap to guard against wear. The grippy, non-marking rubber outsole ensures you dominate on indoor courts.",
    itemPrice: "$50",
    quantity: 1,
    id: 8,
  },
  {
    itemImg: adidasClubIndoor,
    itemImg1: adidasClubIndoor1,
    itemImg2: adidasClubIndoor2,
    itemImg3: adidasClubIndoor3,
    imgAlt: "Adidas Club Indoor",
    discount: "20% Off",
    itemName: "Adidas Predator Club Sala IN",
    description: "Indoor Low Top Soccer Cleats",
    itemGround: "soft",
    itemInfo: "Score from anywhere wearing adidas Predator Club Sala IN futsal shoes in Core Black/Carbon/Core Black, the most goal-hungry Predator yet with a lighter-than-ever design.The goal rush. It’s the best feeling in soccer. And now it’s yours, whenever you like. Crafted for supreme confidence, the new Predator allows you to control the game in the most decisive way: by scoring at will. It’s a next-gen shoe for next-gen players. Players who aren’t bound by tradition or position. Players who turn pressure into focus. See Jude Bellingham striding into space and slotting for fun, like he’s playing in his back yard? That’s the Predator mindset. The upgraded design brings goals to everyone, providing unerring accuracy so you produce the goods when it counts. The soft upper combines suede and mesh to offer a cushioned touch while maintaining a structured fit for comfort and support. Underneath, the grippy rubber outsole with low-profile traction keeps you agile on the court. And yes, these latest Preds are lighter than ever, giving an on-foot feel that practically begs you to play positive soccer. Well then, what you got?",
    itemPrice: "$55",
    quantity: 1,
    id: 9,
  },
];

export const kidsIndoorCleatsList = [
  {
    itemImg: pumaUltraIndoor,
    itemImg1: pumaUltraIndoor1,
    itemImg2: pumaUltraIndoor2,
    itemImg3: pumaUltraIndoor3,
    imgAlt: "Puma Ultra Indoor",
    discount: "20% Off",
    itemName: "Puma Ultra 1.3 Pro Cage",
    description: "Indoor Low Top Soccer Cleats",
    itemInfo:
      "Leave opponents for dust wearing PUMA Ultra 1.3 Pro Cage soccer shoes in Puma Black/Puma White/Green Glare, featuring a new, lightweight ULTRACut upper for uncatchable speed. Lighter and faster than ever, PUMA Ultra 1.3 Pro Cage soccer shoes combine adaptive woven MATRYXEVO Technology with a microfibre SPEEDCAGE to provide multilayered support during fast movements. MATRYXEVO’s reactive yarns firm up to propel you forwards, while the SPEEDCAGE keeps you stable when you change direction at pace – it’s a complete solution. The extra support also enables weight to be saved at the midfoot, with cut-out windows lightening the load for even more speed. For touch, the popular GripControl Pro coating on the upper returns to give you total command of the ball. Elsewhere, an updated collar and lacing system ensure a comfortable, secure fit, while a durable rubber outsole provides multidirectional traction.",
    itemGround: "soft",
    itemPrice: "$65",
    quantity: 1,
    id: 1,
  },
  {
    itemImg: tiempoLegendIndoor,
    itemImg1: tiempoLegendIndoor1,
    itemImg2: tiempoLegendIndoor2,
    itemImg3: tiempoLegendIndoor3,
    imgAlt: "Tiempo Legend Indoor",
    discount: "20% Off",
    itemName: "Nike Tiempo Legend X",
    description: "Indoor Low Top Soccer Cleats",
    itemGround: "soft",
    itemInfo:
      "Always innovative, even Legends find ways to evolve. Those are the demands of the game. Designed to raise your play to the next level, the latest iteration of these Academy soccer shoes have all-new FlyTouch Lite engineered leather. Softer than natural leather, this conforms to your foot – without overstretch – so you can dictate the pace of your game, all game. With sleek design, this is the lightest Tiempo to date. The Legend 10 is for players of all positions, too, whether you’re driving a pinpoint pass through the defense, going for goal or tracking back to stop a would-be goal. Check out those microdots on the upper. They amplify touch zones for shooting, dribbling, and passing. They make for a sleeker look while taking out the extra padding. Even better, they don't sacrifice the ball control you need on the field. Nike shaved down the foam pods from the Tiempo 9, so your foot can get even closer to the ball when it’s in your control. Instead, Nike molded the lines into the cleat.",
    itemPrice: "$55",
    quantity: 1,
    id: 2,
  },
  {
    itemImg: tiempoAcademyIndoor,
    itemImg1: tiempoAcademyIndoor1,
    itemImg2: tiempoAcademyIndoor2,
    itemImg3: tiempoAcademyIndoor3,
    imgAlt: "Nike Tiempo Academy Indoor",
    discount: "20% Off",
    itemName: "Nike Tiempo Legend X Academy IC",
    description: "Indoor Low Top Soccer Cleats",
    itemGround: "soft",

    itemPrice: "$75",
    quantity: 1,
    id: 3,
  },
  {
    itemImg: adidasCrazyFastIndoor,
    itemImg1: adidasCrazyFastIndoor1,
    itemImg2: adidasCrazyFastIndoor2,
    itemImg3: adidasCrazyFastIndoor3,
    imgAlt: "adidas crazy fast ",
    discount: "20% Off",
    itemName: "Adidas X CrazyFast 3",
    description: "Indoor Low Top Soccer Cleats",
    itemGround: "soft",
    itemInfo:
      "Product description adidas X Crazyfast.3 IN Shoes These adidas X football boots are made for quick movements on flat, indoor surfaces. They have a soft EVA midsole for comfort and a rubber outsole with biting grip. The lightweight, coated textile upper includes added layers only where they´re needed. The flat-knit collar ensures lockdown. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.",
    itemPrice: "$80",
    quantity: 1,
    id: 7,
  },
  {
    itemImg: adidasAccuracyIndoor,
    itemImg1: adidasAccuracyIndoor1,
    itemImg2: adidasAccuracyIndoor2,
    itemImg3: adidasAccuracyIndoor3,
    imgAlt: "Adidas Accuracy Indoor",
    discount: "20% Off",
    itemName: "Adidas Predator Accuracy",
    description: "Indoor Low Top Soccer Cleats",
    itemGround: "soft",
    itemPrice: "$50",
    quantity: 1,
    id: 8,
  },
  {
    itemImg: adidasClubIndoor,
    itemImg1: adidasClubIndoor1,
    itemImg2: adidasClubIndoor2,
    itemImg3: adidasClubIndoor3,
    imgAlt: "Adidas Club Indoor",
    discount: "20% Off",
    itemName: "Adidas Predator Club Sala IN",
    description: "Indoor Low Top Soccer Cleats",
    itemInfo: "Score from anywhere wearing adidas Predator Club Sala IN futsal shoes in Core Black/Carbon/Core Black, the most goal-hungry Predator yet with a lighter-than-ever design.The goal rush. It’s the best feeling in soccer. And now it’s yours, whenever you like. Crafted for supreme confidence, the new Predator allows you to control the game in the most decisive way: by scoring at will. It’s a next-gen shoe for next-gen players. Players who aren’t bound by tradition or position. Players who turn pressure into focus. See Jude Bellingham striding into space and slotting for fun, like he’s playing in his back yard? That’s the Predator mindset. The upgraded design brings goals to everyone, providing unerring accuracy so you produce the goods when it counts. The soft upper combines suede and mesh to offer a cushioned touch while maintaining a structured fit for comfort and support. Underneath, the grippy rubber outsole with low-profile traction keeps you agile on the court. And yes, these latest Preds are lighter than ever, giving an on-foot feel that practically begs you to play positive soccer. Well then, what you got?",
    itemGround: "soft",
    itemPrice: "$55",
    quantity: 1,
    id: 9,
  },
];

export const womansFgCleatList = [
  {
    itemImg: nikeLuna,
    itemImg1: nikeLuna1,
    itemImg2: nikeLuna2,
    itemImg3: nikeLuna3,
    imgAlt: "Nike Luna Cleats",
    discount: "20% Off",
    itemName: "Nike Luna Pro Elite ll FG",
    description: "Firm Ground High Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "Obsessed with perfecting your craft? We made this for you. In the middle of the storm, with chaos swirling all around you, you’ve calmly found the final third of the field, thanks to your uncanny mix of on-ball guile and grace. Go finish the job in the Phantom Luna 2 Elite. Revolutionary Nike Gripknit covers the striking area of the cleat while Nike Cyclone 360 traction helps guide your unscripted agility. We design Elite cleats for you and the world’s biggest stars to give you high-level quality, because you demand greatness from yourself and your footwear.",
    itemPrice: "$260",
    quantity: 1,
    size: 9,
    id: 6,
  },
  {
    itemImg: pumaPink,
    itemImg1: pumaPink1,
    itemImg2: pumaPink2,
    itemImg3: pumaPink3,
    imgAlt: "Pink Poison Pink",
    discount: "20% Off",
    itemName: "Puma Poison Pink Ultra FG",
    description: "Firm Ground Low Top Soccer Cleats",
    itemGround: "firm",
    itemInfo:
      "Peace out. See them later. These new Puma ULTRA MATCH firm ground soccer cleats turn seconds into records.The lightweight mesh upper is coated with a thin GripControl layer for decisive ball control.The knitted low-cut collar offers a snug fit around the ankle.Ultra-fast TPU SPEEDPLATE outsole for optimal traction and rapid propulsion on natural grass and longer-bladed artificial grass surfaces.",
    itemPrice: "$170",
    quantity: 1,
    size: 9,
    id: 7,
  },
  {
    itemImg: pumaFuture,
    itemImg1: pumaFuture1,
    itemImg2: pumaFuture2,
    itemImg3: pumaFuture3,
    imgAlt: "Puma Fg Future",
    discount: "20% Off",
    itemName: "Puma Future 7 FG",
    description: "Firm Ground High Top Soccer Cleats FG",
    itemGround: "firm",
    itemInfo:
      "Designed for those who create something out of nothing and make a difference when it matters most, PUMA offers a boot that’s built different.Listen closely: the FUTURE starts now, with you, the playmaker, the difference marker. The FUZIONFIT360 upper dynamically adapts to the shape of your foot, enabling you to cove and create without constraints.As creativity continues to be stifled and coached out of the beautiful game, FUTURE Fits Different. PUMA is here to keep the creative juices flowing on the field.FIT: FUZIONFIT360 upper combined PWRPRINT, PWRTAPE, engineered dual mesh, and stretchy knit for a snug, supportive fit – with 360-degree freedom of movement. FUTURE Fit tech also allows cleat to be worn with or without laces.TOUCH: 3D grip textures are designed to enhance pure control over the ball, allowing you to maximize connective play on each and every touch. AGILITY: Dynamic Motion System outsole amplifies your stability, agility, and traction for unpredictable changes of direction, with or without the ball at your feet.",
    itemPrice: "$220",
    quantity: 1,
    size: 9,
    id: 8,
  },
  {
    itemImg: pumaUltimate,
    itemImg1: pumaUltimate1,
    itemImg2: pumaUltimate2,
    itemImg3: pumaUltimate3,
    imgAlt: "Puma Ultimate",
    discount: "20% Off",
    itemName: "Puma Ultimate FG",
    description: "Firm Ground High Top Soccer Cleats FG",
    itemGround: "firm",
    itemInfo: "The PUMA FUTURE is back, and so are the back-heels, stepovers and no-look passes. Inspired by Neymar Jr.’s playing style, the reengineered mid-cut construction combines fit and agility so you can create without constraints throughout the 90 minutes. The FUZIONFIT360 dual mesh upper features supplemental PWRTAPE support for an even more adaptive, even more supportive fit. Stable at the heel and flexible at the forefoot, the second-generation Dynamic Motion System outsole provides traction and agility for unpredictable changes of direction. Free to move. Free to play. Free to create.",
    itemPrice: "$250",
    quantity: 1,
    size: 9,
    id: 9,
  },
  {
    itemImg: mizunoJapan,
    itemImg1: mizunoJapan1,
    itemImg2: mizunoJapan2,
    itemImg3: mizunoJapan3,
    imgAlt: "Mizuno Japan",
    discount: "20% Off",
    itemName: "Mizuno Morelia Japan Neo IV FG",
    description: "Firm Ground Low Top Soccer Cleats",
    itemGround: "firm",
    itemPrice: "$220",
    quantity: 1,
    size: 9,
    id: 11,
  },
];

export const womansIndoorCleatList = [
  {
    itemImg: nikeAirVaporIndoor,
    itemImg1: nikeAirVaporIndoor1,
    itemImg2: nikeAirVaporIndoor2,
    itemImg3: nikeAirVaporIndoor3,
    imgAlt: "Nike Air Vapor Indoor",
    discount: "20% Off",
    itemName: "Nike Air Zoom Mercurial Vapor XV",
    description: "Indoor Low Top Soccer Cleats",
    itemGround: "soft",
    itemInfo:
      "We make Academy shoes for those looking to take their game to the next level. Injected with pastel pinks, this special edition of the Superfly 9 is inspired by what the pros wear for the world’s biggest tournaments, where their brilliance takes center stage. Add in an Air Zoom unit for speed, and you have a shoe ready for your moments of greatness.",
    itemPrice: "$85",
    quantity: 1,
    id: 5,
  },
  {
    itemImg: nikeAirZoomTurqIndoor,
    itemImg1: nikeAirZoomTurqIndoor1,
    itemImg2: nikeAirZoomTurqIndoor2,
    itemImg3: nikeAirZoomTurqIndoor3,
    imgAlt: "Nike Air Zoom Indoor",
    discount: "20% Off",
    itemName: "Nike Air Zoom Mercurial Turquoise",
    description: "Indoor Low Top Soccer Cleats",
    itemGround: "soft",
    itemInfo:
      "We make Academy shoes for those looking to take their game to the next level. Injected with pastel pinks, this special edition of the Superfly 9 is inspired by what the pros wear for the world’s biggest tournaments, where their brilliance takes center stage. Add in an Air Zoom unit for speed, and you have a shoe ready for your moments of greatness.",
    itemPrice: "$85",
    quantity: 1,
    id: 6,
  },
  {
    itemImg: adidasAccuracyIndoor,
    itemImg1: adidasAccuracyIndoor1,
    itemImg2: adidasAccuracyIndoor2,
    itemImg3: adidasAccuracyIndoor3,
    imgAlt: "Adidas Accuracy Indoor",
    discount: "20% Off",
    itemName: "Adidas Predator Accuracy",
    description: "Indoor Low Top Soccer Cleats",
    itemInfo:
      "Top corner. Bottom corner. All the corners. adidas Predator Accuracy is crafted for goalscoring, so you know the ball will find the net. The fun's in choosing how it gets there. These soccer shoes have a breathable mesh forefoot that's finished with a durable toe cap to guard against wear. The grippy, non-marking rubber outsole ensures you dominate on indoor courts.",
    itemGround: "soft",
    itemPrice: "$50",
    quantity: 1,
    id: 8,
  },
];

export const jerseyItemList = [
  {
    itemImg: acMilanJersey,
    itemImg2: acMilanJersey1,
    imgAlt: "Ac Milan Jersey",
    itemName: "Ac Milan Jersey",
    description: "Ac Milan Jersey",
    itemGround: "jersey",
    itemInfo: "Back Milan as they look to get their hands on a 20th Scudetto with the PUMA AC Milan 24/25 Authentic Home Jersey in For All Time Red/PUMA Black. Worn by Theo Hernandez, Christian Pulisic, Yunis Musah, Noah Okafor and the rest of the first-team squad at the pinnacle of the club game, the 2024/25 home jersey shows your undying support for the Rossoneri as they compete for Serie A and Champions League glory. Returning to one of world soccer’s most iconic kit designs, the classic red and black stripes are enhanced with understated white accents to complete a heritage look, and a sign-off at the back neck celebrates the club’s 125th-anniversary. Made from ULTRAWEAVE fabric – the lightest material developed in PUMA’s history – you can play without restriction throughout the 90 minutes. Mesh fabric in high-heat areas promotes airflow, while moisture-absorbing dryCELL technology wicks sweat away from your skin to keep you cool, dry and comfortable, whether you’re running laps of the field to improve your cardio in preseason training, fighting for every ball in intense competitive games or cheering the team on in high-stakes European fixtures. With a main body made from 100% recycled polyester, this jersey cuts down on the production of plastic waste and helps you do your bit for the environment.",
    itemPrice: "$90",
    quantity: 1,
    id: 1,
  },
  {
    itemImg: angelCityJersey,
    itemImg2: angelCityJersey1,
    imgAlt: "Angel City Jersey",
    itemName: "Angel City jersey",
    description: "Angel City Jersey",
    itemGround: "jersey",
    itemInfo: "Back Angel City as they set their sights on a first National Women’s Soccer League title with the Nike Angel City FC 2024 Replica Home Jersey in Black/Anthracite. Based on the kits worn by Ali Riley, Jun Endo, Rocky Rodriguez, Christen Press and the rest of the first-team squad at the pinnacle of US soccer, the 2024 home jersey shows your undying support for Angel City as they compete for NWSL glory. The smart Black and Anthracite home colors are enhanced with a bold textured wing design and “VOLEMOS” (let’s fly) lettering at the right hip to challenge Angel City FC fans to soar just like their favourite players on the field. The club crest – inspired by the iconic palm trees that line the LA coastline and the local Southern California red-tailed Hawk – is emblazoned over your heart so you can proudly display your passion wherever you go. The ultra-lightweight, flexible weave provides full freedom of movement and keeps you quick on your feet, so you can dribble past defenders, make last-ditch game-winning tackles and relentlessly pound up and down the touchline for 90 minutes with ease. High-performance Dri-FIT fabric is breathable and moisture-wicking, so you stay cool, dry and comfortable in any situation, whether you’re pushing past your limits in a competitive game or cheering your club on from the stands.",
    itemPrice: "$90",
    quantity: 1,
    id: 2,
  },
  {
    itemImg: manCityJersey,
    itemImg2: manCityJersey1,
    imgAlt: "Manchester City Jersey",
    itemName: "Manchester City Jersey",
    description: "Manchester City Jersey",
    itemGround: "jersey",
    itemInfo: "Back the Cityzens in their hunt for domestic and European glory with the PUMA Kids Manchester City FC 23/24 Home Jersey in Team Light Blue/PUMA White, a high-performance jersey that helps you to show your support in the stands of the Etihad and on the training field.The classic sky blue base is overlaid with retro tonal stripes reminiscent of the 2003/04 home strip that was worn by the likes of Sylvain Distin, Richard Dunne, Nicolas Anelka and Shaun Wright-Phillips in the club’s very first season at the Etihad Stadium. Blue accents at the V-neck collar add a flourish, and the leaping PUMA logo evokes decades of sporting success. The Manchester City crest is proudly emblazoned over your left chest, so everyone can see which team your heart belongs to. Mesh panels in high-heat areas promote airflow, while moisture-absorbing dryCELL technology wicks sweat away from your skin to keep you cool, dry and comfortable, whether you’re running laps of the field to improve your cardio in preseason training, pushing past your limits in intense competitive games or cheering the team on from the Etihad stands. With a main body made from 100% recycled polyester, this jersey cuts down on the production of plastic waste and helps you to do your bit for the environment.",
    itemPrice: "$90",
    quantity: 1,
    id: 3,
  },
  {
    itemImg: parisJersey,
    itemImg2: parisJersey1,
    imgAlt: "Paris Saint Germain Jersey",
    itemName: "Paris Saint Germain Jersey",
    description: "Paris Saint Germain Jersey",
    itemGround: "jersey",
    itemInfo: "Back the most stylish club in world soccer as they set their sights on their first Champions League title with the Jordan x PSG 23/24 Dri-Fit Stadium Third Short-Sleeved Jersey in Anthracite/Black/Stone, a high-performance jersey that helps you to show your support wherever you go. Designed in collaboration with Jordan, the 2023/24 third kit blends sportswear with streetwear to keep you looking fresh on the field, in the stands and on the streets. A smart Anthracite and Stone base is enhanced with the legendary Air Jordan Elephant print to create an eye-catching look, and the iconic Jumpman logo adds a stylish flourish. The PSG crest over your heart proudly declares your undying passion for Les Parisiens. Moisture-wicking Dri-FIT technology draws sweat away from the skin to keep you cool, dry and comfortable no matter how hard you push on the field, whether you’re pounding up and down the touchline, dribbling past the opposition or fighting to come out on top in an intense midfield battle. Stretchy, lightweight fabric allows you to move without restriction, and a fast-drying finish means that you can wash and wear right away, which is ideal for short-notice practice or games.",
    itemPrice: "$90",
    quantity: 1,
    id: 4,
  },
];

export const keeperItemList = [
  {
    itemImg: adidasProGloves1,
    itemImg2: adidasProGloves2,
    itemImg3: adidasProGloves3,
    imgAlt: "Adidas Pro Gloves",
    itemName: "Adidas Pro Gloves",
    description: "Adidas Goalkeeper Gloves",
    itemGround: "gloves",
    itemInfo: "Deliver dependable performances between the sticks with adidas Tiro Pro goalkeeper gloves in Black/White/Iron Met, featuring the popular URG 2.0 latex foam for consistent, reliable grip. Designed for all-round performance, the adidas Tiro Pro goalkeeper glove offers superior grip and shock absorption in wet and dry conditions. The glove’s palm boasts URG 2.0 latex foam which strikes the perfect balance between grip and durability, making it the preferred option for many keepers. A rolled finger construction provides a snug fit for improved control, combining with a latex wrist strap to ensure a snug, comfortable fit.",
    itemPrice: "$70",
    quantity: 1,
    id: 1,
  },
  {
    itemImg: adidasXGloves1,
    itemImg2: adidasXGloves2,
    itemImg3: adidasXGloves3,
    imgAlt: "Adidas X Gloves",
    itemName: "Adidas X Gloves",
    description: "Adidas Goalkeeper Gloves",
    itemGround: "gloves",
    itemInfo: "This is Adidas' Ultra Grip latex which is used by professional goalkeepers because of it superior grip. URG 2.0 latex combines grip and shock absorption to make sure the ball sticks in the hand.",
    itemPrice: "$80",
    quantity: 1,
    id: 2,
  },
  {
    itemImg: nikeGripGloves1,
    itemImg2: nikeGripGloves2,
    itemImg3: nikeGripGloves3,
    imgAlt: "Nike Grip Gloves",
    itemName: "Nike Grip Gloves",
    description: "Nike Goalkeeper Gloves",
    itemGround: "gloves",
    itemPrice: "$70",
    itemInfo: "Be the deciding factor wearing Nike GK Grip 3 goalkeeper gloves in Yellow Strike/White/Black, featuring Grip3 technology for superior control on the ball. The Nike GK Grip 3 goalkeeper glove features wrapped elements on the palm and foam cushioning to ensure excellent all-round grip and shock absorption. The glove has a hybrid Grip3 cut which has rollfinger elements that wrap around the thumb, forefinger and little finger to prevent seams from getting between your fingers. The wraparound wristband provides a comfortable fit that is easy to adjust on the field and sits lower on the wrist to allow more natural hand movement.",
    quantity: 1,
    id: 3,
  },
  {
    itemImg: uhGloves1,
    itemImg2: uhGloves2,
    itemImg3: uhGloves3,
    imgAlt: "Uhlsport Supergrip Gloves",
    itemName: "Uhlsport Supergrip Gloves",
    description: "Uhlsport Goalkeeper Gloves",
    itemInfo: "Let nothing past wearing Uhlsport Powerline Supergrip+ HN Horizon goalkeeper gloves in White/Navy/Fluo Yellow. Constructed to help you defend your line at all costs, Uhlsport Powerline Supergrip+ gloves feature innovative SUPERGRIP+ foam for elite grip in all conditions. SUPERGRIP+ foam has integrated high-grip elements in the palm, which are designed to raise to the surface when dampened to give extra tackiness to the grip. The Half-Negative cut offers an excellent, close feel to the ball and extended surface area thanks to the wrapped thumb, forefinger, and little finger. The glove also features AIRPRENE on the backhand for long-lasting comfort during play. A backhand REBOUNDZONE helps you clear the danger thanks to the integrated high-rebound foam, which gives power and accuracy to punched clearances.",
    itemGround: "gloves",
    itemPrice: "$180",
    quantity: 1,
    id: 4,
  },
];

export const trainingItemList = [
  {
    itemImg: brazilBall,
    imgAlt: "Brazil Soccer Ball",
    itemName: "Brazil Soccer Ball",
    description: "Soccer Ball",
    itemInfo: "Aerosculpt technology uses molded grooves to disrupt airflow across the ball for less drag and more stable flight Textured casing improves grip and feel, Reinforced rubber bladder helps maintain air pressure and shape", 
    itemGround: "ball",
    itemPrice: "$35",
    quantity: 1,
    id: 1,
  },
  {
    itemImg: championsTrainingBall,
    imgAlt: "Champions League Soccer Ball",
    itemName: "Champions League Soccer Ball",
    description: "Soccer Ball",
    itemGround: "ball",
    itemInfo: "Prepare for the knockout stages of the 2023/24 UEFA Champions League season with the adidas UCL Training in White/Glory Blue/Flash Orange. The adidas Champions League Training ball is a robust replica of the one used in the Champions League final, perfect for tough training sessions. Inspired by England’s national animal, striking lion artwork takes centre stage across the surface of the ball as a tribute to the hosts of the 2023/24 UCL final. The vibrant contrasting colors combine with bold star-shaped panels to ensure that the ball stands out against the field, so you can track it come rain or shine. A sturdy machine-stitched shell offers superb durability, and a textured surface gives you the grip you need to catch the ball perfectly for maximum speed and power. The TPU cover provides a consistent contact zone, so you can hone your touch and technical skills on the training field. Made with a hard-wearing butyl bladder, this ball retains air through the most high-intensity play.",
    itemPrice: "$45",
    quantity: 1,
    id: 2,
  },
  {
    itemImg: mlsBall,
    imgAlt: "Mls Soccer Ball",
    itemName: "Mls Soccer Ball",
    description: "Soccer Ball",
    itemGround: "ball",
    itemInfo: "Show your passion for MLS with the adidas MLS Club in White/Solar Red/Glory Blue. Based on the balls used for elite games in the top tier of US soccer, the MLS Club ball allows you to practice and play like the very best. Designed to commemorate the 1994 FIFA World Cup – where the United States played host to the most iconic national teams and players in the world, including the likes of Romario, Hristo Stoichkov, Roberto Baggio and Dennis Bergkamp – the white base is overlaid with vibrant multicolored graphics that evoke the eye-catching kits that were in fashion at the time. Official MLS branding ensures that you feel like a pro with the ball at your feet. A tough machine-stitched shell provides the robustness to last through relentless use, and the polyurethane cover offers a consistent contact zone, so you can hone your touch and technical skills on the training field. Designed with a hard-wearing butyl bladder, this ball retains air through the most high-intensity play.",
    itemPrice: "$35",
    quantity: 1,
    id: 3,
  },
  {
    itemImg: mlsComp,
    imgAlt: "Mls Competition Soccer Ball",
    itemName: "Mls Competition Soccer Ball",
    description: "Soccer Ball",
    itemGround: "ball",
    itemInfo: "Show your passion for MLS with the adidas MLS League NFHS in White/Black/Silver Met, this ball guarantees perfect circumference, weight, rebound and water resistance. Based on the balls used for elite games in the top tier of US soccer, the MLS League ball allows you to practice and play like the very best. Designed to commemorate the 1994 FIFA World Cup – where the United States played host to the most iconic national teams and players in the world, including the likes of Romario, Hristo Stoichkov, Roberto Baggio and Dennis Bergkamp – the white base is overlaid with striking abstract graphics that evoke the eye-catching kits that were in fashion at the time. Official MLS branding ensures that you feel like a pro with the ball at your feet. A seamless shell creates a sleek silhouette that reduces air resistance, giving the ball perfect speed and curl in the air, essential for powerful long-range shots and whipped crosses. The TSBE construction offers superb durability and a consistent contact zone, so you can take delicate touches and pass and move with more confidence than ever before. The sturdy butyl bladder can take a beating in intense training sessions and games without losing any air, and a laminated finish on the shell minimizes water uptake to ensure peak performance even in the wet.",
    itemPrice: "$85",
    quantity: 1,
    id: 4,
  },
  {
    itemImg: mlsPro,
    imgAlt: "Mls Pro Soccer Ball",
    itemName: "Mls Pro Soccer Ball",
    description: "Soccer Ball",
    itemGround: "ball",
    itemInfo: "Play like the very best with the adidas MLS Pro in White/Solar Yellow/Power Blue. FIFA Quality Pro certified, this ball guarantees perfect circumference, weight, rebound and water resistance. Used for elite games in the top tier of US soccer, this ball allows you to practice and play like the very best. Designed to commemorate the 1994 FIFA World Cup – where the United States played host to the most iconic national teams and players in the world, including the likes of Romario, Hristo Stoichkov, Roberto Baggio and Dennis Bergkamp – the white base is overlaid with vibrant multicolored graphics that evoke the eye-catching kits that were in fashion at the time. Official MLS branding ensures that you feel like a pro with the ball at your feet. A seamless shell creates a sleek silhouette that reduces air resistance, giving the ball perfect speed and curl in the air, essential for powerful long-range shots and whipped crosses. The thermally-bonded panels offer superb durability and a consistent contact zone, so you can take delicate touches and pass and move with more confidence than ever before, and a textured surface provides the grip you need to connect cleanly. The sturdy, high-grade butyl bladder can take a beating in intense training sessions and games without losing any air, and a watertight finish on the shell minimizes moisture uptake to ensure peak performance come rain or snow.",
    itemPrice: "$120",
    quantity: 1,
    id: 5,
  },
  {
    itemImg: mlsTrain,
    imgAlt: "Mls Training Soccer Ball",
    itemName: "Mls Training Soccer Ball",
    description: "Soccer Ball",
    itemInfo: "Show your passion for MLS with the adidas MLS Training Ball in White/Black/Solar Gold. Based on the balls used for elite games in the top tier of US soccer, the MLS Training ball allows you to practice and play like the very best. Designed to commemorate the 1994 FIFA World Cup – where the United States played host to the most iconic national teams and players in the world, including the likes of Romario, Hristo Stoichkov, Roberto Baggio and Dennis Bergkamp – the white base is overlaid with vibrant multicolored graphics that evoke the eye-catching kits that were in fashion at the time. Official MLS branding ensures that you feel like a pro with the ball at your feet. A tough machine-stitched shell provides the robustness to last through relentless use, and the TPU cover offers a consistent contact zone, so you can hone your touch and technical skills on the training field. Designed with a hard-wearing Butyl bladder, this ball retains air through the most high-intensity play.",
    itemGround: "ball",
    itemPrice: "$35",
    quantity: 1,
    id: 6,
  },
  {
    itemImg: nikePhantom,
    imgAlt: "Nike Phantom Soccer Ball",
    itemName: "Nike Phantom Soccer Ball",
    description: "Soccer Ball",
    itemGround: "ball",
    itemInfo: "Buy the Nike Phantom in White/Black/Gold/Gold from Pro:Direct, the Professional's Choice, and choose from a range of delivery options.",
    itemPrice: "$45",
    quantity: 1,
    id: 7,
  },
  {
    itemImg: premierAcademy,
    imgAlt: "Premier League Academy Soccer Ball",
    itemName: "Premier League Academy Soccer Ball",
    description: "Soccer Ball",
    itemInfo: "Play like the pros with the Nike Premier League Academy ball in White/Fierce Purple/White, which is based on the ones used by Erling Haaland and Marcus Rashford in the game's most exciting division. The Nike Premier League Academy ball is ready for everyday play with high-contrast graphics for tracking and a 12-panel design for true and accurate flight. Its reinforced rubber bladder helps maintain air and shape retention, while the textured casing helps you control the ball in all conditions.",
    itemGround: "ball",
    itemPrice: "$45",
    quantity: 1,
    id: 8,
  },
  {
    itemImg: premierBall,
    imgAlt: "Premier League Soccer Ball",
    itemName: "Premier League Soccer Ball",
    description: "Soccer Ball",
    itemGround: "ball",
    itemInfo: "Play like the pros with the Nike Premier League Academy ball in White/Metallic Gold Star/Black, which is based on the ones used by Erling Haaland and Marcus Rashford in the game's most exciting division. The Nike Premier League Academy ball is ready for everyday play with high-contrast graphics for tracking and a 12-panel design for true and accurate flight. Its reinforced rubber bladder helps maintain air and shape retention, while the textured casing helps you control the ball in all conditions.",
    itemPrice: "$35",
    quantity: 1,
    id: 9,
  },
  {
    itemImg: womensUefa,
    imgAlt: "Womens Uefa Soccer Ball",
    itemName: "Womens Uefa League Soccer Ball",
    description: "Soccer Ball",
    itemGround: "ball",
    itemInfo: "Prepare for the knockout stages of the 2023/24 UWCL with the adidas Women’s UCL League in White/Black/Solar Red. FIFA Quality certified, this ball guarantees perfect circumference, weight, rebound and water resistance. The adidas Women’s Champions League league ball is a robust, high-performance replica of the one used in the Women’s Champions League knockout stages, perfect for intense training and competitive games. Designed in celebration of the stunning architecture of the host city of the 2024 final, striking abstract patterns draw inspiration from San Mames Stadium and the wider Bilbao area. A seamless shell creates a sleek silhouette that reduces air resistance, giving the ball perfect speed and curl in the air, essential for powerful long-range shots and whipped crosses. The TSBE construction offers superb durability and a consistent contact zone, so you can take delicate touches and pass and move with more confidence than ever before. The sturdy butyl bladder can take a beating in intense training sessions and games without losing any air, and a laminated finish on the shell minimizes water uptake to ensure peak performance even in the wet.",
    itemPrice: "$95",
    quantity: 1,
    id: 10,
  },
];

// Any item that is favorited is added into the favoiteList below, which is then accessed and displayed
//In the NavBar Component
export const favoriteList = [];

export default function Itembox(props) {
  //Here are the props that are used for each item
  const {
    itemImg,
    imgAlt,
    discount,
    itemName,
    itemPrice,
    itemGround,
    description,
    id,
  } = props;
  //This is a use state which is set as data
  const [data, setData] = useState({});
  const navigate = useNavigate();
  //This variable sets the defualt selected item to 0 in order to later on set it to one and
  //Initially display the first itmem of the list
  let selectedItem = 0;
  let selectedItemSG = 0;
  let selectedItemTraining = 0;
  let selectedKeeperItem = 0;
  let selectedJerseyItem = 0;
  //Depending on the prop of each item list, it is filtered and the data is set based
  //On the items props id
  const setId = (myId) => {
    if (itemGround === "soft") {
      console.log("soft");
      //Sets the initially set id from 1 to any id that is selcted based on the user choice in the list
      selectedItemSG = indoorCleatItemList.find(({ id }) => id === myId);
    } else if (itemGround === "ball") {
      selectedItemTraining = trainingItemList.find(({ id }) => id === myId);
    } else if (itemGround === "gloves") {
      selectedKeeperItem = keeperItemList.find(({ id }) => id === myId);
    } else if (itemGround === "jersey") {
      selectedJerseyItem = jerseyItemList.find(({ id }) => id === myId);
    }
    selectedItem = fgCleatList.find(({ id }) => id === myId);
  };

  //When the user clicks on the item, the data is set based on the props name and changes the data
  //which is displayed onto the next dynamic page.
  const toggledItem = (e) => {
    e.preventDefault();
    let data = {};
    if (itemGround === "soft") {
      data = selectedItemSG;
    } else if (itemGround === "ball") {
      data = selectedItemTraining;
    } else if (itemGround === "gloves") {
      data = selectedKeeperItem;
    } else if (itemGround === "jersey") {
      data = selectedJerseyItem;
    } else {
      data = selectedItem;
    }
    setData(data);
    navigate("/ItemPage", { state: { data } });
  };

  //Adds item onto the favorite list which is called each time the favorite button is selected/pressed
  function addToFavorite(item) {
    let isPresent = false;
    favoriteList.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      return;
    }
    //Checks what item list has been slected out of the 3 list based on the props variable and pushes said
    //data on the item id
    if (itemGround === "soft") {
      favoriteList.push(selectedItemSG);
    } else if (itemGround === "ball") {
      favoriteList.push(selectedItemTraining);
    } else if (itemGround === "gloves") {
      favoriteList.push(selectedKeeperItem);
    } else if (itemGround === "jersey") {
      favoriteList.push(selectedJerseyItem);
    } else {
      favoriteList.push(selectedItem);
    }
  }

  return (
    <div className="itemBox">
      <div className="imageBox">
        <Link to="/ItemPage" onClick={toggledItem}>
          <img
            src={itemImg}
            alt={imgAlt}
            className="itemImage"
            onClick={setId(id)}
            key={id}
          />
        </Link>
        <div className="imageAddon">
          <ul>
            <li className="visually-hidden">
              <p className="discountPercentage">{discount}</p>
            </li>
            <li
              className="iconHeart"
              //Adds favorite itemm based on the props variable and id
              onClick={() => {
                if (itemGround === "soft") {
                  addToFavorite(selectedItemSG);
                } else if (itemGround === "ball") {
                  addToFavorite(selectedItemTraining);
                } else if (itemGround === "gloves") {
                  addToFavorite(selectedKeeperItem);
                } else if (itemGround === "jersey") {
                  addToFavorite(selectedKeeperItem);
                } else {
                  addToFavorite(selectedItem);
                }
              }}
              id="myHeart"
            >
              <i className="fa-regular fa-heart favoriteIcon"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="itemInfo ">
        <h1>{itemName}</h1>
        <p className="description">{description}</p>
        <p className="item-price">{itemPrice}</p>
      </div>
    </div>
  );
}
