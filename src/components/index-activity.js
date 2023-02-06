import React, { Component } from "react";
import Link from '@docusaurus/Link';
import Balloon from '../../svg/icon-balloon.svg';
import  '../css/index-activity.css';
import Translate, {translate} from '@docusaurus/Translate';
export default class IndexActivity extends Component {
    render () {
        return (
                <div class="index-activity">
                    <div class="activity-title" id="activity-title">
                        <div class="svg-Balloon" id="svg-Balloon">
                            <div><Balloon></Balloon></div>
                        </div>
                        {/* <div class="Recent-Activities">Recent Activities</div> */}
                        <div class="hr-action" id="hr-action">— <Translate>Recent Activities</Translate> —</div>
                    </div>
                    <div class="activity-content">
                        <div class="content-pgconf" id="content-pgconf">
                            <img src={require('../../svg/banner-pgconf2022.png').default} class="actionimg-pgconf" alt="" />
                            <div class="activity-content-title"><Translate>China PostgreSQL Database Ecology Conference</Translate></div>
                            <div class="activity-content-title-small"><Translate>17.02-19.02/ Institute of Software, Beijing Academy of Sciences</Translate></div>
                            <p><Translate>'China PostgreSQL Database Ecology Conference' organized by PostgreConf.CN With the theme of 'Collaborative Progress', experts, scholars, representatives of manufacturers and users will be invited to have an in-depth discussion on the promotion and application of PG in the industry and region.</Translate> </p>
                            <Link 
                                className="button" 
                                id="link-pgconf"
                                to="https://2022.postgresconf.cn/speech/180">
                                  <span><Translate>+</Translate></span>
                                  <div><Translate>More</Translate></div>
                            </Link>
                        </div>
                        <div class="content-oneday" id="content-oneday">
                            <img src={require('../../svg/banner-activity-opensource.png').default} class="actionimg-oneday" id="actionimg-oneday" alt="" />
                            <div class="activity-content-title"><Translate>IvorySQL 2022 - One Day Open Source at IvorySQL</Translate></div>
                            <div class="activity-content-title-small"><Translate>11.03-11.11</Translate></div>
                            <p><Translate>One day open source at IvorySQL for all programmers of open source databases, and for all programmers who love and use open source or databases. We encouraged all developers to participate in the open source development of IvorySQL, contribute code or help the community submit and fix bugs, etc., and grow together with the project. Through this activity, we hope we encourage and maintain IvorySQL users, improve the IvorySQL project activity.</Translate></p>
                            <Link 
                                className="button"
                                id="link-oneday"
                                to="/building">
                                  <span><Translate>+</Translate></span>
                                  <div><Translate>More</Translate></div>
                            </Link>
                        </div>
                    </div>
                </div>
        );
    };
}