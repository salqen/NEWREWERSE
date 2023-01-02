import React from "react";
import "../styles/style.scss";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";
import logodark from "../assets/images/logo/rewelogo.png";
import styled from "@emotion/styled";

function Navbar(props) {
  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 1.2,
      },
    },
  };

  return (
    <div className="container">
      <header>
        <div className="menu" onClick={() => props.openMenu()}>
          {props.menuState ? (
            <BiMenuAltRight size={35} color="white" />
          ) : (
            <HiMenu size={35} color="white" />
          )}
        </div>
      </header>
      <AnimatePresence>
        {props.menuState && (
          <motion.div
            className="menu_container"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <div className="btn_close" onClick={() => props.closeMenu()}>
              X
            </div>
            <motion.a
              href="#hero"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              00 | Home
            </motion.a>
            <motion.a
              href="/"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              01 | Creative Studio 3.0
            </motion.a>
            <motion.a
              href="#mission"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              02 | MISSION
            </motion.a>
            <motion.a
              href="#deeckfrens"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            >
              03 | Deeck Frens
            </motion.a>
            <motion.a
              href="#blockchain"
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              04 | Blockchain
            </motion.a>
            <motion.a
              href="#blockchips"
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              05 | Blockchips
            </motion.a>
            <motion.a
              href="#phigital"
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              06 | Phigital Developing
            </motion.a>
            <motion.a
              href="#roadmap"
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              07 | Roadmap
            </motion.a>
            <motion.a
              href="#team"
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              08 | Core Team
            </motion.a>
            <motion.a
              href="#partners"
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              09 | Partners
            </motion.a>
            <motion.a
              href="#contact"
              onClick={() => {
                props.closeMenu();
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              10 | Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          pointerEvents: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          id="logo_header"
          style={{
            width: "220px",
            height: 45,
            marginTop: "15px",
          }}
          src={logodark}
          alt="Binasea"
        />
      </div>
    </div>
  );
}

export default Navbar;
