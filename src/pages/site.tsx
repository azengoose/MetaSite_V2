import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Contents from "../components/contents";
import { RightArrow } from "../components/arrows";

export default function Site() {
  const [initial] = useState({ opacity: 0, x: 0 });
  var animate = { opacity: 1 };
  const [exit, setExit] = useState({ opacity: 0, x: 0, y: 0 });

  const [clicked, setClicked] = useState(false);

  function handleClickRight() {
    setExit({ opacity: 0, x: -900, y: 0 });
    setClicked(true);
  }
  function handleClickLeft() {
    setExit({ opacity: 0, x: 500, y: 0 });
    setClicked(true);
  }
  const Disappear = {
    display: clicked ? "none" : "block"
  };
  var variants = {
    initial: initial,
    animate: animate,
    exit: exit
  };

  return (
    <>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <button
          className="arrow-btn"
          onClick={handleClickRight}
          style={Disappear}
        >
          <RightArrow link="/" />
        </button>

        <div className="content-space">
          <h1 className="h1-space">Websites</h1>

          <p className="sub-text">
            This is the obligatory page explicity about websites on the website
            about websites.
          </p>
          <h2 className="h2-body"> Introduction</h2>
          <p>
            The magical thing about code, software, to any type of engineering:
            the sky&rsquo;s <em>not</em> the limit.
          </p>
          <p>
            Engineers, and in this case, website owners and designers, have the
            privilege and responsibility to perform amazing and novel feats
            within their moral bounds.
          </p>
          <h2 className="h2-body"> Website Taxonomy </h2>
          <p>
            I&rsquo;ll spare you an awful attempt at categorising the entirety
            of human created content, but the functions of sites can be a more
            manageable affair.
          </p>
          <p>
            Simply, websites can be separated via content (dynamic/changing,
            user-created) and function (generally unchanging,
            developer-created).
          </p>

          <p>Current website functions include:</p>
          <ol>
            <li>
              Information, documentation, news, opinion, entertainment, art,
              experimentation &ndash; primarily one way dissemination from
              creator to audience.
              <ul>
                <li>
                  Wikis, blogs, tutorials, video streaming, portfolios,
                  galleries, businesses
                </li>
              </ul>
            </li>
            <li>
              Online socialising &ndash; two or multi way communication and
              interaction.
              <ul>
                <li>Social media, forums</li>
              </ul>
            </li>
            <li>
              Administration &ndash; governmental, societal interaction.
              <ul>
                <li>Banking, government sites, forms, voting</li>
              </ul>
            </li>
            <li>
              E-commerce and finance &ndash; monetary exchange.
              <ul>
                <li>Banking, online stores, memberships</li>
              </ul>
            </li>
            <li>
              Tools for creation &ndash; platforms for users.
              <ul>
                <li>Website makers, music boxes, slides, writing software</li>
              </ul>
            </li>
          </ol>
          <p>
            For many of the social, dynamically interactive sites, the function
            of sites, although shaped by one or many creators in an open-source
            project, is in fact moulded by users.
          </p>
          <p>
            And site functions aren&rsquo;t usually siloed so simply as
            illustrated above. But it&rsquo;s worth considering the primary
            functions of sites whether as creators or users of sites.
          </p>
          <h2 className="h2-body">Practical Uses</h2>
          <ol>
            <li>
              Businesses. Websites for businesses or companies in the mid-early
              21st century aren&rsquo;t exactly something to brag about, but
              it&rsquo;s a mistake to not have.
            </li>
            <li>
              E-commerce, selling digital products, merchandise, physical goods;
              generating revenue via ads and affiliates for example.
            </li>
            <li>
              Your resum&eacute;. Websites are your personal resume; that, or a
              LinkedIn profile &ndash; this depends on whether recruiters are
              more vested in your skills, visible work, portfolio, ethic or
              experiences.
            </li>
            <li>
              Web development. Everyone and everything can benefit from the use
              of a website and if you can build them or have a basic know-how
              for them, you can create value for others.
            </li>
          </ol>
          <p></p>
          {/* <div className="center">
            <Link to="/demo" className="btn--cool">
              Website Site Demo
            </Link>
          </div> */}
        </div>
      </motion.div>
    </>
  );
}
