import React, { Component } from "react";
import Link from '@docusaurus/Link';
import  '../css/index-introduce.css';
import OpenSource from '../../svg/icon-opensource.svg';
import Pgsql from '../../svg/icon-pg.svg';
import Oracle from '../../svg/icon-oracle.svg';
import Customize from '../../svg/icon-customize.svg';
import Highgo from '../../svg/icon-hg.svg';
import Translate, {translate} from '@docusaurus/Translate';
export default class IndexIntroduce extends Component {
    render () {
    return (
        <div class="index-introduce">
            <div class="top">
                <div class="top-opensource">
                    <OpenSource class="svg"></OpenSource>
                    <span class="introduce-title"><Translate>Open Source</Translate></span>
                    <span class="introduce-content" id="introduce-content-open"><Translate>No Vendor Lock-In</Translate>。</span>
                </div>
                <div class="top-pgsql">
                    <Pgsql class="svg"></Pgsql>
                    <span class="introduce-title"><Translate>Powered by PostgrSQL</Translate></span>
                    <span class="introduce-content" id="introduce-content-pg"><Translate>Based on the PostgreSQL, with full SQL, rock-solid reliability, and a massive ecosystem.</Translate></span>
                </div>
                <div class="top-oracle">
                    <Oracle class="svg"></Oracle>
                    <span class="introduce-title"><Translate>Oracle Compatible</Translate></span>
                    <span class="introduce-content" id="introduce-content-io"><Translate>Migrate your Oracle DB to IvorySQL.</Translate></span>
                </div>
            </div>
            <div class="buttom">
                <div class="buttom-customize">
                    <Customize class="svg-cust"></Customize>
                    <span class="introduce-title" id="introduce-title-cust"><Translate>Customization</Translate></span>
                    <span class="introduce-content" id="introduce-content-cust"><Translate>Just download the code and make it as you like.</Translate></span>
                </div>
                <div class="buttom-Highgo">
                    <Highgo class="svg-hg"></Highgo>
                    <span class="introduce-title" id="introduce-title-hg"><Translate>Backed by HighGo</Translate></span>
                    <span class="introduce-content" id="introduce-content-hg"><Translate>Supported by HighGo, The leading provider of PostgreSQL database.</Translate></span>
                    <Link 
                      className="button" 
                      id="link-hgcom"
                      to="https://www.highgo.com/">
                        <span>+</span>
                        <div>More</div>
                    </Link>
                </div>
            </div>
        </div>
    ); 
  };   
}    