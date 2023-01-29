import React from 'react';

import './style.less'
import iGit from './gitIcon.png'
const Footer = (props:{})=>{

const {} = props

    return(<>
            <footer>©2022 - 2023 By &nbsp; 
              <a href="https://github.com/LeiGitHub1024/Alyosha" target='_blank'>
                <span style={{fontWeight:'bold'}}>Alyosha</span>
                <div style={{margin:'10px', display:'inline-block', height:'24px',width:'24px',backgroundImage:`url(${iGit})`}}></div>
              </a>
            </footer>
    </>)
}
export default Footer;