import React, { Component } from "react";
import Link from '@docusaurus/Link';
import '../css/index-contribute.css';
import Translate, {translate} from '@docusaurus/Translate';
export default class IndexContribute extends Component {
    render () {
        return (
            <div class="Outer-layer-contribute">
                <div class="contribute">
                    {/* <div class="contribute-girl">
                       <img src={require('../../svg/img-started-left.jpg').default} alt="" />
                    </div> */}
                    <div class="contribute-middle-content" id="contribute-middle-content">
                        <div class="contribute-title"><Translate>How to Contribute?</Translate></div>
                        <div class="contribute-font"><Translate>IvorySQL community includes developers from around the world who develop and use open source databases. Everyone is welcome and encouraged to participate.</Translate></div>
                        <Link 
                            className="button" 
                            id="contribute-link"
                            to="https://github.com/IvorySQL/IvorySQL">
                              <span id="contribute-span"><Translate>Get Started</Translate></span>
                        </Link>
                    </div>
                    {/* <div class="contribute-leaf">
                       <img src={require('../../svg/img-started-right.jpg').default} alt="" />
                    </div> */}
                </div>
            </div>
        );
    };
}