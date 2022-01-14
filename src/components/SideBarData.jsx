import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const SideBarData = [
    {
        title: 'Deutschland',
        path: '/deutschland',
        icon: <FaIcons.FaFlag />,
        cName: 'nav-text'
    },
    {
        title: 'Welt',
        path: '/welt',
        icon: <BiIcons.BiWorld />,
        cName: 'nav-text'
    },
    {
        title: 'Meine Lokalnachrichten',
        path: '/localnachrichten',
        icon: <MdIcons.MdLocationPin />,
        cName: 'nav-text'
    },
    {
        title: 'Wirtschaft',
        path: '/wirtschaft',
        icon: <MdIcons.MdOutlineBusiness />,
        cName: 'nav-text'
    },
    {
        title: 'Wissenschaft',
        path: '/wissenschaft',
        icon: <FaIcons.FaFlask />,
        cName: 'nav-text'
    },
    {
        title: 'Technik',
        path: '/technik',
        icon: <GrIcons.GrTechnology />,
        cName: 'nav-text'
    },
    {
        title: 'Unterhaltung',
        path: '/unterhaltung',
        icon: <FaIcons.FaTheaterMasks />,
        cName: 'nav-text'
    },
    {
        title: 'Sport',
        path: '/sport',
        icon: <MdIcons.MdOutlineDirectionsBike />,
        cName: 'nav-text'
    },
    {
        title: 'Gesundheit',
        path: '/gesundheit',
        icon: <RiIcons.RiMentalHealthLine />,
        cName: 'nav-text'
    },
    {
        title: 'Hilfe',
        path: '/hilfe',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]

