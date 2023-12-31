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
import CustomSpinner from './components/CustomeSpinner';

function App() {
  const { data: me, isLoading: loadingDetails } = useGetUserDetailsQuery();
  const {data: info, isLoading: loadingInfo } = useGetPersonalInfoQuery(me?.id);
  const { data: stats, isLoading: loadingStats } = useGetUserStatsQuery(me?.id);
  const { data: educations, isLoading: loadingEdu } = useGetUserEducationQuery(me?.id);
  const { data: mediaLinks, isLoading: loadingLinks } = useGetUserSocialLinksQuery(me?.id);
  const { data: skills, isLoading: loadingSkills } = useGetUserSkillsQuery(me?.id);
  const { data: projects, isLoading: loadingProjects } = useGetUserProjectsQuery(me?.id);

  return (
    <div className="" style={{margin: 0, padding: 0}}>
      <NavigationBar />
      {
        loadingDetails || loadingEdu || 
        loadingInfo || loadingLinks || 
        loadingProjects || loadingSkills || 
        loadingStats ?
        <CustomSpinner /> :
        <>
          <Profile me={me} socials={mediaLinks}/>
          <About me={me} stats={stats} educations={educations} />
          <Experience skills={skills}/>
          <Project projects={projects}/>
          <Contact info={info} socials={mediaLinks}/>
          <Footer info={info}/>
        </>
      }
    </div>
  );
}

export default App;
