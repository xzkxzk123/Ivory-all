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
                        <div class="svg-Balloon">
                            <Balloon></Balloon>
                        </div>
                        {/* <div class="Recent-Activities">Recent Activities</div> */}
                        <div class="hr-action">— Recent Activities —</div>
                    </div>
                    <div class="activity-content">
                        <div class="content-pgconf" id="content-pgconf">
                            <img src={require('../../svg/banner-pgconf2022.png').default} class="actionimg-pgconf" alt="" />
                            <div class="activity-content-title">PostgresConf.CN 2022 中国PostgreSQL数据库生态大会</div>
                            <div class="activity-content-title-small">12.09-11 / 北京中科院软件所</div>
                            <p><Translate>The "2022 China PG Ecological Conference", organized by PG China, will be themed "Collaborative Progress", inviting experts, scholars, manufacturers and user representatives to have an in-depth discussion on the promotion and application of PG in the industry and region.</Translate> </p>
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
                            <div class="activity-content-title">IvorySQL 2022 一日开源活动</div>
                            <div class="activity-content-title-small">12.09-11 / 济南喜来登酒店</div>
                            <p><Translate>We encouraged all developers to participate in the open source development of IvorySQL, contribute code or help the community submit and fix bugs, etc., and grow together with the project. Through this activity, we hope we encourage and maintain IvorySQL users, improve the IvorySQL project activity.</Translate></p>
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