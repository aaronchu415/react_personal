import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SectionOne from './components/Section1';
import SectionTwo from './components/Section2';
import ProjectPage from './components/ProjectPage';
import SideBar from './components/SideBar';
import uuid from 'uuid/v4';


class App extends Component {

  state = {
    projects: [
      {
        id: "80d8bf01-ccaf-4c13-b5f5-0a7de7eb1069",
        name: "Jobly",
        header: "React • Node/Express • PostgreSQL • WebSockets",
        description: `Jobly is a career portal that allows job seekers to apply for open listings posted by companies.
        The front-end is built using React and features a robust and secure user setup. The registration, login, and authentication process uses JSON web token and bcrypt.
        Jobly also has a group-chat feature built using WebSockets that allow jobseekers and recruiters to connect  another.
        In the back-end, company and user data is stored in a PostgreSQL database.
        Individual components of Jobly are tested using Jest according to the Test Driven Development principles.`,
        github_url: "https://github.com/aaronchu415/jobly_fullStack",
        deploy_url: "https://jobly-pa.herokuapp.com/",
        img_url: "./img/jobly/jobly_front.png",
        images: [
          { img: "/img/jobly/jobly_signup.png", desc: 'Sign-Up' },
          { img: "/img/jobly/jobly_login.png", desc: 'Login' },
          { img: "/img/jobly/jobly_company_ss.png", desc: 'Company Page' },
          { img: "/img/jobly/jobly_job_ss.png", desc: 'Job Page' },
          { img: "/img/jobly/jobly_chat_ss.png", desc: 'Chat Feature' },
          { img: "/img/jobly/jobly_edit.png", desc: 'Edit Profile' }]
      },
      {
        id: "992f1d74-0cd6-4f30-a53f-ae5b6f061d10",
        name: "Tweet",
        header: "Jinja • Flask • PostgreSQL",
        description: `Tweet is a full-stack Twitter clone built with Flask that allows users to write tweets, follow other users, and comment on tweets.
        The front end is built using Jinja templating engine and features a robust and secure user setup. The registration, login, and authentication process uses flask sessions and bcrypt.
        Tweet also features an auto-complete search function implemented using a trie data structure that allows users to quickly search for other existing users.
        In the back-end, user data and profiles are stored in a PostgreSQL database.
        Individual components of Tweet are tested using the unittest module according to the Test Driven Development principles.`,
        github_url: "https://github.com/aaronchu415/Tweet",
        deploy_url: null,
        img_url: "./img/tweet/tweet_login.png",
        images: [
          { img: "/img/tweet/tweet_login.png", desc: 'Login' },
          { img: "/img/tweet/tweet_signup.png", desc: 'Signup' },
          { img: "/img/tweet/tweet_feed.png", desc: 'Tweet Feed' },
          { img: "/img/tweet/tweet_users.png", desc: 'List of Users' },
          { img: "/img/tweet/tweet_profile.png", desc: 'User Profile' },
          { img: "/img/tweet/tweet_edit.png", desc: 'Edit Profile' }]
      },
      {
        id: "203cf596-8742-45b4-bfaf-9ec025c9af2e",
        name: "LeetSearcher",
        header: "Flask • MongoDB • Beautifulsoup4",
        description: `LeetSearcher is a web-scraping application built with Flask. Users can 
        search for key terms such as "flask," "react," "redux," etc. It 
        crawls through domains such as Rithm School (curric.rithmschool.com/) and Geeks for Geeks (www.geeksforgeeks.org) by
        using request and beautifulsoup4 to look for matches. LeetSearcher provides example code snippets for search results 
        and allows users to preview the webpage straight from the search engine.
        Previous search results are cached in a MongoDB database to facilitate faster response time in subsequent searches.
        It uses an inverted index search algorithm for constant time searching on popular pages.
        The front-end is built using modern HTML/CSS with bootstrap.`,
        github_url: "https://github.com/odoland/leetmommy11",
        deploy_url: "https://leetmommy.herokuapp.com/",
        img_url: "./img/leetSearch/leet_main.png",
        images: [
          { img: "/img/leetSearch/leet_main.png", desc: 'Search Menu' },
          { img: "/img/leetSearch/leet_links.png", desc: "Link Results for 'flask'" },
          { img: "/img/leetSearch/leet_links2.png", desc: "Link Results for 'react'" },
          { img: "/img/leetSearch/leet_code.png", desc: "Code Snippets for 'react'" },
          { img: "/img/leetSearch/leet_interview.png", desc: "Interview Question Links for 'tree'" },
          { img: "/img/leetSearch/leet_html_preview.png", desc: 'Preview HTML page' },
          { img: "/img/leetSearch/leet_html_preview2.png", desc: 'Preview HTML page' }]
      },
      {
        id: "453cf596-8742-45b4-bfaf-9ec025c9af2eee",
        name: "CrimeSpotter",
        header: "jQuery • Google Maps API",
        description: `CrimeSpotter is a web application where users can search for reported crimes in any San Francisco neighborhood. 
        The application is built using jQuery, Bootstrap, and Google Maps API.
        The application allows users to query hundreds of thousands of reported crimes plotted on the Google Map interface, 
        with the information pulled straight from DataSF. Users can view this data in the form of a heat or cluster map. 
        Additionally with the location search feature, crimes can be searched by any point of interest.`,
        github_url: null,
        deploy_url: null,
        img_url: "./img/crimes/crimes_main.png",
        images: [
          { img: "/img/crimes/crimes_main.png", desc: 'Landing Page' },
          { img: "/img/crimes/crimes_search.png", desc: "Search Menu for 'robbery': 10,000 records" },
          { img: "/img/crimes/crimes_menu_load.png", desc: "Loading data" },
          { img: "/img/crimes/crimes_result.png", desc: "Results for 'robbery'" },
          { img: "/img/crimes/crimes_location_search.png", desc: "View 'robbery' around Google San Francisco" },
          { img: "/img/crimes/crimes_details.png", desc: 'Details on a specific incident' },
          { img: "/img/crimes/crimes_details2.png", desc: 'Details on a specific incident' },
          { img: "/img/crimes/crimes_cluster.png", desc: 'Cluster map' },
        ]
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/project/:id"
              render={rtProps =>
                <React.Fragment>
                  <ProjectPage {...rtProps} projects={this.state.projects}></ProjectPage>
                </React.Fragment>} />
            <Route path="/"
              render={rtProps =>
                <React.Fragment>
                  <Header></Header>
                  <SectionOne></SectionOne>
                  <SectionTwo projects={this.state.projects}></SectionTwo>
                </React.Fragment>} />
          </Switch>
        </BrowserRouter>
        {/* <SideBar></SideBar> */}
      </div>
    );
  }
}

export default App;
