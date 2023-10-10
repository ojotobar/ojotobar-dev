import React from 'react';
import './App.css';
import { useGetPersonalInfoQuery, useGetUserDetailsQuery, useGetUserStatsQuery } from './features/api/userApi';
import { useGetUserEducationQuery } from './features/api/educationApi';
import { useGetUserSocialLinksQuery } from './features/api/mediaLinkApi';
import { useGetUserSkillsQuery } from './features/api/skillApi';
import { useGetUserProjectsQuery } from './features/api/projectApi';
import NavigationBar from './components/NavigationBar';
import Profile from './components/Profile';
import { About } from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { data: me } = useGetUserDetailsQuery();
  const {data: info } = useGetPersonalInfoQuery(me?.id);
  const { data: stats } = useGetUserStatsQuery(me?.id);
  const { data: educations } = useGetUserEducationQuery(me?.id);
  const { data: mediaLinks } = useGetUserSocialLinksQuery(me?.id);
  const { data: skills } = useGetUserSkillsQuery(me?.id);
  const { data: projects } = useGetUserProjectsQuery(me?.id);

  return (
    <div className="" style={{margin: 0, padding: 0}}>
      <NavigationBar />
      <Profile me={me} socials={mediaLinks}/>
      <About me={me} stats={stats} educations={educations} />
      <Experience skills={skills}/>
      <Project projects={projects}/>
      <Contact info={info} socials={mediaLinks}/>
      <Footer info={info}/>
    </div>
  );
}

export default App;
