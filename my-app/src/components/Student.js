import Link from 'next/link'
import React from 'react'
import {useState} from 'react';
import Image from 'next/image';
import logoPic from "../../public/meru university logo.png"
import { Bugers, Styledburger } from '../styles/Bgst';
import { AngleDown, Facebook, Icons, Image1, Instagram, Linkcontainer, Linkdiv, Links, Links1, Links2, Menu, Navcontainer, Navinformer, Sidebar, Sidebar2, Span, Staff, Student, Twitter } from '../styles/Navmeru'

import { FaAngleDown,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import { Linka, Linkk, Linkli } from '../styles/Reusables';

export default function Studentnav (props){
  
    return(
        <Sidebar open1={props.open1} >
         <Linkk>
            <Linkli><Linka href="/" passHref>Home</Linka></Linkli>
            <Linkli><Linka href="/" passHref>Home</Linka></Linkli>
            <Linkli><Linka href="/" passHref>Home</Linka></Linkli>
            <Linkli><Linka href="/" passHref>Home</Linka></Linkli>
          </Linkk>
    </Sidebar>
    )
}