import React from "react";
import navbar from "./navbar.module.scss";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import { navslist } from "@/data";
import Button from "@/components/button";
import Link from "next/link";

const Navbar = () => {

  return (
    <div className={navbar.main_navs}>
      <div className={navbar.logo_cont}>
        <Link href='/'>
          <Icon
          icon="fluent:dishwasher-32-filled"
          className={navbar.scandish_logo}
        />
        </Link>
      
        <div className={navbar.scandish_text}>Scandish</div>
      </div>
      <div className={navbar.navs}>
        {navslist.map((list) => (
          <Link key={list.id} href={list.href} className={navbar.links}>
          {list.List}
          </Link>
        ))}
      </div>
      <Button className={navbar.btn} label="Log in" type="button"  />
    </div>
  );
};

export default Navbar;
